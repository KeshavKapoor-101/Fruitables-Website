import SectionBackground from "../SectionBackground";
import CounterButton from "../CounterButton";
import SectionTable from "../SectionCart/SectionTable";
import SectionCardCart from "../SectionCart/SectionCardCart";

export default function PageCart()
{
    return(
        <div>
        <SectionBackground
        para="Cart"
        />
        <SectionTable/>
        <SectionCardCart/>
        
      </div> 
    );
}