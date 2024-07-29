import TabButtonHeader from "../TabButtonHeader";
import { Link } from "react-router-dom";

export default function SectionHeader()
{
    return(
        <section class="header">
      <div class="header-1">
          <div class="header-1-container"> 
              <div class="header-1-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="header-1-icon" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                  </svg>
                  123 street,New York
              </div>
              <div class="header-1-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="header-1-icon" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                  </svg>
                  Email@Example.com
              </div>
          </div>
          <p class="header-1-para">Privacy Policy / Terms Of Use / Sales And Refunds</p>
      </div>
      <div class="header-2">
          <p>Fruitables</p>


          <nav class="main-nav">
            <ul class="btn-header-list">
            {/* <li><button class="btn-header">Home</button></li> */}
            <Link to="/"><TabButtonHeader>Home</TabButtonHeader></Link>
            <Link to="/shop"><TabButtonHeader>Shop</TabButtonHeader></Link>
            <Link to="/shop-detail"><TabButtonHeader>Shop Detail</TabButtonHeader></Link>
            {/* <Link><TabButtonHeader>Pages</TabButtonHeader></Link> */}
            <div class="dropdown">
                <button class="dropbtn">Pages<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down down-arrow" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg></button>
                <div class="dropdown-content">
                    <Link to="/cart"><a href="#">Cart</a></Link>
                    <Link to="/checkout"><a href="#">Checkout</a></Link>
                    <Link to="/testimonial"><a href="#">Testimonial</a></Link>
                    <Link to="/404page"><a href="#">404 Page</a></Link>

                </div>
            </div>
            <Link to="/contact"><TabButtonHeader>Contact</TabButtonHeader></Link>

          </ul>
          </nav>

          <nav class="header-2-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" class="iconlocation">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="header-2-icon" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
            </svg>     
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="header-2-icon" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg> 
          </nav>

      </div>
      </section>
    );
}