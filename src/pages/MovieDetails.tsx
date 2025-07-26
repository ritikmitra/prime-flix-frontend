import { useParams } from "react-router";
import { media } from "../data/media";
import VideoPlayer from "../components/VideoPlayer";

export default function MovieDetails() {
  const { id } = useParams();
  const item = media.find((m) => m.id === id);

  if (!item) return <div className="p-10">Media not found</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <p className="text-gray-400 mb-4">{item.genre}</p>

      {item.type === "movie" && (
        <VideoPlayer src={item.videoUrl} poster={item.thumbnail} />
      )}

      {item.type === "series" && (
        <div className="space-y-6">
          {item.episodes.map((ep) => (
            <div key={ep.id}>
              <h2 className="text-xl font-semibold">{ep.title}</h2>
              <VideoPlayer src={ep.videoUrl} poster={ep.thumbnail} subtitles={ep.subtitles} />
            </div>
          ))}
        </div>
      )}

      <p className="mt-4">{item.description}</p>
    </div>
  );
}
