import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-recent',
  templateUrl: './search-recent.component.html',
  styleUrl: './search-recent.component.scss'
})
export class SearchRecentComponent implements OnInit {
  recentResearches = [
    'Top Brasil', 'Top Global', 'Esquenta Sertanejo',
    'Funk Hits', 'Pagodeira'
  ];

  searchField = '';

  ngOnInit(): void { }

  setSearch(search: string){
    this.searchField = search;
  }

  search(){
    console.log('Buscando...', this.searchField);
  }
}
