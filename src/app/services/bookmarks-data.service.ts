import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookmarksDataService {

  constructor(private http : HttpClient) { }
  bookmarksArray;
  getBookmarks(){
    return this.http.get('https://raw.githubusercontent.com/RishikeshJ/bookmarks/main/Bookmarks.json');
  }
}
