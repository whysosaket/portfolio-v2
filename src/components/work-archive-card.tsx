import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface WorkArchiveCardProps {
  company: string;
  logoUrl: string;
  href: string;
  className?: string;
}

export function WorkArchiveCard({
  company,
  logoUrl,
  href,
  className,
}: WorkArchiveCardProps) {
  return (
    <Link href={href} className={cn("block cursor-pointer group", className)}>
      <Card className="flex flex-col overflow-hidden border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out h-full bg-gradient-to-br from-background to-muted/20 hover:from-muted/30 hover:to-muted/50">
        <CardHeader className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border">
              <Image
                src={logoUrl}
                alt={company}
                fill
                className="object-cover"
              />
            </div>
            <CardTitle className="text-xl font-bold tracking-tight group-hover:text-foreground transition-colors">
              {company}
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
