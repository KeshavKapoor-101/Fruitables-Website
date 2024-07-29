import SectionOrganicFood from "../sectionshome/SectionOrganicFood";
import SectionCardsFeatures from "../sectionshome/SectionCardsFeatures";
import SectionOrganicProductsCards from "../sectionshome/SectionOrganicProductsCards";
import SectionFruitsVegetables from "../sectionshome/SectionFruitsVegetables";
import SectionOrganicVegetables from "../sectionshome/SectionOrganicVegetables";
import SectionExotics from "../sectionshome/SectionExotics";
import SectionProducts from "../sectionshome/SectionProducts";
import SectionFeatures from "../sectionshome/SectionFeatures";
import SectionTestimonial from "../sectionshome/SectionTestimonial";


export default function PageHome(){
    return(
        <div>
      <SectionOrganicFood></SectionOrganicFood>
      <SectionCardsFeatures></SectionCardsFeatures>
      <SectionOrganicProductsCards></SectionOrganicProductsCards>
      <SectionFruitsVegetables></SectionFruitsVegetables>
      <SectionOrganicVegetables></SectionOrganicVegetables>
      <SectionExotics></SectionExotics>
      <SectionProducts></SectionProducts>
      <SectionFeatures></SectionFeatures>
      <SectionTestimonial></SectionTestimonial>
      </div>
    );
}