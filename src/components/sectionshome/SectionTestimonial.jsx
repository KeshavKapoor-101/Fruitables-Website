import CardComponentTestimonial from "../CardComponentTestimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SectionTestimonial()
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className='section-testimonials'>
              <div className='testimonial-header'>
                <h2 className='center-text'>Our Testimonial</h2>
                <h1 className='center-text'>Our Client Saying!</h1>
              </div>
        <Carousel responsive={responsive}>
        <CardComponentTestimonial/>
        <CardComponentTestimonial/>
        <CardComponentTestimonial/>
        <CardComponentTestimonial/>   
        <CardComponentTestimonial/>        
        <CardComponentTestimonial/>        
      </Carousel>
      </section>
    );
}