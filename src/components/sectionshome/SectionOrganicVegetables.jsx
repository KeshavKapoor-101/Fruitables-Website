import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponentOrganicVegetables from "../CardComponentOrganicVegetables";

export default function SectionOrganicVegetables(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
        <section className='organic-vegetables'>
      
   
        <Carousel responsive={responsive}>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true"
            head="Parsely"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-1.jpg?raw=true"
            head="Tomato"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-3.png?raw=true"
            head="Banana"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-4.jpg?raw=true"
            head="Bell Papper"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-5.jpg?raw=true"
            head="Potatoes"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true"
            head="Parsely"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-5.jpg?raw=true"
            head="Potatoes"
            />   
          </div>
          <div>
            <CardComponentOrganicVegetables
            source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true"
            head="Parsely"
            />   
          </div>
        </Carousel>
      </section>
    );
}