import { TrackModel } from 'src/app/core/artist';

export const orderFunctions = {
  name: (data: TrackModel[]): TrackModel[] =>
    data.sort((a, b) => a.name.localeCompare(b.name)),
  album: (data: TrackModel[]): TrackModel[] =>
    data.sort((a, b) => a.album.localeCompare(b.album)),
  artist: (data: TrackModel[]): TrackModel[] =>
    data.sort((a, b) => a.artist.name.localeCompare(b.artist.name)),
};
