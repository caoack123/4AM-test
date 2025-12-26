
import { GoogleGenAI, Type } from "@google/genai";

// Analyze brand expansion potential using Gemini API
export async function getExpansionStrategy(brandName: string, category: string, language: 'en' | 'cn'): Promise<any> {
  // Fix: Create GoogleGenAI instance with apiKey directly from process.env per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const langPrompt = language === 'cn' ? "Please provide the results in Chinese." : "Please provide the results in English.";

  // Fix: Use gemini-3-pro-preview for complex reasoning and strategic analysis tasks
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Analyze the expansion potential for a Chinese brand named "${brandName}" in the ${category} sector moving into the US/Global market. 
    Focus on the transition from "Traditional ODM/Factory" to "Premium POD Global Brand". 
    Incorporate 4AM's "US Internet Sense" methodology. ${langPrompt}`,
    config: {
      systemInstruction: "You are a senior strategist at 4AM, a Boston digital agency. You help Chinese brands go global by bridging the Talent & Culture gap. Provide professional, specific, and culturally-aware marketing advice. Focus on 'Identity expression' and 'Professional tribes' over generic marketing.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          marketFit: { type: Type.STRING, description: "Assessment of Western market fit and niche tribe potential" },
          suggestedPlatforms: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "List of 3 specific Western social/sales platforms"
          },
          keyChallenges: { type: Type.STRING, description: "Specific cultural hurdles" },
          winningStrategy: { type: Type.STRING, description: "The single most important strategy" }
        },
        required: ["marketFit", "suggestedPlatforms", "keyChallenges", "winningStrategy"]
      }
    }
  });

  // Fix: Access response.text property and handle potential undefined value
  const jsonStr = (response.text || "").trim();
  return JSON.parse(jsonStr || "{}");
}
