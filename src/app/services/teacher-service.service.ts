import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../../teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>("assets/products.json")
  }

}
