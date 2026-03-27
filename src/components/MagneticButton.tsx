'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function MagneticButton({ children, className = '', onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement | null>}
        href={href}
        style={{ x, y }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        onClick={onClick}
        className={`inline-block cursor-pointer ${className}`}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`inline-block cursor-pointer ${className}`}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
