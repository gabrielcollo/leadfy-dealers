import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const idLoja = searchParams.get("idLoja");

    const options = {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("AIRTABLE_TOKEN")}`,
      },
      body: req.body,
    };

    const response = await fetch(
      `https://api.airtable.com/v0/apphuWBZlKtZLi2do/${idLoja}`,
      options,
    );

    return new Response(response.statusText, {
      status: response.status,
      headers: req.headers,
    });
  },
};
