import CardComponent3 from "../CardComponent3";

export default function SectionFruitsVegetables()
{
    return(
        <section className='section-fruits-vegetables'>
        {/* <div className="section-cards3-ele">
          <img src="https://github.com/themewagon/fruitables/blob/main/img/featur-1.jpg?raw=true" height="350px" width="400px" className="section-cards3-img"></img>
          <div className="section-cards3-color"></div>
          <div className="section-cards3-floatingelement">
            <h>Fresh Apples</h>
            <p>20% OFF</p>
          </div>
        </div> */}
        <CardComponent3
        source="https://github.com/themewagon/fruitables/blob/main/img/featur-1.jpg?raw=true"
        heading="Fresh Apples"
        para="20% OFF"        
        />
        <CardComponent3
        source="https://github.com/themewagon/fruitables/blob/main/img/featur-2.jpg?raw=true"
        heading="Tasty Fruits"
        para="Free Delievery"
        />
        <CardComponent3
        source="https://github.com/themewagon/fruitables/blob/main/img/featur-3.jpg?raw=true"
        heading="Exotic Vegetable"
        para="Discount 30$"
        />
      </section>
    );
}