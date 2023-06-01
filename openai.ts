import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-RguofLXOT0uTQQJXfBUCCZEZ",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;
