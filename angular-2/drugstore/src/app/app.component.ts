import { DrugService } from './service/drug.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';
  list$: Observable<Drugs[]> = this.constructionService.getAll();
}

constructor(
  private drugService: DrugService,
) { }
