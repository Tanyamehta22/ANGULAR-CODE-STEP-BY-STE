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
  title = 'Nested Loop';
  users=[
    {name:'Anil', phone:'1111', socialAccounts:['facebook','insta','gmail']},
    {name:'Sam', phone:'2222',socialAccounts:['youtube','insta','linked']},
    {name:'Peter', phone: '3333',socialAccounts:['yahoo','facebook','gmail']},
    {name:'Burce', phone:'4444',socialAccounts:['linked','insta','gmail']}

  ] 
}

