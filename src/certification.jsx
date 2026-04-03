export default function Certifications() {
    return (
        <>
        <div className="div-section">
            <h1>Certifications</h1>
            <p>A record of formal study and completed coursework.</p>
        </div>

        <div className="div-section cert-card">
            <div className="cert-image-container">
                <img src="/CS50xa4.jpg" alt="CS50X certificate" className="cert-image" />
            </div>
            <h2 className="cert-badge">Harvard University</h2>

             <h2>CS50X: Introduction to Computer Science</h2>

            <p className="cert-date">July 2025 - February 2026</p>

            <p>
                An intensive introduction to computer science covering 
                algorithms, data structures, memory, and web development
            </p>

            <p>
                Completed multiple problem sets in C and JavaScript,
                and built a final project - a Pomdoro web based app Flask,
                Jinja, HTML, CSS, and JavaScript.
            </p>
            
            <p>
                This course strengthened my problem-solving ability,
                debugging skills, and understanfing of how software
                works at a fundemental level.
            </p>

        </div>


        </>
    )
}