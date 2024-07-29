export default function CardComponent2(props)
{
    return(
        <div className='section-cards2-ele'>
            <button className='btn-fruits'>Fruits</button>
            <img src={props.source} height="200px" width="320px" alt={props.alt}></img>
            <h2 className="center-text">{props.name}</h2>
            <p>{props.para}</p>

            <div className='cards-footer'>
              <span>$4.99/Kg</span>
              <button className='card-button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="card-icon" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
              </svg>Add To Cart</button>
            </div>
          </div>
    );
}