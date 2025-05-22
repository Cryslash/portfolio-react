import type React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type TypingTextProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
};

export const TypingText: React.FC<TypingTextProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 80,
  pauseTime = 1500,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const isLastLetter = currentText === currentWord;
    const isEmpty = currentText === '';

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && !isLastLetter) {
      //digitando
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && !isEmpty) {
      //apagando
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && isLastLetter) {
      //esperar antes de apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && isEmpty) {
      //proxima palavra
      setIsDeleting(false);
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return <span className={styles.cursor}>{currentText}</span>;
};
