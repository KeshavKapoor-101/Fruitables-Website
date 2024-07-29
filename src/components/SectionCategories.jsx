import CategoriesItem from "./CategoriesItem";
export default function SectionCategories()
{
    return(
        <div className='categories'>
        <h1>Categories</h1>
        <div>
          <ul>
            <CategoriesItem
            head="Apples"
            span="3"
            />
            <CategoriesItem
            head="Oranges"
            span="5"
            />
            <CategoriesItem
            head="Strawberry"
            span="2"
            />
            <CategoriesItem
            head="Banana"
            span="8"
            />
            <CategoriesItem
            head="Pumpkin"
            span="5"
            />
    
          </ul>
        </div>
      </div>
    );
}