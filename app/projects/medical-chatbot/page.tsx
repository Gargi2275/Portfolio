"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function MedicalChatbotDemo() {
  const router = useRouter();

  const screenshots = [
    "/projects/medical-chatbot/medical1.png",
    "/projects/medical-chatbot/medical2.png",
    "/projects/medical-chatbot/medical3.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 text-foreground py-20 px-6">
      <div className="max-w-6xl mx-auto">

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Medical AI Chatbot
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Retrieval-Augmented Generation (RAG) based medical assistant built with
            LangChain, FAISS, and Llama 2. The system provides structured,
            context-aware medical responses using a verified knowledge base.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-border bg-background shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Medical Chatbot Screenshot ${index + 1}`}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
              <p className="font-medium text-foreground mb-2">Accurate Retrieval</p>
              <p>Uses FAISS vector database for precise medical context retrieval.</p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
              <p className="font-medium text-foreground mb-2">Structured Responses</p>
              <p>Provides professional, organized medical answers with clarity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
              <p className="font-medium text-foreground mb-2">Optimized LLM</p>
              <p>Powered by Llama 2 with controlled token usage for stable performance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}