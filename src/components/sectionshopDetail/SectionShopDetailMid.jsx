import CounterButton from "../CounterButton";
import SectionCategories from "../SectionCategories";
import SectionFeaturedProductsShopDetail from "../SectionFeaturedProductsShopDetail";
import SectionFreshFruits from "../SectionFreshFruits";


export default function SectionShopDetailMid()
{
    let currentNumber = 0;

    function updateDisplay() {
        document.getElementById('numberDisplay').innerText = currentNumber;
    }

    function addNumber() {
        currentNumber++;
        updateDisplay();
    }

    function subtractNumber() {
        if(currentNumber>0)
        {
          currentNumber--;
        }
        updateDisplay();
    }
    return(
        <section className='section-shopDetail-mid'>
          <div className='shopDetail-mid-left'>
            <div className='shopDetail-mid-left-inside'>
            <img src="https://themewagon.github.io/fruitables/img/single-item.jpg" height="450px" width="450px"></img>
              <div className='shopDetail-mid-left-inside-inside'>
              <h>Brocoli</h>
              <p>Category: Vegetables</p>
              <span>3,35 $</span>
              <div className='createSpace'></div>
                <div className='star-icon-shopDetail'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>                
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill last-star" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
                <p>The generated Lorem Ipsum is therefore always free from<br/>
                repetition injected humour, or non-characteristic words etc.</p>
                <p>Susp endisse ultricies nisi vel quam suscipit. Sabertooth<br/>
                peacock flounder; chain pickerel hatchetfish, pencilfish<br/>
                snailfish</p>

                <div>
                  <div id="numberDisplay" class="number-display">0</div>
                    <div className="counter-btn-container">
                    <div><CounterButton title="+" onSelect={addNumber}/></div>
                    <div><CounterButton title="-" onSelect={subtractNumber}/></div>
                    </div>
                </div>
                <button className='card-button counter-btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="card-icon" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                </svg>Add To Cart</button>
                </div>
            </div>
            <div className='shopDetail-mid-left-inside-2'>
            <h>Description</h>
            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp<br/>
            endisse ultricies nisi vel quam suscipit</p>
            <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole<br/>
            trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>

            <table>
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <td>Country Of Origin</td>
                  <td>Agro Farm</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td>Organic</td>
                </tr>
                <tr>
                  <td>Check</td>
                  <td>Healthy</td>
                </tr>
                <tr>
                  <td>Min Weight</td>
                  <td>250 kg</td>
                </tr>
              </tbody>
            </table>

            <div className='feedback-container'>
              <h1 >Leave a Reply</h1>
              <div className='feedback-container-inside'>
                    <input type="search"
                    placeholder="Your Name*"
                    className='hi'
                    />             
                    <input type="search"
                    placeholder="Your Email*"
                    className='hi'
                    />                         
              </div>
              <input type="search"
                    placeholder="Your Review*"
                    className='hello'
                    /> 

            </div>
            <div className='shopDetail-mid-left-inside-3'>
                <div className='shopDetail-mid-left-inside-4'>
                  <p1>Please rate:</p1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill shopDetail-icon" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill shopDetail-icon" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>                
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill shopDetail-icon" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill shopDetail-icon" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill shopDetail-icon" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>

                </div>
                <button className='shopDetail-btn'>Post Comment</button>
            </div>
            </div>
          </div>
          <div className='shopDetail-mid-right'>
              <form className='form-shop'>
                <input type="search"
                placeholder="keywords"
                />             
              </form>
          <SectionCategories/>
          <SectionFeaturedProductsShopDetail/>
          <SectionFreshFruits/>
          </div>
        </section>
    );
}