"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function TextToSpeechDemo() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 text-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 mb-12 px-5 py-2 rounded-full border border-border bg-background hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Text-to-Speech Converter Demo
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A responsive desktop voice generator built using Python and Tkinter.
            The system converts written text into natural speech with selectable
            voice and speed options.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-black">
          <video
            src="/projects/text-to-speech/demo.mp4"   // 👉 Put your video here
            controls
            className="w-full h-auto"
          />
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-muted-foreground">
          <div className="p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-foreground mb-2">Voice Selection</p>
            <p>Choose between multiple voice types including male and female options.</p>
          </div>

          <div className="p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-foreground mb-2">Adjustable Speed</p>
            <p>Control speech rate for fast, normal, or slow narration output.</p>
          </div>

          <div className="p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-foreground mb-2">Audio Export</p>
            <p>Save generated speech as downloadable MP3 audio files.</p>
          </div>
        </div>

      </div>
    </div>
  );
}