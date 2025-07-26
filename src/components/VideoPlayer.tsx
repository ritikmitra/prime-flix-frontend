import { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  onReady?: (player: Player) => void;
  subtitles?: {
    src: string;
    label: string;
    srclang: string;
    default?: boolean;
  }[];
}

export default function VideoPlayer({
  src,
  poster,
  onReady,
  subtitles = [],
}: VideoPlayerProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!videoContainerRef.current) return;

    // Only initialize once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      // videoElement.className = "video-js vjs-theme-city vjs-big-play-centered";
      videoElement.className =
        "video-js vjs-big-play-centered rounded-lg overflow-hidden";
      videoContainerRef.current.appendChild(videoElement);

      const options = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        preload: "auto",
        playsinline: true,
        poster,
        playbackRates: [0.5, 1, 1.5, 2],
        enableSmoothSeeking: true,
        controlBar: {
          skipButtons: {
            forward: 10,
            backward: 10,
          },
        },
        sources: [{ src, type: "application/x-mpegURL" }],

        tracks: subtitles,
      };

      const player = (playerRef.current = videojs(videoElement, options, () => {
        // videojs.log("Player is ready");
        // 🔊 Load volume from localStorage or set default (0.5)
        const savedVolume = localStorage.getItem("video-player-volume");
        if (savedVolume !== null) {
          player.volume(parseFloat(savedVolume));
        } else {
          player.volume(0.5);
        }

        // 💾 Save volume to localStorage on change
        player.on("volumechange", () => {
          console.log(player.volume());
          localStorage.setItem(
            "video-player-volume",
            player.volume()!.toString()
          );
        });
        player.on("pause", () => {
          console.log(player.currentTime());
        });
        if (onReady) {
          onReady(player);
        }
        console.log(player.currentTime());
      }));
    } else {
      // Update the player source
      const player = playerRef.current;
      player.src({ src, type: "application/x-mpegURL" });
      if (poster) player.poster(poster);
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster, onReady, subtitles]);

  return (
    <div data-vjs-player>
      <div ref={videoContainerRef} />
    </div>
  );
}
