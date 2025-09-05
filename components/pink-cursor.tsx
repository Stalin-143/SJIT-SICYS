'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function PinkCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [tabindex]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="absolute w-6 h-6 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #fce7f3 0%, #f8bbd9 50%, #f472b6 100%)',
          boxShadow: '0 0 20px rgba(248, 187, 217, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)',
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Outer glow ring */}
      <motion.div
        className="absolute rounded-full border-2 pointer-events-none"
        style={{
          borderColor: 'rgba(248, 187, 217, 0.6)',
          background: 'radial-gradient(circle, rgba(248, 187, 217, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: "spring",       
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      />

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="absolute rounded-full border pointer-events-none"
          style={{
            borderColor: 'rgba(244, 114, 182, 0.8)',
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
          }}
          initial={{ width: 30, height: 30, opacity: 0.8 }}
          animate={{ width: 60, height: 60, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </div>
  )
}
