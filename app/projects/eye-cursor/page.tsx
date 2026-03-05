"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EyeCursorDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Eye Cursor Control
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          This demo showcases a real-time eye tracking system that allows users
          to control the computer cursor using iris movement and blink
          detection. The system uses computer vision techniques to provide
          hands-free interaction with the screen.
        </p>

        {/* Demo Card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold mb-4">
            Project Demo
          </h2>

       <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-black aspect-video">
  <iframe
    src="https://drive.google.com/file/d/1jc_k5td8yiyYNDiLu0LuuCAhkDrA75aC/preview"
    className="w-full h-full"
    allow="autoplay"
  />
</div>

          <p className="text-sm text-muted-foreground mt-4">
            Demonstration of iris tracking and blink detection controlling the
            mouse cursor in real time.
          </p>

        </div>

      </div>

    </div>
  )
}
