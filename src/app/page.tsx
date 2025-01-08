import AboutAuthor from "@/components/AboutAuthor";
import BigPhoto from "@/components/BigPhoto";
import Categories from "@/components/Categories";
import Container from "@/components/Container";
import FeaturedPost from "@/components/FeaturedPost";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import Pagination from "@/components/Pagination";
import Tags from "@/components/Tags";
import { FIRST_GALLERY, SECOND_GALLERY } from "@/utils/constants/galleries";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection/>
      <Container className="mt-[40px] flex flex-col md:flex-row justify-between gap-3">
        <div className="max-w-fit">
          <Gallery photos={FIRST_GALLERY}/>
          <BigPhoto/>
          <Gallery photos={SECOND_GALLERY}/>
          <Pagination/>
        </div>
        <div className="w-[270px] flex flex-col gap-5 mx-auto mt-5 md:mx-0 md:mt-0  ">
          <AboutAuthor/>
          <FeaturedPost/>
          <Categories/>
          <Tags/>
        </div>
      </Container>
      <InstagramSection/>
    </main>
  );
}
