import { Context } from "../context";
import { MiddlewareFn } from "type-graphql";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";

export const isAuthenticated: MiddlewareFn<Context> = ({ context }, next) => {
  const authToken = context.authToken;
  if (authToken === "") {
    throw new Error("Not authenticated");
  }
  try {
    const decoded: any = jwt.verify(authToken ?? "", JWT_SECRET);
    context.userId = decoded.id;
  } catch (error) {
    throw new Error("Not Authenticated");
  }
  return next();
};
