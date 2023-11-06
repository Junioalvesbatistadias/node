import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "junio alves";
  userData ={
    email:  "juniodias36@gmail.com",
    funcao:   "admin"
  }
  title = 'curso-angular';
}
