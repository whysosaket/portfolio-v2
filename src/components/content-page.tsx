import { ReactNode, Suspense } from "react";
import { EmptyState } from "@/components/empty-state";

interface ContentPageProps {
  sidebar: ReactNode;
  children: ReactNode;
  emptyStateType?: "blog" | "work-archive";
  showEmptyState?: boolean;
}

export function ContentPage({
  sidebar,
  children,
  emptyStateType,
  showEmptyState,
}: ContentPageProps) {
  return (
    <div className="w-full h-screen overflow-hidden flex gap-8 px-6">
      {/* Fixed Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 border-r pr-6 overflow-hidden">
        <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar">
          <Suspense fallback={<div className="text-sm text-muted-foreground">Loading...</div>}>
            {showEmptyState && emptyStateType ? (
              <EmptyState type={emptyStateType} />
            ) : (
              sidebar
            )}
          </Suspense>
        </div>
      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar relative">
        {/* Fade gradient at bottom */}
        <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        
        <div className="relative">
          {children}
        </div>
      </main>
    </div>
  );
}
