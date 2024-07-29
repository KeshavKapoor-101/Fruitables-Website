export default function CardComponent(props)
{
    return (
        <li className="cards-container">
            <div>
                <img></img>
            </div>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
        </li>
    );
}

