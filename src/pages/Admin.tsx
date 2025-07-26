import { useState } from "react";

type EpisodeForm = {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
};

export default function Admin() {
  const [type, setType] = useState<"movie" | "series">("movie");

  // Common fields
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Episode form state
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [episodeVideoUrl, setEpisodeVideoUrl] = useState("");
  const [episodeThumbnail, setEpisodeThumbnail] = useState("");

  const [episodes, setEpisodes] = useState<EpisodeForm[]>([]);

  // Add episode to list
  const addEpisode = () => {
    if (!episodeTitle || !episodeVideoUrl || !episodeThumbnail) return;

    const newEpisode: EpisodeForm = {
      id: Date.now().toString(),
      title: episodeTitle,
      videoUrl: episodeVideoUrl,
      thumbnail: episodeThumbnail,
    };

    setEpisodes([...episodes, newEpisode]);

    // Clear input fields
    setEpisodeTitle("");
    setEpisodeVideoUrl("");
    setEpisodeThumbnail("");
  };

  const removeEpisode = (id: string) => {
    setEpisodes(episodes.filter((ep) => ep.id !== id));
  };

  // Mock submit
  const handleSubmit = () => {
    if (!title || !genre || !description) return alert("Please fill all required fields.");

    const payload =
      type === "movie"
        ? {
            type: "movie",
            title,
            genre,
            description,
            poster,
            videoUrl,
          }
        : {
            type: "series",
            title,
            genre,
            description,
            poster,
            episodes,
          };

    console.log("Submitted:", payload);
    alert("Submitted! Check the console.");
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Upload</h1>

      <div className="mb-4">
        <label className="block mb-1">Content Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "movie" | "series")}
          className="p-2 w-full bg-gray-800 rounded"
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>

      {/* Common Fields */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-3 p-2 w-full bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="mb-3 p-2 w-full bg-gray-800 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-3 p-2 w-full bg-gray-800 rounded"
      />
      <input
        type="url"
        placeholder="Poster URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        className="mb-4 p-2 w-full bg-gray-800 rounded"
      />

      {/* Movie-specific fields */}
      {type === "movie" && (
        <input
          type="url"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="mb-4 p-2 w-full bg-gray-800 rounded"
        />
      )}

      {/* Series Episode Uploader */}
      {type === "series" && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <h2 className="text-lg font-semibold mb-2">Add Episode</h2>

          <input
            type="text"
            placeholder="Episode Title"
            value={episodeTitle}
            onChange={(e) => setEpisodeTitle(e.target.value)}
            className="mb-2 p-2 w-full bg-gray-900 rounded"
          />
          <input
            type="url"
            placeholder="Episode Video URL"
            value={episodeVideoUrl}
            onChange={(e) => setEpisodeVideoUrl(e.target.value)}
            className="mb-2 p-2 w-full bg-gray-900 rounded"
          />
          <input
            type="url"
            placeholder="Episode Thumbnail URL"
            value={episodeThumbnail}
            onChange={(e) => setEpisodeThumbnail(e.target.value)}
            className="mb-2 p-2 w-full bg-gray-900 rounded"
          />
          <button
            type="button"
            onClick={addEpisode}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
          >
            ➕ Add Episode
          </button>

          {episodes.length > 0 && (
            <ul className="mt-4 space-y-2">
              {episodes.map((ep) => (
                <li
                  key={ep.id}
                  className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded"
                >
                  <div>
                    <p className="font-semibold">{ep.title}</p>
                    <p className="text-sm text-gray-300">{ep.videoUrl}</p>
                  </div>
                  <button
                    onClick={() => removeEpisode(ep.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    ✖ Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mt-4"
      >
        📤 Submit
      </button>
    </div>
  );
}
