// import { http, HttpResponse } from "msw";

// export const handlers = [
//   http.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" },
//       ])
//     );
//   }),
// ];

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json([
      {
        id: 1,
        name: "aman",
      },
    ]);
  }),
  http.post("/api/messages", async ({ request }) => {
    const authToken = request.headers.get("Authorization");
    if (!authToken)
      return HttpResponse.json({msg: "Unauthorized"}, {status: 401})
    const requestBody = await request.json();
    console.log(requestBody);
    return HttpResponse.json(
      {
        content: requestBody.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 }
    );
  }),
];
