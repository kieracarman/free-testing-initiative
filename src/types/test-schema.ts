import { z } from "zod";

export const testSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  datetime: z.date(),
  status: z.enum(["REQUESTED", "CONFIRMED", "COMPLETED"]),
});

export type Test = z.infer<typeof testSchema>;
