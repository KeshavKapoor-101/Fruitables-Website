export default function CardComponent3(props)
{
    return(
        <div className="section-cards3-ele">
          <img src={props.source} height="350px" width="400px" className="section-cards3-img"></img>
          <div className="section-cards3-color"></div>
          <div className="section-cards3-floatingelement">
            <h className="center-text">{props.heading}</h>
            <p className="center-text">{props.para}</p>
          </div>
        </div>
    );
}