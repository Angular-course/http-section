import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';

@Injectable()

export class ServersService {
    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {
        return this.http.post('https://angular-http-51985.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://angular-http-51985.firebaseio.com/data.json').pipe(map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        )).pipe(catchError(error => {
            return throwError(error);
        }));
    }

    getAppName() {
        return this.http.get('https://angular-http-51985.firebaseio.com/appName.json').pipe(map(
            (response: Response) => {
                return response.json();
            }
        ));
    }
}
