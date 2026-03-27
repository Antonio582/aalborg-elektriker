'use client'

import { useEffect, useState } from 'react'

interface TextScrambleProps {
  texts: string[]
  className?: string
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ0123456789'

export default function TextScramble({ texts, className = '' }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(texts[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [texts.length])

  useEffect(() => {
    const target = texts[currentIndex]
    let iteration = 0
    const maxIterations = target.length * 2

    const scrambleInterval = setInterval(() => {
      setDisplayText(
        target
          .split('')
          .map((char, index) => {
            if (index < iteration / 2) return target[index]
            if (char === ' ') return ' '
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      iteration++
      if (iteration > maxIterations) clearInterval(scrambleInterval)
    }, 40)

    return () => clearInterval(scrambleInterval)
  }, [currentIndex, texts])

  return <span className={className}>{displayText}</span>
}
