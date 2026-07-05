const Gemini_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"

export const generateGeminiResponse = async (prompt) => {

    try {
        const response = await fetch(`${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: typeof prompt === "string" ? prompt : prompt.message,
                                }
                            ]
                        }
                    ]
                })
            })
        if (!response.ok) {
            const err = await response.text();
            throw new Error(err);
        }
        console.log(await response.clone().json());

        const data = await response.json();

        const text = data.candidates?.[0]?.content?.parts?.[0].text;
        console.log(text);

        if (!text) {
            throw new Error("No Response is send by gemini");
        }

        const cleanText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim()
        
        console.log("Gemini Text");
        console.log(cleanText);

        return cleanText;
    }
    catch (error) {
        console.log("Gemini error:", error.message);
        throw new Error(error.message);

    }
}