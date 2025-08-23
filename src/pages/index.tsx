import BannerSection from "@/components/BannerSection";
import CategorySection from "@/components/CategorySection";
import PageWrapper from "@/components/PageWrapper";

export default function Home(){
  return (
    <PageWrapper>
      <BannerSection />
      <CategorySection />
    </PageWrapper>
  )
}