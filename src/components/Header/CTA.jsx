import CV from "../../assets/CV_Jan_Illetsko.pdf"

export default function CTA() {
return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
)
}