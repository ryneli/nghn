import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './core/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nghn';
  constructor(private http: HttpClientService) {}
  ngOnInit(): void {
    this.http.getTopStories().subscribe((res) => console.log(res));
  }
}
