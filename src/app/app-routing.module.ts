import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [

  {
    path:"student",
    component:StudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"teacher",
    component:TeacherComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"register",
    component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
