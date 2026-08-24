"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./FinalExperience.module.css";

type Props = {
  body: string;
  videoSrc: string;
  posterSrc?: string;
  prototypeUrl?: string;
  videoAriaLabel?: string;
  linkLabel?: string;
  note?: string;
  presentation?: "device" | "plain";
};

const DEFAULT_POSTER = "/work/auric-signal/auric-primary-home-fullpage.png";

export function FinalExperience({
  body,
  videoSrc,
  posterSrc,
  prototypeUrl,
  videoAriaLabel = "AURIC SIGNAL final prototype walkthrough",
  linkLabel = "Explore the Interactive Prototype ↗",
  note,
  presentation = "device",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const poster = posterSrc ?? DEFAULT_POSTER;
  const supportingNote = note ?? (prototypeUrl ? "Functional prototype built in Lovable." : undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) videoRef.current?.pause();
    };
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) await video.play();
    else video.pause();
  };

  const replay = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    await video.play();
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.intro}>{body}</p>
      {presentation === "plain" ? (
        <div className={styles.plainStage}>
          <video
            ref={videoRef}
            className={styles.plainVideo}
            src={videoSrc}
            poster={posterSrc}
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label={videoAriaLabel}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </div>
      ) : (
        <div className={styles.stage}>
          <div className={styles.device}>
            <div className={styles.screen}>
              <Image src={poster} alt="" fill className={styles.poster} sizes="(max-width: 480px) 62vw, 232px" priority={false} />
              <video
                ref={videoRef}
                className={styles.video}
                src={videoSrc}
                poster={poster}
                autoPlay={!reducedMotion}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={videoAriaLabel}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
              <div className={styles.videoControls}>
                <button type="button" onClick={togglePlayback} aria-label={playing ? "Pause prototype video" : "Play prototype video"}>
                  <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
                </button>
                <button type="button" onClick={replay} aria-label="Replay prototype video">
                  <span aria-hidden="true">↺</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {prototypeUrl || supportingNote ? (
        <div className={styles.cta}>
          {prototypeUrl ? <a href={prototypeUrl} target="_blank" rel="noopener noreferrer">{linkLabel}</a> : null}
          {supportingNote ? <p>{supportingNote}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
