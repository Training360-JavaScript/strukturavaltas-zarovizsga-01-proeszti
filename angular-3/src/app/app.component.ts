import { ConstructionService } from 'src/app/service/construction.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  list$: Observable<Construction[]> = this.constructionService.getAll();
  title = 'angular-3';

  constructor(
    private constructionService: ConstructionService,
  ) { }
  onDelete(id: number) {
    this.constructionService.remove(Construction).subscribe(() => {
      this.list$ = this.constructionService.getAll();
    });
  }
}
