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

export const FilterSelect = ({
    placeholder = "Select option",
    items = [],
    defaultValue = "",
    paramName = "category",
    className = "w-[180px]",
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const currentValue = searchParams.get(paramName) || '';
        setValue(currentValue);
    }, [searchParams, paramName]);

     const handleChange = (newValue) => {
        setValue(newValue);
        
        const params = new URLSearchParams(searchParams.toString());
        
        if (newValue && newValue !== "") {
            params.set(paramName, newValue);
        } else {
            params.delete(paramName);
        }
        
        params.delete('page');
        
        const newUrl = params.toString() ? `?${params.toString()}` : pathname;
        router.push(newUrl, { scroll: false });
    };

    return (
        <Select onValueChange={handleChange} value={value}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};