export interface Track {
  title: string;
  artist: string;
  url: string;
  coverImage: Image;
}
export interface Image {
  height: number;
  width: number;
  url: string;
}

export const tracks: Track[] = [
  {
    title: "You Came (Lazarus)",
    artist: "Jonathan David Helser, Melissa Helser",
    url: "https://open.spotify.com/track/1Mdf4sVOIs62VRguvJneDO",
    coverImage: {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e02b6199acbeb5a6cbab2c35fff",
      width: 300,
    },
  },
  {
    title:
      "Scandal Of Grace (I'd Be Lost) [By An Empty Tomb Not Far From Golgotha] - Live",
    artist: "Hillsong UNITED, Matt Crocker",
    url: "https://open.spotify.com/track/30AyKiC8JXBda6AX50GvJ2",
    coverImage: {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e02d556ee72e07fa0c7ebd6f98c",
      width: 300,
    },
  },
  {
    title: "Days Of Elijah - You Are My King, Vol. 1 Album Version",
    artist: "Maranatha! Music",
    url: "https://open.spotify.com/track/7zh8SbEpuHZqjNgYhz0H5V",
    coverImage: {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e02268259b17ccb5887c18e8dc8",
      width: 300,
    },
  },
  {
    title: "Is He Worthy? - Live",
    artist: "UPPERROOM, Aaron Tedeschi, Ashley Bailey",
    url: "https://open.spotify.com/track/1p3N9Wf85OrFJecU19P1ZS",
    coverImage: {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e0255d9dd30075d1e1ea1375f01",
      width: 300,
    },
  },
  {
    title: "Midnight Train To Memphis",
    artist: "Chris Stapleton",
    url: "https://open.spotify.com/track/6tInq1Sn2eehdsQGA9Aafh",
    coverImage: {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e0203c4f794113255be4038e45d",
      width: 300,
    },
  },
];
