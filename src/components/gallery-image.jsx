'use client';
import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

// Sub-component: Gallery Header
const GalleryHeader = ({
    title = "Explore Our",
    subtitle = "Gallery",
    highlight = "Activity",
    viewAllLink = "/projects/gallery",
    viewAllText = "Lihat Semua",
    showNavigation = false,
    showViewAll = true,
    onPrev,
    onNext
}) => {
    return (
        <div className="margin flex flex-row items-center justify-between gap-4">
            <div>
                <h1 className="uppercase font-light text-xs">
                    {title}
                </h1>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-light">
                    {subtitle}{" "}
                    <span className="text-orange-400">
                        {highlight}
                    </span>
                </h1>
            </div>

            {/* Mobile View All Button */}
            <div className="block md:hidden">
                <Link href={viewAllLink}>
                    <Button
                        size="xs"
                        variant="outline"
                        className="opacity-60 pl-2 py-0.5 pr-1 gap-1"
                    >
                        More
                        <ChevronRight />
                    </Button>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="md:flex gap-2 hidden">
                {showViewAll && (
                    <Link href={viewAllLink}>
                        <Button
                            variant="secondary"
                            className="text-xs sm:text-sm"
                        >
                            {viewAllText}
                        </Button>
                    </Link>

                )}
                {showNavigation && (
                    <>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="text-orange-400 h-9 w-9 sm:h-10 sm:w-10"
                            onClick={onPrev}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="text-orange-400 h-9 w-9 sm:h-10 sm:w-10"
                            onClick={onNext}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

// Sub-component: Gallery Item
const GalleryItem = ({
    item,
    index,
    isFirst,
    isLast,
    onClick,
    imageClassName = "h-[300px] w-[80lvw] sm:h-[350px] sm:w-[280px] md:h-[60lvh] md:w-[320px]",
    zoomButtonText = "Buka Gambar",
    containerGallery = "w-[80lvw] md:w-fit "
}) => {
    return (
        <div
            className={`${isFirst ? "ml-4 md:ml-10" : ""} ${isLast ? "mr-4 md:mr-10" : ""} relative group rounded-lg cursor-pointer shrink-0 ${containerGallery}`}
        >
            <Image
                width={500}
                height={500}
                src={item.image}
                alt={item.title}
                className={`${imageClassName} object-cover rounded-lg`}
            />

            {/* Desktop Info Overlay */}
            <div className="hidden md:block z-50 absolute bottom-0 left-0 right-0 rounded-lg group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-10 duration-300">
                <div className="m-4 flex flex-col gap-3">
                    <h1 className="text-xl lg:text-2xl font-bold opacity-60 line-clamp-2">
                        {item.title}
                    </h1>
                    <p className="opacity-60 text-sm line-clamp-2">
                        {item.shortDesc}
                    </p>
                </div>
            </div>

            {/* Zoom Button Overlay */}
            <div
                onClick={() => onClick(index)}
                className="absolute inset-0 bg-background/40 backdrop-blur-sm rounded-lg group-hover:opacity-100 md:group-hover:translate-y-0 opacity-0 md:-translate-y-10 duration-300 flex items-center justify-center"
            >
                <Button
                    variant="outline"
                    size="sm"
                    className="bg-neutral-300/20 dark:bg-neutral-500/30 border-neutral-800/10 hover:scale-105 duration-300"
                >
                    <span className="opacity-50 flex items-center gap-1 text-xs sm:text-sm">
                        <ZoomIn className="h-4 w-4" /> {zoomButtonText}
                    </span>
                </Button>
            </div>

            {/* Mobile Title */}
            <div className="md:hidden mt-2 px-1">
                <h3 className="text-sm font-semibold line-clamp-1">
                    {item.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                    {item.shortDesc}
                </p>
            </div>
        </div>
    );
};

// Sub-component: Image Dialog
const ImageDialog = ({
    isOpen,
    onOpenChange,
    data,
    selectedIndex,
    onNext,
    onPrev
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent
                className="bg-transparent border-0 shadow-none min-w-screen min-h-screen max-w-0!"
                showCloseButton={false}
            >
                <DialogTitle ></DialogTitle>

                {/* Close Button */}
                <Button
                    onClick={() => onOpenChange(false)}
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10"
                >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                {/* Navigation Buttons */}
                {data.length > 1 && (
                    <>
                        <Button
                            onClick={onPrev}
                            size="icon"
                            variant="secondary"
                            className="absolute left-2 top-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10"
                        >
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Button
                            onClick={onNext}
                            size="icon"
                            variant="secondary"
                            className="absolute right-2 top-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10"
                        >
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </>
                )}

                {/* Image Content */}
                <div className="overflow-hidden md:max-h-[80lvh] m-10">
                    <div className="w-full h-full relative">
                        <Image
                            width={1200}
                            height={800}
                            src={data[selectedIndex].image}
                            alt={data[selectedIndex].title}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2 bg-darkColor/50 backdrop-blur-sm rounded-md p-4 m-2">
                            <h2 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                                {data[selectedIndex].title}
                            </h2>
                            <p className="text-white/80 text-xs sm:text-sm">
                                {data[selectedIndex].shortDesc}
                            </p>
                        </div>
                    </div>

                    {/* Counter */}
                    <p className="absolute right-2 bottom-2 px-3 py-1 rounded-full text-white/60 text-xs bg-black/50">
                        {selectedIndex + 1} / {data.length}
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

// Main Component
export const GalleryImage = ({
    data,
    mode = "carousel",
    showHeader = true,
    headerTitle = "Explore Our",
    headerSubtitle = "Gallery",
    headerHighlight = "Activity",
    viewAllLink = "/projects/gallery",
    viewAllText = "Lihat Semua",
    showNavigation = false,
    showViewAll = true,
    imageClassName,
    containerClassName = "",
    zoomButtonText = "Buka Gambar",
    containerGallery = ""
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = (index) => {
        setSelectedIndex(index);
        setIsDialogOpen(true);
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <>
            <section className={`space-y-6 md:space-y-10 ${containerClassName}`}>
                {showHeader && (
                    <GalleryHeader
                        title={headerTitle}
                        subtitle={headerSubtitle}
                        highlight={headerHighlight}
                        viewAllLink={viewAllLink}
                        viewAllText={viewAllText}
                        showNavigation={showNavigation}
                        showViewAll={showViewAll}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}

                {mode === "carousel" && (
                    <div className="flex gap-3 md:gap-4 overflow-x-scroll overflow-y-hidden no-scrollbar w-full pb-2">
                        {data.map((item, idx) => (
                            <GalleryItem
                                key={idx}
                                item={item}
                                index={idx}
                                isFirst={idx === 0}
                                isLast={idx === data.length - 1}
                                onClick={openDialog}
                                imageClassName={imageClassName}
                                zoomButtonText={zoomButtonText}
                                containerGallery=""
                            />
                        ))}
                    </div>
                )}

                {mode === "grid" && (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 margin">
                        {data.map((item, idx) => (
                            <GalleryItem
                                key={idx}
                                item={item}
                                index={idx}
                                isFirst={false}
                                isLast={false}
                                onClick={openDialog}
                                imageClassName={imageClassName}
                                zoomButtonText={zoomButtonText}
                                containerGallery=""
                            />
                        ))}
                    </section>
                )}
            </section>

            <ImageDialog
                isOpen={isDialogOpen}
                onOpenChange={setIsDialogOpen}
                data={data}
                selectedIndex={selectedIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    );
};