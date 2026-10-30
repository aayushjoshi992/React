
const SYSTEM_PROMPT = `
You are Claude Chef, a helpful recipe assistant.
Suggest a delicious recipe using some or all of the provided ingredients.
Include a title, ingredient quantities, cooking instructions,
preparation time, cooking time, and useful tips.
Format the recipe in Markdown.
`;

export async function getRecipeFromMistral(ingredientsArr) {
  if (!ingredientsArr?.length) {
    throw new Error("Please add at least one ingredient.");
  }

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("Missing Groq API key. Check your .env file.");
  }

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Make a recipe using these ingredients: ${ingredientsArr.join(", ")}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Groq recipe request failed.");
  }

  return data.choices[0].message.content;
}
