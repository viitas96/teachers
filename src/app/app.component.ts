import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TeacherServiceService} from "./services/teacher-service.service";
import {Teacher} from "../teacher";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'teachers';
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherServiceService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.teacherService.getAll()
      .subscribe((res) => this.teachers = res,
        (error) => console.log(error));
  }

}
