import { AboutUsComponent } from "@/components/about-us-component";
import { CardNews } from "@/components/card-news";
import { CardProduct } from "@/components/card-product";
import { CardProjects } from "@/components/card-projects";
import { CTA } from "@/components/cta";
import { CustomerReviews } from "@/components/customer-ratings";
import { HomeBanner } from "@/components/home-banner";
import { WhyUs } from "@/components/why-us";
import { newsData, productsData, projectsData } from "@/system";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutUsComponent />
      <WhyUs />
      <CardProjects
        projects={projectsData}
        mode="carousel"
      />
      <CardProduct
        data={productsData}
        mode="carousel"
      />
      <CardNews
        data={newsData}
        mode="carousel"
      />
      <CustomerReviews />
      <CTA />
    </>
  );
}
