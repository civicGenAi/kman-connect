import { cn } from "@/lib/utils";
import { KmanBadge } from "./KmanBadge";

export interface Column<T> {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function DataTable<T extends Record<string, any>>({ columns, data, className }: DataTableProps<T>) {
  return (
    <div className={cn("overflow-x-auto rounded-xl border bg-card", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 whitespace-nowrap">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Helper status badge
export const StatusBadge = ({ status }: { status: string }) => {
  const variant = status === "Active" || status === "Committed" || status === "Approved" ? "green"
    : status === "Closed" || status === "Rejected" ? "red"
    : status === "Under Review" || status === "Pending KYC" || status === "In Conversation" ? "gold"
    : "slate";
  return <KmanBadge variant={variant}>{status}</KmanBadge>;
};
