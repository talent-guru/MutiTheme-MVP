"use client"

import { useEffect } from "react"
import { ACTIVE_THEME } from "../theme.config"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", ACTIVE_THEME)
    
    document.body.className = document.body.className.replace(/theme-\w+/g, '')
    document.body.classList.add(`theme-${ACTIVE_THEME}`)
  }, [])

  return <>{children}</>
} 