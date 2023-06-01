import formatTodoForAI from "./formatTodoForAI";

async function fetchSuggestion(board: Board) {
  const todos = formatTodoForAI(board);
  //   console.log(todos);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",

    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
}

export default fetchSuggestion;
