export default function EyeCursorDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Eye Cursor Demo
        </h1>

        <p className="text-muted-foreground mb-12">
          Real-time iris tracking and blink detection demonstration.
        </p>

        {/* 👉 You manually add VIDEO OR IMAGES here */}

        <img
  src="/projects/eye-cursor/1.png"
  className="rounded-xl border border-border shadow-xl"
/>

      </div>
    </div>
  )
}