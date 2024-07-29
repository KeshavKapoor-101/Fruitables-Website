import CounterButton from "../CounterButton";

export default function SectionTable()
{
    let currentNumber1 = 0;

    function updateDisplay1() {
        document.getElementById('numberDisplay1').innerText = currentNumber1;
    }

    function addNumber1() {
        currentNumber1++;
        updateDisplay1();
    }

    function subtractNumber1() {
        if(currentNumber1>0)
        {
          currentNumber1--;
        }
        updateDisplay1();
    }

    let currentNumber2 = 0;

    function updateDisplay2() {
        document.getElementById('numberDisplay2').innerText = currentNumber2;
    }

    function addNumber2() {
        currentNumber2++;
        updateDisplay2();
    }

    function subtractNumber2() {
        if(currentNumber2>0)
        {
          currentNumber2--;
        }
        updateDisplay2();
    }

    let currentNumber3 = 0;

    function updateDisplay3() {
        document.getElementById('numberDisplay3').innerText = currentNumber3;
    }

    function addNumber3() {
        currentNumber3++;
        updateDisplay3();
    }

    function subtractNumber3() {
        if(currentNumber3>0)
        {
          currentNumber3--;
        }
        updateDisplay3();
    }
    return(
        <section className='section-table'>
          <table>
            <tbody>
                <tr>
                    <th>Products</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Handle</th>
                </tr>
                <tr>
                    <td><img src="https://github.com/themewagon/fruitables/blob/main/img/fruite-item-3.jpg?raw=true" height="100px" width="100px" ></img></td>
                    <td>Big Banana</td>
                    <td>2.99$</td>
                    <td>
                    <div>
                        <div id="numberDisplay1" class="number-display">0</div>
                            <div className="counter-btn-container">
                            <div><CounterButton title="+" onSelect={addNumber1}/></div>
                            <div><CounterButton title="-" onSelect={subtractNumber1}/></div>
                            </div>
                        </div>
                    </td>
                    <td>2.99$</td>
                    <td>
                        <button className="table-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <                     path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg></button>
                    </td>                 
                </tr>
                <tr>
                    <td><img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-5.jpg?raw=true" height="100px" width="100px" ></img></td>
                    <td>Big Banana</td>
                    <td>2.99$</td>
                    <td>
                        <div>
                            <div id="numberDisplay2" class="number-display">0</div>
                            <div className="counter-btn-container">
                            <div><CounterButton title="+" onSelect={addNumber2}/></div>
                            <div><CounterButton title="-" onSelect={subtractNumber2}/></div>
                            </div>
                        </div>
                    </td>
                    <td>2.99$</td>
                    <td>
                        <button className="table-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <                     path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg></button>
                    </td>
                </tr>
                <tr>
                    <td><img src="https://github.com/themewagon/fruitables/blob/main/img/featur-3.jpg?raw=true" height="100px" width="100px" ></img></td>
                    <td>Big Banana</td>
                    <td>2.99$</td>
                    <td>
                        <div>
                            <div id="numberDisplay3" class="number-display">0</div>
                            <div className="counter-btn-container">
                            <div><CounterButton title="+" onSelect={addNumber3}/></div>
                            <div><CounterButton title="-" onSelect={subtractNumber3}/></div>
                            </div>
                        </div>
                    </td>
                    <td>2.99$</td>
                    <td>
                        <button className="table-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <                     path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg></button>
                    </td>
                </tr>
              
            </tbody>
          </table>
          <div className="below-table">
            <form>
                <input type="search"
                placeholder="Coupon Code"
                className='input-table'
                />             
            </form>
            <button className="below-table-btn">Apply Coupon</button>
          </div>
        </section>
    );
}