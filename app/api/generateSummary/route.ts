import openai from "@/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { todos } = await request.json();

  //   Communicating with openAI API
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding , welcome the user always as Mr.J and say welcome to the LXIX Todo App! Limit the response to 200 characters.",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, in progress and done , 
        then tell the user to have a productive day! Here's the data : ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;
  console.log("Data is: ", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
