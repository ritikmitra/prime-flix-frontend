export type MoviesType = {
    id: string;
    title: string;
    genre: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    subtitles: {
        src: string;
        label: string;
        srclang: string;
        default: boolean;
    }[];
}