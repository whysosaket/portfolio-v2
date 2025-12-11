import { FileText, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  type?: "blog" | "work-archive";
  message?: string;
  description?: string;
  className?: string;
}

export function EmptyState({
  type = "blog",
  message,
  description,
  className,
}: EmptyStateProps) {
  const Icon = type === "blog" ? FileText : Archive;
  const defaultMessage = type === "blog" 
    ? "No blog posts yet" 
    : "No work archive entries yet";
  const defaultDescription = type === "blog"
    ? "Check back soon for new posts!"
    : "Work archive entries will appear here.";

  return (
    <div className={cn("flex flex-col items-center justify-center py-16 px-4", className)}>
      <div className="rounded-full bg-muted p-6 mb-4">
        <Icon className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">
        {message || defaultMessage}
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-md">
        {description || defaultDescription}
      </p>
    </div>
  );
}
