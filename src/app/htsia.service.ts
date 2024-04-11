import { HashtagAnalyzerData, HashtagPost, Hashtag } from './htsia.namespace';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class HtsIaService {

  private data: HashtagAnalyzerData;

  private resultList: ReplaySubject<Hashtag[]> = new ReplaySubject<Hashtag[]>();

  constructor(
    private readonly http: HttpClient
  ) {
    this.http.get('assets/data/data.json').subscribe((data: HashtagAnalyzerData) => {
      this.setData(data).then(() => {
        this.updateResultList();
      }, () => {
        this.showError('ci sono dei problemi con il file data, vedi in console');
      });
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  public getData(): HashtagAnalyzerData {
    return this.data;
  }

  public getResultList(): Observable<Hashtag[]> {
    return this.resultList.asObservable();
  }

  public setData(data: HashtagAnalyzerData): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let error: boolean = false;

      data.posts.forEach((post: HashtagPost) => {

      });

      if (error) {
        reject();
      }

      this.data = data;
      resolve();
    });
  }

  public updateResultList(): void {
    const list: Hashtag[] = [];

    this.data.posts.forEach((post: HashtagPost) => {
      post.hashtags.split(' ').forEach((rawTag: string) => {
        const tag = rawTag.trim().replace('#', '');

        if (!list.find(h => h.tag === tag)) {
          const hashtag: Hashtag = new Hashtag();
          hashtag.tag = tag;
          list.push(hashtag);
        }

        const hashtag: Hashtag = list.find(h => h.tag === tag);
        hashtag.used++;
      });
    });

    this.resultList.next(list);
  }

  public showError(error: string): void {
    this.resultList.next([{ tag: error, used: 0 }]);
  }
}
