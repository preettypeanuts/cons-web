"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpAZ, ArrowDownAZ, ArrowUp01, ArrowDown01 } from "lucide-react";

export const FilterSelect = ({ className = "w-[180px]" }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    // Combine sortBy dan order menjadi satu value
    const getSortValue = () => {
        const sortBy = searchParams.get('sortBy') || 'id';
        const order = searchParams.get('order') || 'asc';
        return `${sortBy}-${order}`;
    };
    
    const [value, setValue] = useState(getSortValue());

    useEffect(() => {
        setValue(getSortValue());
    }, [searchParams]);

    const handleChange = (newValue) => {
        setValue(newValue);
        
        const [sortBy, order] = newValue.split('-');
        const params = new URLSearchParams(searchParams.toString());
        
        params.set('sortBy', sortBy);
        params.set('order', order);
        
        // Reset page saat ganti sorting
        params.delete('page');
        
        const newUrl = `${pathname}?${params.toString()}`;
        router.push(newUrl, { scroll: false });
    };

    const sortOptions = [
        { value: "id-asc", label: "Oldest First", icon: ArrowUp01 },
        { value: "id-desc", label: "Newest First", icon: ArrowDown01 },
        { value: "name-asc", label: "Name A-Z", icon: ArrowUpAZ },
        { value: "name-desc", label: "Name Z-A", icon: ArrowDownAZ },
    ];

    return (
        <Select onValueChange={handleChange} value={value}>
            <SelectTrigger className={className}>
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>

            <SelectContent>
                {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        <span className="flex items-center gap-2">
                            <option.icon className="h-4 w-4" />
                            {option.label}
                        </span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};