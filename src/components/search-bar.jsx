'use client';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react";

export const SearchBar = ({
    placeholder = "Search...",
    onSearch,
    onChange,
    value,
    buttonText = "Search",
    showButton = true,
    className = "",
    disabled = false
}) => {
    const handleSearch = () => {
        if (onSearch) {
            onSearch(value);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className={className}>
            <InputGroup>
                <InputGroupInput
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={disabled}
                />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
                {showButton && (
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            onClick={handleSearch}
                            disabled={disabled}
                        >
                            {buttonText}
                        </InputGroupButton>
                    </InputGroupAddon>
                )}
            </InputGroup>
        </section>
    )
}