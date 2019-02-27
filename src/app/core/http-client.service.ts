import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, concatMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {}

  getStory() {
    return this.http.get('/hn/v0/item/8863.json?print=pretty');
  }

  getUrl(url: string) {
    return this.http.get(url);
  }

  getTopStory() {
    return this.getTopStories().pipe(
        map((arr: string) => arr[0]),
        concatMap((first) => 
          this.http.get('/hn/v0/item/' + first + '.json?print=pretty')
        ),
      );
  }

  getTopStories() {
    return this.http.get('/hn/v0/topstories.json?print=pretty');
  }
}
