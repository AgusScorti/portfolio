"use client";
import { useEffect, useState, useRef } from "react";

export default function useTypewriter(words: readonly string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const prevWords = useRef(words);

  // Reset when language changes
  useEffect(() => {
    if (prevWords.current !== words) {
      prevWords.current = words;
      setWordIndex(0);
      setCharIndex(0);
      setDeleting(false);
      setDisplayed("");
    }
  }, [words]);

  useEffect(() => {
    const word = words[wordIndex] ?? "";
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
        setWordIndex((w) => (w + 1) % words.length);
      }
    }

    setDisplayed(word.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return displayed;
}
