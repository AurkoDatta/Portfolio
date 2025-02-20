export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            image: "/images/project1.jpg",
            url: "https://github.com"
        },
        {
            title: "Social Media Dashboard",
            image: "/images/project2.jpg",
            url: "https://github.com"
        },
        {
            title: "AI Chat Application",
            image: "/images/project3.jpg",
            url: "https://github.com"
        },
        {
            title: "Task Management System",
            image: "/images/project4.jpg",
            url: "https://github.com"
        }
    ]

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.url}
                    className="project-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                    />
                    <div className="project-title">{project.title}</div>
                </a>
            ))}
        </div>
    )
}