'use client';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon, X } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const SearchBar = ({
    placeholder = "Search...",
    buttonText = "Search",
    showButton = true,
    showClearButton = true,
    showClearAllButton = true,
    className = "",
    disabled = false,
    defaultValue = ""
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [value, setValue] = useState(defaultValue);

    // Sync dengan URL params
    useEffect(() => {
        const currentQ = searchParams.get('q') || '';
        setValue(currentQ);
    }, [searchParams]);

    const handleSearch = (e) => {
        if (e) e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (value.trim()) {
            params.set('q', value.trim());
        } else {
            params.delete('q');
        }

        // Reset page ke 1 saat search
        params.delete('page');

        router.push(`?${params.toString()}`, { scroll: false });
    };

    const handleClearInput = () => {
        setValue("");

        // Clear hanya param 'q', preserve params lain
        const params = new URLSearchParams(searchParams.toString());
        params.delete('q');

        const newUrl = params.toString() ? `?${params.toString()}` : pathname;
        // Prevent scroll to top
        router.push(newUrl, { scroll: false });
    };

    const handleClearAllFilters = () => {
        setValue("");

        // Clear semua params - scroll to top untuk full reset
        router.push(pathname, { scroll: false });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    // Check apakah input memiliki value
    const hasInputValue = value.length > 0;

    // Check apakah ada filter aktif (any params in URL)
    const hasActiveFilters = searchParams.toString().length > 0;

    return (
        <section className={className}>
            <div className="flex items-center gap-2">
                <form onSubmit={handleSearch} className="flex-1">
                    <InputGroup>
                        <InputGroupInput
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={disabled}
                            type="search"
                        />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>

                        {showButton && (
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton
                                    type="submit"
                                    disabled={disabled}
                                >
                                    {buttonText}
                                </InputGroupButton>
                            </InputGroupAddon>
                        )}
                    </InputGroup>
                </form>

                {/* Clear All Filters button - muncul saat ada params */}
                {showClearAllButton && hasActiveFilters && (
                    <Button
                        variant="outline"
                        size="default"
                        onClick={handleClearAllFilters}
                        disabled={disabled}
                        title="Clear all filters"
                        type="button"
                        className="flex items-center gap-2 whitespace-nowrap"
                    >
                        <X className="h-4 w-4" />
                        Clear All
                    </Button>
                )}
            </div>
        </section>
    )
}