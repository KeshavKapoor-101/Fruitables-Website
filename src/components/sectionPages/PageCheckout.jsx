import SectionBackground from "../SectionBackground";
import SectionBilling from "../sectioncheckout/SectionBilling";
import SectionCheckoutRight from "../sectioncheckout/SectionCheckoutRight";

export default function PageCheckout()
{
    return(
        <div className="page-checkout">
            <SectionBackground
            para="Checkout"
            />
            <div className="page-checkout-inside">
                <SectionBilling/>    
                <SectionCheckoutRight/>
            </div>
        </div>
        
    );
}