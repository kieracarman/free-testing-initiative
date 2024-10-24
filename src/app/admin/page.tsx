import { api, HydrateClient } from "@/trpc/server";
import { ListTests } from "@/components";

export default function Admin() {
  void api.test.getAll.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>

          <ListTests />
        </div>
      </main>
    </HydrateClient>
  );
}
