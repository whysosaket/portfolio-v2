import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoryCardProps {
  category: string;
  projectCount: number;
  href: string;
  className?: string;
}

export function CategoryCard({
  category,
  projectCount,
  href,
  className,
}: CategoryCardProps) {
  return (
    <Link href={href} className={cn("block cursor-pointer group", className)}>
      <Card className="flex flex-col overflow-hidden border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out h-full bg-gradient-to-br from-background to-muted/20 hover:from-muted/30 hover:to-muted/50">
        <CardHeader className="px-5 pt-5 pb-3">
          <CardTitle className="text-xl font-bold tracking-tight group-hover:text-foreground transition-colors">
            {category}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              {projectCount}
            </span>
            <p className="text-sm text-muted-foreground font-medium">
              {projectCount === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}