import "dotenv/config";
import axios from "axios";
export const  getAiGeneratedMessage = async (message) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: 'qwen/qwen3-14b:free',
        // model : "qwen/qwen3-coder:free",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-type": "application/json",
        },
      }
    );
    // return response.data.response.choices[0].message.content;
    return response.data.choices[0].message.content
  } catch (error) {
    console.error("Error in getAiGeneratedMessage: ", error.response?.data || error.message);
    console.log(error);
  }
};
getAiGeneratedMessage("Hii")
// console.log("API key ", process.env.OPENROUTER_API_KEY)