import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { fakeData } from '../../data/fakedata';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  private id:string | null = "0"
  contentPhoto: string = ""
  contentAuthor: string = ""
  contentTitle: string = ""
  contentDescription:string = "" 

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id')
    this.id = id
    })
    this.setComponentVaule(this.id)
  }

  setComponentVaule(id:string | null) {
    const result = fakeData.filter(article => article.id.toString() == id)[0]
    this.contentPhoto = result.photo
    this.contentAuthor = result.author
    this.contentTitle = result.title
    this.contentDescription = result.description
  }
}
