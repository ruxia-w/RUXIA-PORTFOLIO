"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MediaAsset } from "@/lib/types";
import styles from "./PhoneMediaViewer.module.css";

type FixedChrome = { top: number; bottom: number };

const PHONE_CHROME = [
  { match: "portfolio-health", top: 300, bottom: 0 },
  { match: "ai-explanation", top: 340, bottom: 0 },
  { match: "scenario-simulation", top: 290, bottom: 390 },
  { match: "rebalancing", top: 330, bottom: 420 },
];

function sourceChrome(src: string): FixedChrome {
  const match = PHONE_CHROME.find((item) => src.includes(item.match));
  return match ? { top: match.top, bottom: match.bottom } : { top: 0, bottom: 0 };
}

export function PhoneMediaViewer({ media }: { media: MediaAsset }) {
  const figureRef = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const scrollWindowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const directionRef = useRef(1);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fixedChrome, setFixedChrome] = useState<FixedChrome>({ top: 0, bottom: 0 });
  const crop = useMemo(() => sourceChrome(media.src), [media.src]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.3),
      { threshold: [0, 0.3, 0.65] },
    );
    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;

    const update = () => {
      const scale = screen.clientWidth / media.width;
      const next = {
        top: Math.round(crop.top * scale),
        bottom: Math.round(crop.bottom * scale),
      };
      setFixedChrome(next);
      offsetRef.current = next.top;
      directionRef.current = 1;
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(screen);
    return () => observer.disconnect();
  }, [crop, media.width]);

  useEffect(() => {
    const scrollWindow = scrollWindowRef.current;
    const track = trackRef.current;
    if (!scrollWindow || !track) return;

    const minimum = fixedChrome.top;
    offsetRef.current = Math.max(offsetRef.current, minimum);
    track.style.transform = `translate3d(0, -${offsetRef.current}px, 0)`;

    if (!inView || paused || reducedMotion) return;

    let frame = 0;
    let previous = performance.now();
    let holdUntil = previous + 1000;

    const animate = (now: number) => {
      const maximum = Math.max(
        minimum,
        track.scrollHeight - fixedChrome.bottom - scrollWindow.clientHeight,
      );
      const elapsed = Math.min(50, now - previous);
      previous = now;

      if (now >= holdUntil && maximum > minimum) {
        offsetRef.current += elapsed * 0.095 * directionRef.current;

        if (offsetRef.current >= maximum) {
          offsetRef.current = maximum;
          directionRef.current = -1;
          holdUntil = now + 850;
        } else if (offsetRef.current <= minimum) {
          offsetRef.current = minimum;
          directionRef.current = 1;
          holdUntil = now + 800;
        }

        track.style.transform = `translate3d(0, -${offsetRef.current}px, 0)`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [fixedChrome, inView, paused, reducedMotion]);

  return (
    <figure ref={figureRef} className={styles.figure}>
      <div className={styles.device} aria-label={`Phone mockup showing ${media.alt}`}>
        <div ref={screenRef} className={styles.screen} role="img" aria-label={media.alt}>
          <div
            ref={scrollWindowRef}
            className={styles.scrollWindow}
            style={{ top: fixedChrome.top, bottom: fixedChrome.bottom }}
          >
            <div ref={trackRef} className={styles.track}>
              <Image src={media.src} width={media.width} height={media.height} alt="" className={styles.image} sizes="(max-width: 480px) 76vw, 282px" />
            </div>
          </div>

          {fixedChrome.top > 0 ? (
            <div className={styles.fixedHeader} style={{ height: fixedChrome.top }} aria-hidden="true">
              <Image src={media.src} width={media.width} height={media.height} alt="" className={styles.fixedHeaderImage} sizes="(max-width: 480px) 76vw, 282px" />
            </div>
          ) : null}

          {fixedChrome.bottom > 0 ? (
            <div className={styles.fixedFooter} style={{ height: fixedChrome.bottom }} aria-hidden="true">
              <Image src={media.src} width={media.width} height={media.height} alt="" className={styles.fixedFooterImage} sizes="(max-width: 480px) 76vw, 282px" />
            </div>
          ) : null}
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={() => setPaused((value) => !value)} disabled={reducedMotion} aria-label={paused ? "Resume automatic screen scroll" : "Pause automatic screen scroll"}>
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span><span>{paused ? "Resume" : "Pause"}</span>
        </button>
        <a href={media.src} target="_blank" rel="noopener noreferrer">Open image <span aria-hidden="true">↗</span></a>
      </div>
      {reducedMotion ? <p className={styles.note}>Automatic motion is disabled by your system preference.</p> : null}
    </figure>
  );
}
