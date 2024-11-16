"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"

const words1 = "Unleash the power of"
const words2 = "AI Bots"
const words3 = "in your Telegram chats with BOT-Sensei"
const words4 = "No code, Only Innovation"


export function catchyLine() {
  return (
    <div className="w-full md:w-1/2 mx-auto py-12 flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <TextGenerateEffect words={words1} />
        <span className="text-2xl flex items-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full py-2 px-4 mx-2">🤖</span>
        <TextGenerateEffect words={words2} />
      </div>
      <div className="flex items-center justify-center">
        <TextGenerateEffect words={words3} />
        <span className="text-2xl flex items-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full py-2 px-4 mx-2">🧃</span>
      </div>
      <div className="flex justify-center">
        <TextGenerateEffect words={words4} />
      </div>
    </div>
  );
}