import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = ' 65371d654b8b984f6a35408a8e2c1ee460a8121f 
  ;
  private clientsecret = 65371d654b8b984f6a35408a8e2c1ee460a8121

  constructor(private http: Http) {
    console.log();
    this.username = 'Hano-Guru';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
