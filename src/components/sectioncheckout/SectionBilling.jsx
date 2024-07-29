export default function SectionBilling()
{
    return(
        <div className="section-billingDetails">
                <h1>Billing Details</h1>
                <div className="section-billing-inside">
                    <div>
                        <p className="remove-margin-bottom mar-lef">First Name*</p>
                        <form className='form-shop'>
                            <input type="search"
                            />             
                        </form>
                    </div>
                    <div>
                        <p className="remove-margin-bottom mar-lef">Last Name*</p>
                        <form className='form-shop'>
                            <input type="search"
                            />             
                        </form>
                    </div>
                </div>
                <div className="section-billing-inside-2">
                <p className="remove-margin-bottom ">Company Name*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <p className="remove-margin-bottom ">Address*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <p className="remove-margin-bottom ">Town/City*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <p className="remove-margin-bottom ">Country*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <p className="remove-margin-bottom ">Post Code/Zip*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <p className="remove-margin-bottom ">Mobile*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <p className="remove-margin-bottom ">Email Address*</p>
                    <form className='form-shop '>
                        <input type="search"
                        />             
                    </form>

                    <div className="inside-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        </svg>
                        <p>Create an account?</p>
                    </div>
                    <div className="inside-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        </svg>
                        <p>Ship to different address?</p>
                    </div>
                    <form className='form-shop checkout-notes-form'>
                        <input type="search"
                        placeholder="Order Notes(Optional)"
                        />             
                    </form>
                </div>
            </div>
    );
}