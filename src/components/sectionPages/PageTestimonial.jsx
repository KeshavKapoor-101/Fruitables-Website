import SectionBackground from "../SectionBackground"
import SectionTestimonial from "../sectionshome/SectionTestimonial"

export default function PageTestimonial()
{
    return(
        <div>
            <SectionBackground
            para="Testimonial"
            />
            <div className="space">

            </div>
            <SectionTestimonial/>
        </div>
    )
}