export default function CounterButton({title,onSelect})
{
    return(
        <button onClick={onSelect} className="counter-button">{title}</button>
    )
}