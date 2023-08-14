import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient, private route : Router) { }

  getSurveys(){
    return this.http.get('https://comp-229-team-free-final-9ed20f9ca3a9.herokuapp.com/survey');
  }

  login(userInfo : object): Observable<boolean>{
    return this.http.post('https://comp-229-team-free-final-9ed20f9ca3a9.herokuapp.com/users/login',{userInfo}).pipe(map(data => {
      let res :any = data;
      if (res.err) {
        return false;
      }
      this.route.navigate(['home']);
      return true;
    }));
  }

  register(userInfo : object): Observable<any>{
    return this.http.post('https://comp-229-team-free-final-9ed20f9ca3a9.herokuapp.com/users/register',{userInfo}).pipe(map(data => {
      let res :any = data;
      if (res.err) {
        return res;
      }
      this.route.navigate(['users/login']);
      return res;
    }));
  }

  createSurvey(survey : object): Observable<any>{
    return this.http.post('https://comp-229-team-free-final-9ed20f9ca3a9.herokuapp.com/survey/create',{survey}).pipe(map(data => {
      let res :any = data;
      if (res.err) {
        return res;
      }
      this.route.navigate(['survey']);
      return res;
    }));
  }

  getSurvetById(id : any){
    return this.http.get('https://comp-229-team-free-final-9ed20f9ca3a9.herokuapp.com/survey/' + id,).pipe(map(data => {
      let res :any = data;
      if (res.err) {
        return res;
      }
      return res;
    }));
  }

  submitSurvey(id : any, data : object){
    return this.http.post('https://comp-229-team-free-final-9ed20f9ca3a9.herokuapp.com/survey/' + id, {data}).pipe(map(data => {
      let res :any = data;
      if (res.err) {
        return res;
      }
      return res;
    }));
  }
}
