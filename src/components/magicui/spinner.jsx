import { cn } from "@/lib/utils";

export function Spinner({ className }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}