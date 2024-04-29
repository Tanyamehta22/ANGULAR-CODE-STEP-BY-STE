import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  data = 'hello code';

  displayVal:string='';
  getValue(val: string)
  {
    console.warn(val)
    this.displayVal= val
  }
}
