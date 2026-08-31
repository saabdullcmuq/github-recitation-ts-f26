// Endpoint for querying the fibonacci numbers

import { fibonacci } from "./fib";
import type { Request, Response } from "express";

interface FibRouteRequest extends Request {
  params: {
    num: string;
  };
}

export default function fibRoute(req: FibRouteRequest, res: Response): void {
  const num = req.params.num;

  const parsed = Number.parseInt(num, 10);
  const fibN = fibonacci(parsed);

  const result =
    Number.isNaN(parsed) || fibN < 0
      ? `fibonacci(${num}) is undefined`
      : `fibonacci(${num}) is ${fibN}`;

  res.send(result);
}



