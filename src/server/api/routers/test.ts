import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const testRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(2).max(50),
        phone: z.string().min(7).max(11),
        address: z.string(),
        datetime: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.test.create({
        data: {
          name: input.name,
          phone: input.phone,
          address: input.address,
          datetime: input.datetime,
        },
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const test = await ctx.db.test.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return test ?? null;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const tests = await ctx.db.test.findMany({
      orderBy: { createdAt: "desc" },
    });

    return tests ?? null;
  }),
});
