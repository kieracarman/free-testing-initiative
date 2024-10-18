"use client";

import { type ColumnDef } from "@tanstack/react-table";

export type Test = {
  id: number;
  name: string;
  phone: string;
  address: string;
  datetime: string;
  status: "REQUESTED" | "CONFIRMED" | "COMPLETED";
};

export const columns: ColumnDef<Test>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "datetime",
    header: "Date",
    cell: ({ row }) => {
      const formatted = row.getValue("datetime").toLocaleDateString();

      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
