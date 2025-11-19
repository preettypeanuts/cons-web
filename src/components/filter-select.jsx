"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const FilterSelect = ({
    placeholder = "Select option",
    items = [],
    value,
    onChange,
    className = "w-[180px]",
}) => {
    return (
        <Select onValueChange={onChange} value={value}>
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
