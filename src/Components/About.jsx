export default function About() {
    return (
        <div className="about-container">
            <div className="name-header">
                <h1>Aurko Datta</h1>
                <h2>Full Stack Developer</h2>
            </div>

            <p className="intro-text">
                I'm a Full Stack developer and current computer science student at McMaster University.
                I have professional experience with Java and the Spring Framework while also building
                projects in Python and JavaScript using React, Flask, and MongoDB. I enjoy learning
                new techniques and working directly with others to create practical software solutions
                that address everyday challenges.
            </p>

            <div className="skills-grid">
                <div className="skill-panel">
                    <h3>Frontend</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="skill-panel">
                    <h3>Backend</h3>
                    <ul>
                        <li>Java, Spring Framework</li>
                        <li>Python, Flask</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                <div className="skill-panel">
                    <h3>Additional</h3>
                    <ul>
                        <li>Git/GitHub</li>
                        <li>Docker</li>
                        <li>Data Structures and Algorithms Knowledge</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/aurko-datta-624623284/" className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>

                <a href="https://github.com/AurkoDatta" className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>

                <a href="/resume.pdf" download className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                </a>

                <a href="mailto:aurkodatta08@outlook.com" className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                    </svg>
                </a>

                <a href="https://paypal.me/aurrko?country.x=CA&locale.x=en_US" className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M12.5 2C12.5 2 11.5 2 11.5 3V4.5C9.5 4.5 7 5.5 7 8.5C7 11.5 9.5 12.5 11.5 13.5V19C10.5 19 9 18.5 8 17.5L7 19.5C8.5 20.5 10 21 11.5 21V22C11.5 23 12.5 23 12.5 23C12.5 23 13.5 23 13.5 22V20.5C16.5 20 18 18 18 15.5C18 12.5 15.5 11.5 13.5 10.5V5.5C14.5 5.5 15.5 6 16.5 7L17.5 5C16 4 14.5 3.5 13.5 3.5V3C13.5 2 12.5 2 12.5 2ZM11.5 6.5V11.5C10.5 11 9.5 10 9.5 8.5C9.5 7 10.5 6.5 11.5 6.5ZM13.5 15.5C14.5 16 15.5 17 15.5 18C15.5 19.5 14.5 20 13.5 20V15.5Z"/>
                    </svg>
                </a>

                <a href="https://fiverr.com" className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M23.004 2.709c-.487 0-.883.396-.883.883v3.736c0 .487.396.883.883.883h1.47c.487 0 .883-.396.883-.883V3.592c0-.487-.396-.883-.883-.883h-1.47zm-5.294 0c-.487 0-.883.396-.883.883v3.736c0 .487.396.883.883.883h1.47c.487 0 .883-.396.883-.883V3.592c0-.487-.396-.883-.883-.883h-1.47zm-5.293 0c-.487 0-.883.396-.883.883v3.736c0 .487.396.883.883.883h1.47c.487 0 .883-.396.883-.883V3.592c0-.487-.396-.883-.883-.883h-1.47zm-5.293 0c-.487 0-.883.396-.883.883v3.736c0 .487.396.883.883.883h1.47c.487 0 .883-.396.883-.883V3.592c0-.487-.396-.883-.883-.883h-1.47zM.883 2.709c-.487 0-.883.396-.883.883v3.736c0 .487.396.883.883.883h1.47c.487 0 .883-.396.883-.883V3.592c0-.487-.396-.883-.883-.883H.883zM0 16.294v4.705h24v-4.705H0z"/>
                    </svg>
                </a>

                <a href="https://freelancer.com" className="icon-link" target="_blank" rel="noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M14.096 3.076l1.634 2.292L24 3.076M16.27 2.269l3.464 2.926 1.732-1-3.464-2.926-1.732 1zm-5.001 0l3.464 2.926 1.732-1-3.464-2.926-1.732 1zM4.154 8.424l1.732 1 1.732-1-1.732-1-1.732 1zm13.66 0l1.732 1 1.732-1-1.732-1-1.732 1zm-7.86 12.612h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                    </svg>
                </a>
            </div>


        </div>
    )
}