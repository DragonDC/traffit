import { ResponseComposition, RestContext } from "msw";

export const mswConfiguration = (
  res: ResponseComposition,
  ctx: RestContext,
  body: any,
  statusCode: number = 200
) => {
  return res(
    ctx.delay(0),
    ctx.status(statusCode),
    ctx.set("Content-Type", "application/json"),
    ctx.json(body)
  );
};
