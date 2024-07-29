import CardComponent2 from "../CardComponent2";

export default function SectionOrganicProductsCards()
{
    return(
        <section className='section-organicproducts-cards'>
        <div className='section-cards2-header'>
          <h2>Our Organic Products</h2>
            <div className='section-cards2-buttons-container'>
                <button className='section-cards2-buttons'>All Products</button>
                <button className='section-cards2-buttons'>Vegetables</button>
                <button className='section-cards2-buttons'>Fruits</button>
                <button className='section-cards2-buttons'>Bread</button>
                <button className='section-cards2-buttons'>Meat</button>
            </div>
        </div>

        <div className='section-cards2-container'>
          
          {/* <div className='section-cards2-ele'>
            <button className='btn-fruits'>Fruits</button>
            <img src="https://github.com/themewagon/fruitables/blob/main/img/best-product-5.jpg?raw=true" height="200px" width="320px" alt="Grapes"></img>
            <h2>Grapes</h2>
            <p>Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt</p>

            <div className='cards-footer'>
              <span>$4.99/Kg</span>
              <button className='card-button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="card-icon" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
              </svg>Add To Cart</button>
            </div>
          </div> */}

          
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-5.jpg?raw=true"
          alt="Grapes"
          name="Grapes"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-5.jpg?raw=true"
          alt="Grapes"
          name="Grapes"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-2.jpg?raw=true"
          alt="Raspberries"
          name="Raspberries"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-4.jpg?raw=true"
          alt="Apricots"
          name="Apricots"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-3.jpg?raw=true"
          alt="Banana"
          name="Banana"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-1.jpg?raw=true"
          alt="Oranges"
          name="Oranges"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-2.jpg?raw=true"
          alt="Raspberries"
          name="Raspberries"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
          <CardComponent2
          source="https://github.com/themewagon/fruitables/blob/main/img/best-product-5.jpg?raw=true"
          alt="Grapes"
          name="Grapes"
          para="Lorem ipsum dolor sit amet
            consectetur adipisicing elit sed do
            eiusmod te incididunt"
          />
        </div>
      </section>
    );
}