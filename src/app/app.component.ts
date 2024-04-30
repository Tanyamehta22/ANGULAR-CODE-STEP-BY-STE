import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgSwitch,NgFor, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Style Binding';
  color= "white";
  bgColor = "green";

  updateColor(){
    this.color = "blue"
    this.bgColor="black"
  }
}

