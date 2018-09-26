import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class ServersService {
    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {
        return this.http.post('https://angular-http-51985.firebaseio.com/data.json', servers);
    }
}
