async function handler() {
  const html = await Deno.readTextFile("./index.html");
  const response = new Response(html, {
    headers: {
      "Content-Type": "text/html;charset=utf-8",
    },
  });
  return response;
}

Deno.serve(handler);
