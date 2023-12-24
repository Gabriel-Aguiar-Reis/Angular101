import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {
  @Input()
  id: string = "0"
  @Input()
  cardPhoto: string = ""
  @Input()
  cardAuthor: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""

}
