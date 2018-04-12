import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { BaseService } from '../base.service';
import { School } from '../../models/school.model';

import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SchoolService extends BaseService {

  private schoolListRef = this.db.list<School>('schools');
  schools: Observable<School[]>;
  currentSchool: AngularFireObject<School>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpClient
  ) {
    super();
    this.schools = this.db.list<School>('/schools').valueChanges();
  }

  getSchoolList() {
    return this.schoolListRef;
  }

  addSchool(school: School) {
    return this.schoolListRef.push(school);
  }

  editSchool(school: School) {
    return this.schoolListRef.update(school.key, school);
  }

  removeSchool(school: School) {
    return this.schoolListRef.remove(school.key);
  }

  get(schoolId: string): AngularFireObject<School> {
    return this.db.object<School>(`/schools/${schoolId}`);
  }

}
