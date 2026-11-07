"use client";
import { Play } from "lucide-react";
import { useVideo } from "../hoocks/useVideo";
import { COLORS } from "../styles/theme";

export function CardVideo() {
  const {videoRef, handleEnded, isPlaying, handlePlay}= useVideo();
  return (
   <div className="flex w-full max-w-[320px] flex-col gap-4 rounded-lg  bg-transparent p-4 shadow-md transition-shadow hover:shadow-lg dark:border-white/[.145] border border-gray-500 hover:bg-gray-100 dark:hover:bg-black/60">

  <div className="h-[440px] w-full overflow-hidden rounded-lg bg-black/[.06] dark:bg-white/[.08]">
    <video
      ref={videoRef}
      className="h-full w-full object-contain"
      playsInline
      onEnded={handleEnded}
    >
      <source src="/videos/muestra.mp4" type="video/mp4" />
      Tu navegador no soporta videos.
    </video>
  </div>
  {!isPlaying && (
        <button
          onClick={handlePlay}
          className="flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-purple-500 hover:shadow-lg active:scale-95"
style={{ backgroundColor: COLORS.tertiary }}
        >
          <Play size={20} />
          Ver demo interactiva
        </button>
      )}

</div>
  );
}
