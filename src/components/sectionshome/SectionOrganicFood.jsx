import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SectionOrganicFood()
{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return(
        <section class="section-organicfood">
          <div class="organic-food">
              <div>
                  <p class="head-1">100% Organic Foods</p>
                  <p class="head-2">Organic Veggies & Fruits Foods</p>

                  <div class="organic-food-container">
                    <form class="search-form">
                      <input type="search"
                      placeholder="search"
                      />             
                    </form>
                    <button className="btn">Submit Now</button>
                    </div>
              </div>
              <div className="image-1">
                  <img src="https://github.com/themewagon/fruitables/blob/main/img/hero-img-2.jpg?raw=true" height="300px" width="500px"></img>
              </div>
          </div>
          
      </section>
    );
}