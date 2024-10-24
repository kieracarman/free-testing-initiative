"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { DataTableRowActions } from "@/components";
import { type Test } from "@/types/test-schema";

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
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
