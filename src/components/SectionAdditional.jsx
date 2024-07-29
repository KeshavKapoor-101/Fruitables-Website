import AdditionalItem from "./AdditionalItem"

export default function SectionAdditional()
{
    return(
        <div className='additional'>
        <h1>Additional</h1>
        <ul>
          <AdditionalItem
          head="Organic"
          />
          <AdditionalItem
          head="Fresh"
          />
          <AdditionalItem
          head="Sales"
          />
          <AdditionalItem
          head="Discount"
          />
          <AdditionalItem
          head="Expired"
          />
        </ul>

      </div>    
    )
}