import { NewsDetailComponent } from "@/components/news-detail-component";
import { newsData } from "@/system";

export default function NewsDetailPage() {
    return (
        <>
            <NewsDetailComponent data={newsData[0]} />
        </>
    )
}