export default function SectionCardCart()
{
    return(
        <div className="section-card-cart">
            <div className="section-card-cart-container">
                <h1 className="center-text">Cart Total</h1>
                <div className="section-cart-contain1">
                    <p className="hi1"> Subtotal:</p>
                    <p className="hi2">$96.00</p>
                </div>
                <div className="section-cart-contain2">
                    <p className="hi1">Shipping:</p>
                    <div>
                    <p className="hi3">Flat rate:$96.00</p>  
                    <p className="hi4">Shipping to Ukraine</p>
                    </div>  
                </div>
                <div className="section-cart-contain3">
                    <p className="hi1">Total</p>
                    <p className="hi2">$99.00</p>
                </div>

                <button className="card-cart-btn">Proceed Checkout</button>

            </div>


        </div>
    );
}