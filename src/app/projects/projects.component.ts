import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.projects = db.list('projects').valueChanges();
  }

  ngOnInit() {
  }

}
