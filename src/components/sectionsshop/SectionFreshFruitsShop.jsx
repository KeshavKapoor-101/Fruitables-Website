import SectionCategories from '../SectionCategories';
import SectionPriceSlider from '../SectionPriceSlider';
import SectionAdditional from '../SectionAdditional';
import SectionFeaturedProducts from '../SectionFeaturedProducts';
import SectionFreshFruits from '../SectionFreshFruits';
import SectionFreshFruitsCards from '../SectionFreshFruitsCards';
import SectionFreshFruitsButton from '../SectionFreshFruitsButton';


export default function SectionFreshFruitsShop()
{
    return(
        <section className='section-fresh-fruits-shop'>
              <h>Fresh Fruits Shop</h>
            <div className='container-whole'>
              <div className='container-left'>
                <form className='form-shop'>
                  <input type="search"
                  placeholder="keywords"
                  />             
                </form>
                  <SectionCategories/>
                  <SectionPriceSlider/>
                  <SectionAdditional/>
                  <SectionFeaturedProducts/>
                  <SectionFreshFruits/>   
              </div>
              <div className='container-right'>
                
                <div>
                  <div className='dropdown-ele'>
                    <label for="cars">Default Sorting</label>
                    <select name="nothing" id="cars" className='hi111'>
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
                <SectionFreshFruitsCards/>
                <SectionFreshFruitsButton/> 
              </div>
            </div>        
      </section>
    );
}