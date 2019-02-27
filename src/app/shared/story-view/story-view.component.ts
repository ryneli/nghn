import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { map, concatMap } from 'rxjs/operators';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { of } from 'rxjs';

@Component({
  selector: 'app-story-view',
  template: `
  <h1>{{story$ | async}}</h1>
  <iframe width="100%" height="300" [src]="storyUrl"></iframe>
  `,
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit {
  private story$ = this.httpClient.getTopStory().pipe(
    map((json) => json['url']),
    );

  private storyUrl: SafeResourceUrl;

  constructor(private httpClient: HttpClientService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    of('https://www.ftc.gov/news-events/press-releases/2019/02/ftc-brings-first-case-challenging-fake-paid-reviews-independent')
    .subscribe((url) => this.storyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }

}
