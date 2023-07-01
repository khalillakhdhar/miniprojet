import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import { Employee } from 'src/app/shared/classes/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  employee=new Employee();
  fb = ""; // état firebase
  downloadURL?: Observable<string>;
  selectedFile?: File ;
  percentage?: any;
      prcentage: number=0;

  constructor(private storage: AngularFireStorage,private router: Router, private employeeService: EmployeeService)
  {
    this.employee.grade="user";
  }
signup()
{
  this.employeeService.addEmployee(this.employee).subscribe((data)=>
  {
    console.log("utilisateur ajouté!",data);
    this.employee=new Employee();
  })
}
onFileSelected(event:any) {
  var n = Date.now();
  const file = event.target.files[0];
  const filePath = `/Profiles/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`/Profiles/${n}`, file);
  this.percentage = task.percentageChanges();
  this.percentage.subscribe((prcentage: number) => {
    this.prcentage = Math.round(prcentage);
  },
    (  error: any) => {
    console.log(error);
  })
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url) => {
          if (url) {
            this.fb = url;
            this.employee.photo=this.fb;

          }
          console.log(this.fb);
          this.employee.photo=this.fb;

        });
      })
    )
    .subscribe((url) => {
      if (url) {
        console.log(url);
        this.employee.photo=this.fb;
      }
    });

}
}
