"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const DivisionChips = ({ divisions = [], className }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const currentDivision = searchParams.get('division') || 'all';

    const handleClick = (division) => {
        const params = new URLSearchParams(searchParams.toString());
        
        if (division === 'all') {
            params.delete('division');
        } else {
            params.set('division', division);
        }
        
        // Reset page saat ganti division
        params.delete('page');
        
        const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
        router.push(newUrl, { scroll: false });
    };

    return (
        <div className={cn("flex flex-wrap gap-2", className)}>
            {/* All Chip */}
            <button
                onClick={() => handleClick('all')}
                className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    "border hover:shadow-sm",
                    currentDivision === 'all'
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:bg-muted border-border text-muted-foreground hover:text-foreground"
                )}
            >
                All
            </button>
            
            {/* Division Chips */}
            {divisions.map((division) => (
                <button
                    key={division}
                    onClick={() => handleClick(division)}
                    className={cn(
                        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                        "border hover:shadow-sm",
                        currentDivision === division
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background hover:bg-muted border-border text-muted-foreground hover:text-foreground"
                    )}
                >
                    {division}
                </button>
            ))}
        </div>
    );
};