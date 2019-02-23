import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-story-view',
  template: `
  <p>{{story$ | async}}</p>
  `,
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit {
  private story$ = this.httpClient.getTopStory().pipe(map((json) => json['url']));

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
  }

}
