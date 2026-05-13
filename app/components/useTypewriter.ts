"use client";
import { useEffect, useState } from "react";

const WORDS = ["Agustín.", "a developer.", "a problem solver.", "based in Buenos Aires."];

export default function useTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
      } else {
        setDeleting(false);
        setWordIndex((w) => (w + 1) % WORDS.length);
      }
    }

    setDisplayed(word.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return displayed;
}
