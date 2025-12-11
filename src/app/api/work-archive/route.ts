import { NextResponse } from "next/server";
import { getAllWorkArchiveEntries, sortEntriesChronologically } from "@/lib/work_archive";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const companyParam = searchParams.get("company");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.max(1, parseInt(limitParam)) : undefined;

    let entries = await getAllWorkArchiveEntries();
    
    if (companyParam) {
      const { getEntriesByCompany } = await import("@/lib/work_archive");
      entries = getEntriesByCompany(entries, companyParam);
    }

    const sorted = sortEntriesChronologically(entries);
    const sliced = typeof limit === "number" ? sorted.slice(0, limit) : sorted;
    
    const minimal = sliced.map((entry) => ({
      slug: entry.slug,
      title: entry.metadata.title,
      company: entry.metadata.company,
      date: entry.metadata.date,
      favorite: entry.metadata.favorite || false,
      groupLabel: entry.metadata.groupLabel,
      summary: entry.metadata.summary,
      image: entry.metadata.image || null,
    }));

    return NextResponse.json({ entries: minimal });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load work archive entries" }, { status: 500 });
  }
}
