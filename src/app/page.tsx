import BigPhoto from "@/components/BigPhoto";
import Container from "@/components/Container";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Pagination from "@/components/Pagination";
import { FIRST_GALLERY, SECOND_GALLERY } from "@/utils/constants/galleries";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection/>
      <Container className="mt-[40px]">
        <div className="max-w-fit">
          <Gallery photos={FIRST_GALLERY}/>
          <BigPhoto/>
          <Gallery photos={SECOND_GALLERY}/>
          <Pagination/>
        </div>
      </Container>
    </main>
  );
}
