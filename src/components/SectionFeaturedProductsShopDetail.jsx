import FeaturedProductsCard from "./FeaturedProductsCard"

export default function SectionFeaturedProductsShopDetail()
{
    return(
        <div className='featured-products'>
                    <h1>Featured Products</h1>
                    <FeaturedProductsCard
                    source="https://github.com/themewagon/fruitables/blob/main/img/featur-1.jpg?raw=true"
                    />
                    <FeaturedProductsCard
                    source="https://github.com/themewagon/fruitables/blob/main/img/featur-2.jpg?raw=true"
                    />
                    <FeaturedProductsCard
                    source="https://github.com/themewagon/fruitables/blob/main/img/featur-3.jpg?raw=true"
                    />  
                    <FeaturedProductsCard
                    source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-4.jpg?raw=true"
                    />
                     <FeaturedProductsCard
                    source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-5.jpg?raw=true"
                    /> 
                    <FeaturedProductsCard
                    source="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true"
                    /> 
                  </div>
    )
}