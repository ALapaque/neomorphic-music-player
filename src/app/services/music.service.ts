import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Music} from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() {
  }

  static createMusic(): Music {
    return {
      id: 0,
      artist: '',
      length: '',
      title: '',
      thumbnail: '',
      url: '',
    };
  }

  getMusics(): Observable<Music[]> {
    return of([
      {
        id: 1,
        artist: 'Elijah Nang',
        length: '4:30',
        title: 'Gomenasai II',
        thumbnail: 'assets/thumbnails/gomenasai2.jpg',
        url: 'assets/songs/Gomenasai_II.mp3',
      },
      {
        id: 2,
        artist: 'Drake',
        length: '4:30',
        title: 'Toosie Slide',
        thumbnail: 'assets/thumbnails/Drake-ToosieSlide.jpg',
        url: 'assets/songs/Drake-ToosieSlide.mp3',
      }
    ]);
  }
}
