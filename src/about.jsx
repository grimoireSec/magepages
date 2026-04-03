export default function About(){
    return (
        <>
       <main className="about-container">

        <aside className="about-sidebar">
            <img className="profile-img" src="IMG_1998.jpg" alt="Jose" />
            <h1>Jose Manuel Jimenez-Ruiz</h1>
            <p className="tagline">
                Front End Developer
            </p>
            <a className="git-link" href="https://github.com/grimoireSec" alt="JoseGithub">My Github Profile</a>
            <div className="div-section">
                <img className="profile-img" src="IMG_3081.jpeg" alt="Kyoto GYM" />
                <p>Kyoto - Mikagedomaecho</p>
            </div>
            <div className="div-section">
                <img className="profile-img" src="IMG_1995.jpeg" alt="Shibuya" />
                <p>Shibuya - Jingumae</p>
            </div>
            <div className="div-section">
                <img className="profile-img" src="IMG_JAP32.jpeg" alt="Shinto" />
                <p>Shinto Shrine</p>
            </div>
            
        </aside>

        <div className="about-content">
            <section>
                <h2>About Me</h2>
                <p className="div-section">
                    I'm a developer who enjoys understanding how things work and building technology from the ground up. 
                    My interest in tech started when I was around ten years old. 
                    I loved experimenting with computers, changing things with the inspect tool, and seeing how small changes could alter an entire webpage. 
                    The idea that technology could be modified, customized, and built from scratch fascinated me.
                </p>
                <p className="div-section">
                    By the time I was thirteen, I discovered red-teaming and ethical hacking. 
                    Learning that people could legally test systems, break things, and find weaknesses for a living immediately caught my attention. 
                    I've always enjoyed exploring systems, finding loopholes, and understanding how things break so they can be improved.
                </p>
                <p>Based in IN, Indianpolis. Brining big tech to the MidWest, day by day...</p>
            </section>

            <section>
                <h2>My Journey</h2>
                <p className="div-section">
                    One of the biggest challenges I faced early on was impostor syndrome. 
                    Seeing other people grasp concepts that were completely new to me was intimidating at first. 
                    But instead of quitting, I kept pushing forward and focused on learning one problem at a time.
                </p>

                <p className="div-section">
                    Before anything else, my journey has been shaped by the tools I had and the seasons I went through.
                </p>

                <p className="div-section">
                    I started on an HP 15 — not the most powerful machine, but enough to follow tutorials and begin understanding the basics. 
                    It wasn't ideal, but it did its job.
                </p>

                <p className="div-section">
                    Then, I transitioned to a Steam Deck. 
                    What started as an unconventional setup became one of the most important stages of my growth. 
                    After connecting it to a monitor, keyboard, and mouse, it became my primary workstation. 
                    It was on that setup that I began Harvard's CS50x and worked through many of the early problem sets, learning how to think through problems instead of relying on tutorials.
                </p>

                <p className="div-section">
                    Later, I moved to a MacBook Pro. 
                    That shift changed my workflow entirely. 
                    Everything became faster, smoother, and more structured. 
                    It's now my primary environment for development and study.
                </p>

                <p className="div-section">
                    Across all three, the tools changed, but the process didn't. 
                    There were breaks, moments of doubt, and times where I stayed at a surface level. 
                    But CS50x forced me out of that. 
                    It taught me that I didn't need to feel ready to begin — only willing to continue.
                </p>

                <p className="div-section">
                    From starting in July 2025 to finishing in February 2026, that period marked the transition from simply learning about code to actually understanding it.
                </p>

                <p className="div-section">
                    The most challenging milestone in my journey so far has been completing Harvard's CS50X. 
                    The course demanded hours of lectures, difficult problem sets, and many moments where the solution wasn't obvious. 
                    I had to repeatedly break my own code, debug it, and learn from every mistake.
                </p>

                <p className="div-section">
                    For my final project, I built a Pomodoro productivity application using Flask, Jinja, HTML, CSS, and JavaScript. 
                    Completing that project required persistence, problem-solving, and patience, and finishing the course remains one of the hardest and most rewarding accomplishments in my learning journey.
                </p>

                <section>
                <h2>What I Work With</h2>
                <ul className="tech-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>C</li>
                    <li>Flask</li>
                    <li>Jinja</li>
                    <li>SQL</li>
                </ul>
            </section>
                <h2>What Do I Prefer?</h2>
                <p className="div-section">
                    Right now I especially enjoy front-end development and UI work. 
                    Seeing progress immediately on the screen makes development extremely satisfying, and it allows me to quickly identify problems and refine the experience. 
                    There's something deeply rewarding about turning an idea into a finished interface people can actually use.
                </p>
            </section>

            <section>
                <h2>How I Learn</h2>
                <p>
                    Curiosity drives the way I approach technology.
                </p>
                <p>
                    When I encounter a difficult problem, my instinct is to break it apart and reverse-engineer the solution. 
                    By deconstructing systems and understanding where mistakes occur, I'm able to learn faster and avoid repeating the same errors.
                    I'm also not afraid to ask questions. 
                    In an industry where people often struggle to explain problems clearly, being able to communicate an issue effectively and seek guidance is an important skill.
                </p>
            </section>

            <section>
                <h2>Beyond Technology</h2>
                <p className="div-section">
                    Outside of programming, my faith and personal discipline shape the way I approach life and learning. 
                    I am a Catholic and believe Jesus Christ of Nazereth is Lord. 
                    My faith influences the way I pursue growth, discipline, and responsibility.
                </p>
                <p>My Hobbies include:</p>
                <ul className="tech-list">
                    <li>Bible Study</li>
                    <li>Hiking & Camping</li>
                    <li>Cooking & Baking</li>
                    <li>Traveling</li>
                    <li>Strength Training</li>
                </ul>
            </section>

            <section>
                <h2>Final Thoughts</h2>
                <p className="div-section">
                    If there is one thing I hope people understand when they visit this site, it's that I take learning seriously. 
                    I don't simply enjoy tech — I care deeply about understanding it and improving every day.
                </p>
                <i>
                    “As long as you live, keep learning how to live.”
                </i>
                <i>
                    - Lucius Annaeus Seneca
                </i>
            </section>
        </div>
       </main>
        </>
    ) 
}