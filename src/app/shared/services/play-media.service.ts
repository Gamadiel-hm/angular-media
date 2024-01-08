import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TrackModel, trackInitial } from 'src/app/core/artist';
import { AudioEnum } from 'src/app/core/audio';

@Injectable({
  providedIn: 'root',
})
export class PlayMediaService {
  private audio: HTMLAudioElement = new Audio();
  private tracks$: BehaviorSubject<TrackModel> =
    new BehaviorSubject<TrackModel>(trackInitial);
  time$: BehaviorSubject<string> = new BehaviorSubject<string>('00:00');
  timeRemaining$: BehaviorSubject<string> = new BehaviorSubject<string>(
    '-00:00'
  );
  playStatus: BehaviorSubject<AudioEnum> = new BehaviorSubject<AudioEnum>(
    AudioEnum.pause
  );
  porcentPlay$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.audio = new Audio();
    this.listAllEvents();
  }

  addTrack(track: TrackModel): void {
    this.tracks$.next(track);
    this.playTrack(track);
  }

  getTrack(): BehaviorSubject<TrackModel> {
    return this.tracks$;
  }

  private playTrack(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
    this.playStatus.next(AudioEnum.play);
  }

  private listAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;

    this.setTimeElepsed(currentTime);
    this.setTimeRemaning(duration, currentTime);
    this.setPorcent(duration, currentTime);
  };

  private setTimeElepsed(currenTime: number) {
    const min = Math.floor(currenTime / 60);
    const seconds = Math.floor(currenTime % 60);

    const timeCurrent = `0${min}:${seconds < 10 ? '0' + seconds : seconds}`;
    this.time$.next(timeCurrent);
  }

  private setTimeRemaning(duration: number, currenTime: number) {
    const min = Math.floor(currenTime / 60);
    const seconds = Math.floor(currenTime % 60);
    const remaining = duration - (min * 60 + seconds);

    const minRemaining = `-0${Math.floor(remaining / 60)}`;
    const rest = Math.floor(remaining % 60);
    const secondsRemaining = `${rest < 10 ? '0' + rest : rest}`;

    const stringRemaining = `${minRemaining + ':' + secondsRemaining}`;
    this.timeRemaining$.next(stringRemaining);
  }

  public togglePlay() {
    const objectChange = {
      play: () => this.audio.play(),
      pause: () => this.audio.pause(),
    };

    this.playStatus.value === AudioEnum.play
      ? this.playStatus.next(AudioEnum.pause)
      : this.playStatus.next(AudioEnum.play);

    objectChange[this.playStatus.value]();
  }

  private setPorcent(duration: number, currenTime: number) {
    const porcent = (currenTime * 100) / duration;
    this.porcentPlay$.next(porcent);
  }

  public porcentSeek(porcent: number) {
    const { duration } = this.audio;
    const porcentTranck = duration * (porcent / 100);
    this.audio.currentTime = porcentTranck;
  }
}
