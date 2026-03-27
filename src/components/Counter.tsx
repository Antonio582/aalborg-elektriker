'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  label: string
}

export default function Counter({ end, duration = 2, suffix = '', prefix = '', label }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-emerald-500 font-[family-name:var(--font-jakarta)]">
        {prefix}{count}{suffix}
      </div>
      <div className="text-warm-500 mt-2 text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}
