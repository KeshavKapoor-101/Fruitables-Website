import SectionBackground from "../SectionBackground";
import SectionShopDetailMid from "../sectionshopDetail/SectionShopDetailMid";
import SectionOrganicVegetables from "../sectionshome/SectionOrganicVegetables";

export default function PageShopDetail()
{
    return(
        <div>
  
        <SectionBackground
        para="Shop Detail"
        />
        <SectionShopDetailMid/>
        <div>
          <h1 className="section-organic-vegetables-heading">Related Products</h1>
          <SectionOrganicVegetables/>
        </div>


      </div> 
    );
}