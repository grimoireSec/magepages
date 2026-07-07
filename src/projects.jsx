import { useNavigate } from 'react-router-dom';

export default function Project(){
    const navigate = useNavigate();
    
    return(
        <>
        <div className="cert-card">
            <h1>Pomodoro App ( New React Version ) IN DEVELOPMENT </h1>
        </div>

        <div className="cert-card">
            <h2>Pomodoro Web-App ( Old Flask/Jinja Verion )</h2>
            <p>
                A productivity tool built with Flask to manage focused work sessions.
            </p>
            <div className="div-section">
                <ul style={{ marginTop: '10px' }} className="tech-list">
                    <li>Flask</li>
                    <li>Jinja</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <div className="div-section">
                    <a style={{ marginTop: '10px' }} className="git-link" href="https://github.com/grimoireSec/CS50X-FINAL-PROJECT">Project Link</a>
                </div>
            </div>
        </div>
        </>
    )
}