"use client";

import { api } from "@/trpc/react";

import { type Test, columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";

export default function ListTests() {
  const [tests] = api.test.getAll.useSuspenseQuery();

  return (
    <div className="w-full max-w-4xl">
      <DataTable columns={columns} data={tests} />
    </div>
  );
}
