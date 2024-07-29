export default function SectionBackground(props)
{
    return(
    <section className='section-shop-background-image'>
        <h1 className='center-text'>{props.para}</h1>
        <p className='center-text'><span>Home / Pages /</span>{props.para}</p>
    </section>
    );
}