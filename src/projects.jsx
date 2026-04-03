import { useNavigate } from 'react-router-dom';

export default function Project(){
    const navigate = useNavigate();
    
    return(
        <>
        <div className="div section cert-card" onClick={() => navigate("projects/pomodoro")}>
            <h1>Pomodoro App ( New React Version )</h1>
        </div>

        <div className="div-section cert-card" onClick={() => navigate("/projects/pomodoro")}>
            <h2>Pomodoro App ( Old Flask/Jinja Verion )</h2>
            <p>
                A productivity tool built with Flask to manage focused work sessions.
            </p>
            <div className="div-section">
                 <ul className="tech-list">
                <li>Flask</li>
                <li>Jinja</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            {/* ADD <A> LINK FOR THE READ ME OF YOUR PROJECT and use it as a div */}

            </div>
        </div>
        </>
    )
}