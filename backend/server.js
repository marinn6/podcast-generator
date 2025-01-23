// const app = require("./app") //this line is importing express and cors.
require("dotenv").config();
const Google_api = process.env.google_api
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(Google_api);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const test = async () => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

test()


// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));