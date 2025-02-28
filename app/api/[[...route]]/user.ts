// user.ts
import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

// all schemas
const userSchema = z.object({
  firstName: z.string().nonempty().max(75),
  lastName: z.string().nonempty().max(75),
  username: z.string().nonempty(),
  password: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  address: z.string().nonempty(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  zip: z.string().nonempty(),
  country: z.string().nonempty(),
});

const user = new Hono();

user.get("/", (c) => c.json("list users"));
user.post("/", zValidator("query", userSchema), (c) =>
  c.json("create an user", 201)
);
user.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default user;
