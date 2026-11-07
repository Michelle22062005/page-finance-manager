"use client";

import { useRef, useState } from "react";

export function useVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("No se pudo reproducir el video:", error);
    }
  };
  const handleEnded = () => {
        setIsPlaying(false);
    };
    return {videoRef, isPlaying, setIsPlaying, handlePlay, handleEnded}
}