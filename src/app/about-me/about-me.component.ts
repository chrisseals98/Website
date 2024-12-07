import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  GoogleDoc()
  {
    window.open("https://docs.google.com/document/d/1xd1S1Z3ME9m1nvaH7Bw4QXEq6gTGEVNBqCTo-UW0tKg/edit?usp=sharing", "_blank");
  }

}
