import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MusicService} from '../services/music.service';
import {Music} from '../models/music';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'music-player.page.html',
  styleUrls: ['music-player.page.scss']
})
export class MusicPlayerPage implements OnInit, AfterViewInit {
  @ViewChild('audioPlayer') playerElementRef: ElementRef;
  @ViewChild('trackRange') trackRange: any;

  private _player: HTMLAudioElement;

  public musics: Music[];
  public index: number = 0;
  public isPlaying: boolean = false;
  public isLoading: boolean = false;
  public currentTime: number = 0;
  public duration: number = 0;


  constructor(
      private _musicService: MusicService,
  ) {
  }

  ngOnInit(): void {
    this.refreshMusics();
  }

  ngAfterViewInit() {
    this._player = this.playerElementRef.nativeElement;
    this._bindPlayerEvents();
  }

  transformToReadableTime(amount: number): string {
    const minutes: number = Math.floor(amount / 60);
    const seconds = amount - minutes * 60;
    const secondFormatted = seconds < 10 ? `0${seconds}` : seconds;
    return minutes + ':' + secondFormatted;

  }

  refreshMusics() {
    this._musicService.getMusics().subscribe(
        (musics: Music[]) => {
          this.musics = musics;
        });
  }

  play() {
    this._player.play();
    this.isPlaying = true;
  }

  pause() {
    this._player.pause();
    this.isPlaying = false;
  }

  durationChanged() {
    this._player.currentTime = this.trackRange.el.value;
  }

  nextOrPrevious(type: 'previous' | 'next') {
    if (this.isPlaying) {
      this.pause();
    }
    if (type === 'previous') {
      this.index = this.index - 1;
    } else if (type === 'next') {
      this.index = this.index + 1;
    }
    setTimeout(() => {
      this.play();
    }, 250);
  }

  private _bindPlayerEvents(): void {
    this._player.addEventListener('playing', () => {
      this.isPlaying = true;
    });

    this._player.addEventListener('pause', () => {
      this.isPlaying = false;
    });

    this._player.addEventListener('timeupdate', () => {
      this.currentTime = Math.floor(this._player.currentTime);
    });

    this._player.addEventListener('seeking', () => {
      this.isLoading = true;
    });

    this._player.addEventListener('seeked', () => {
      this.isLoading = false;
    });

    this._player.addEventListener('loadstart', () => {
      this.isLoading = true;
    });

    this._player.addEventListener('loadeddata', () => {
      this.isLoading = false;
      this.duration = Math.floor(this._player.duration);
    });
  }
}


