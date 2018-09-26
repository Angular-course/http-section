import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class ServersService {
    constructor(private http: HttpClient) {
    }

    storeServers(servers: any[]) {
        return this.http.post('https://angular-http-51985.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://angular-http-51985.firebaseio.com/data.json').pipe(map(
            (response) => {
                return response;
            }
        )).pipe(catchError(error => {
            return throwError(error);
        }));
    }

    getAppName() {
        return this.http.get('https://angular-http-51985.firebaseio.com/appName.json').pipe(map(
            (response) => {
                return response;
            }
        ));
    }
}
