import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgSwitch,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Switch Case';
  users = ['Anil', 'Bhasker', 'Sam', 'Peter', 'Burce'];
  userDetails=[
    {name:'Anil', email:'anil@test.com', phone:'888'},
    {name:'Bhaskar', email:'bha@test.com', phone:'888'},
    {name:'Sam', email:'sam@test.com', phone:'222'},
    {name:'Peter', email:'peter@test.com', phone:'888'},
  ];
  
}

