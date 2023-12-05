export enum SizeSection {
  small = 'small',
  big = 'big',
}

export interface TrackModel {
  _id: number;
  name: string;
  album: string;
  cover: string;
  artist: ArtistClass;
  duration: Duration;
  url: string;
}

export interface ArtistClass {
  name: string;
  nickname: string;
  nationality: string;
}

export interface Duration {
  start: number;
  end: number;
}

export const trackInitial: TrackModel = {
  _id: 0,
  name: '',
  album: '',
  cover: '',
  artist: {
    name: '',
    nickname: '',
    nationality: '',
  },
  duration: {
    start: 0,
    end: 99,
  },
  url: '',
};
