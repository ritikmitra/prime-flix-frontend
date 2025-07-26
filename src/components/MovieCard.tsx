import { Link } from "react-router";
import { type MovieType } from "../data/media"

export default function MovieCard({ movie } : { movie : MovieType}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
      <img src={movie.thumbnail} alt={movie.title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.genre}</p>
        <Link to={`/movie/${movie.id}`} className="text-blue-400 mt-2 inline-block">View Details</Link>
      </div>
    </div>
  );
}
