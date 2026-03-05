"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function AutomationScrapingDemo() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 text-foreground py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 mb-16 px-6 py-2 rounded-full border border-border bg-background hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Selenium Automation & Data Scraping Demo
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Automated Google local search scraping system built using Selenium,
            BeautifulSoup, and Python. Extracts business data and exports
            structured results into CSV/Excel format.
          </p>
        </div>

        {/* Demo Video */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Automation Live Demo
          </h2>

          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-black">
            <video
              src="/projects/data-scraping/demo.mp4"
              controls
              className="w-full"
            />
          </div>
        </div>

        
        {/* Excel Output Screenshots */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">
            Extracted Data Output (CSV / Excel)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "/projects/data-scraping/data1.png",
              "/projects/data-scraping/data2.png",
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={img}
                  alt={`Excel Output Screenshot ${index + 1}`}
                  className="w-full hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}