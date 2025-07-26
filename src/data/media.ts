export type Subtitle = {
  src: string;
  label: string;
  srclang: string;
  default?: boolean;
};

export type Episode = {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  subtitles: Subtitle[];
};

export type Movie = {
  id: string;
  type: "movie";
  title: string;
  genre: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  subtitles: Subtitle[];
};

export type Series = {
  id: string;
  type: "series";
  title: string;
  genre: string;
  description: string;
  thumbnail: string;
  episodes: Episode[];
};

export type Media = Movie | Series;

export const media: Media[] = [
  {
    id: "1",
    type: "movie",
    title: "Rick and Morty",
    genre: "Action, Adventure",
    description: "An adventure through the jungle with unexpected twists.",
    thumbnail: "https://placehold.co/300x400?text=Rick+and+Morty",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    subtitles: [
      {
        src: "/video/movie1/output_vtt.m3u8",
        label: "English",
        srclang: "en",
        default: true,
      },
    ],
  },
  {
    id: "2",
    type: "series",
    title: "Ocean Secrets",
    genre: "Drama",
    description: "A deep dive into the mystery of the sea.",
    thumbnail: "https://placehold.co/300x400?text=Ocean+Secrets",
    episodes: [
      {
        id: "ep1",
        title: "Episode 1",
        videoUrl: "/video/episode_1/output.m3u8",
        thumbnail: "https://placehold.co/300x200?text=Episode+1",
        subtitles: [
          {
            src: "/video/episode_1/output_vtt.m3u8",
            label: "English",
            srclang: "en",
            default: true,
          },
        ],
      },
    ],
  },
];
