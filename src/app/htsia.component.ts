import { Observable } from 'rxjs';
import { HtsIaService } from './htsia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './htsia.component.html',
  styleUrls: ['./htsia.component.css']
})
export class HtsIaComponent implements OnInit {
  title = 'hts-ia';

  public resultList: string = '';
  public stats: { name: string, number: number }[] = [];

  constructor(
    private readonly hashtagService: HtsIaService
  ) { }

  ngOnInit(): void {
    this.hashtagService.getResultList().subscribe((results: any[]) => {
      this.resultList = '';
      results.forEach((result: any) => {

      });
    });
  }

  public refresh(): void {
    this.hashtagService.updateResultList();
  }
}
