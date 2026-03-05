"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

export function useParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY * speed)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}

export function useFadeUp(): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

export function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      el!.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      el!.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    }

    el.addEventListener("mousemove", handleMouseMove)
    return () => el.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return ref
}
