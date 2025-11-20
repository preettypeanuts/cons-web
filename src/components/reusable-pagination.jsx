"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const ReusablePagination = ({ 
    totalItems, 
    itemsPerPage = 6, 
    currentPage = 1,
    minItemsForPagination = 6,
    showInfo = true,
    scrollOnChange = false,
    pageParamName = "page",
    onPageChange,
    className = "" 
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Hitung total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Jangan render jika data <= minItemsForPagination
    if (totalItems <= minItemsForPagination) {
        return null;
    }

    // Handle page change
    const handlePageChange = (page) => {
        // Callback custom jika ada
        if (onPageChange) {
            onPageChange(page);
            return;
        }

        // Default behavior: update URL params
        const params = new URLSearchParams(searchParams.toString());
        
        if (page === 1) {
            params.delete(pageParamName);
        } else {
            params.set(pageParamName, page.toString());
        }
        
        const newUrl = params.toString() ? `?${params.toString()}` : pathname;
        router.push(newUrl, { scroll: scrollOnChange });
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const delta = 2; // Jumlah page di kiri/kanan current page
        const pages = [];
        
        // Jika total pages <= 7, tampilkan semua
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }
        
        // Logic untuk banyak pages
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 || // First page
                i === totalPages || // Last page
                (i >= currentPage - delta && i <= currentPage + delta) // Around current
            ) {
                pages.push(i);
            }
        }
        
        // Add ellipsis
        const pagesWithEllipsis = [];
        let lastPage = 0;
        
        pages.forEach((page) => {
            if (lastPage && page - lastPage > 1) {
                pagesWithEllipsis.push(`ellipsis-${lastPage}`);
            }
            pagesWithEllipsis.push(page);
            lastPage = page;
        });
        
        return pagesWithEllipsis;
    };

    const pageNumbers = getPageNumbers();

    // Calculate display range
    const startItem = ((currentPage - 1) * itemsPerPage) + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            <Pagination>
                <PaginationContent>
                    {/* Previous Button */}
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            className={
                                currentPage === 1 
                                    ? "pointer-events-none opacity-50" 
                                    : "cursor-pointer hover:bg-accent"
                            }
                            aria-disabled={currentPage === 1}
                        />
                    </PaginationItem>

                    {/* Page Numbers */}
                    {pageNumbers.map((page, index) => {
                        if (typeof page === 'string' && page.startsWith('ellipsis')) {
                            return (
                                <PaginationItem key={page}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            );
                        }
                        
                        return (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => handlePageChange(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                    aria-current={currentPage === page ? "page" : undefined}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {/* Next Button */}
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            className={
                                currentPage === totalPages 
                                    ? "pointer-events-none opacity-50" 
                                    : "cursor-pointer hover:bg-accent"
                            }
                            aria-disabled={currentPage === totalPages}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            {/* Info text */}
            {showInfo && (
                <div className="text-center text-sm text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{startItem}</span> to{" "}
                    <span className="font-medium text-foreground">{endItem}</span> of{" "}
                    <span className="font-medium text-foreground">{totalItems}</span> results
                </div>
            )}
        </div>
    );
};