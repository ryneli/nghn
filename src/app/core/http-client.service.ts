import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, concatMap, first, mergeMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getStory() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty');
  }

  getTopStory() {
    return this.getTopStories().pipe(
        map((arr: string) => arr[0]),
        concatMap((first) => 
          this.http.get('https://hacker-news.firebaseio.com/v0/item/' + first + '.json?print=pretty')
        ),
      );
  }

  getTopStories() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  }
}
