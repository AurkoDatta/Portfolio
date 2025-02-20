export default function Experience() {
    const experiences = [
        {
            role: "Application Developer",
            company: "Wealth Management, CIBC",
            duration: "May 2024 - August 2024",
            responsibilities: [
                "Java Development and Spring Framework: Gained hands-on experience in Java development, focusing on the Spring Framework",
                "Project Management and Solution Development: Developed a comprehensive Java-based solution to streamline error code management\n" +
                "across multiple applications, enhancing operational eﬃciency.",
                "Web Application Development: Created a Spring Boot-based web application with advanced search and file management capabilities",
                "Cross-Functional Communication: Facilitated communication between the WISE team and the Standard Policy team, ensuring smooth\n" +
                "integration of new policy changes."
            ]
        },
        {
            role: "Business Operations",
            company: "Version Originale",
            duration: "January 2022 - September 2022",
            responsibilities: [
                "Worked for start-up clothing brand upon its initial founding to support business operations",
                "Assisted in the creation of several early clothing designs and made critical decisions for the company",
                "Built up the company’s marketing and operational strategy, putting these into action soon after",
            ]
        }
    ]

    return (
        <div className="experience-container">
            {experiences.map((exp, index) => (
                <div key={index} className="experience-panel">
                    <div className="experience-header">
                        <div>
                            <h2 className="role-title">{exp.role}</h2>
                            <p className="company-name">{exp.company}</p>
                        </div>
                        <span className="duration">{exp.duration}</span>
                    </div>
                    <ul className="responsibilities">
                        {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}