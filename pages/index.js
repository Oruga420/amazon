import Head from "next/head";
import { useCallback } from "react";

const resume = {
  name: "Alejandro De La Mora",
  title: "AI Solutions Architect | Salesforce Developer",
  contact: {
    phone: "+1 437 243 3693",
    email: "alex@seshwithfriends.org",
    linkedin: "https://www.linkedin.com/in/amorac/",
    website: "http://www.eloruga.com",
    github: "https://github.com/Oruga420",
  },
  summary:
    "AI Solutions Architect with extensive experience as an AI Platform Builder, operating at the intersection of data engineering, automation, and platform engineering. Proven track record of shipping over 120 GenAI applications and designing scalable Agentic AI solutions. Expert in driving operational velocity, having saved over 20,000 man-hours in a single year through intelligent automation. deeply proficient in AWS, GCP, and integrating LLMs into secure, regulated data stacks.",
  expertise: [
    "Agentic Workflows",
    "RAG Systems",
    "MCP Servers",
    "LLM Fine-tuning",
    "LangChain/Graph strategies",
    "AWS (Bedrock, Lambda, S3)",
    "Google Cloud Platform (GCP)",
    "Vercel",
    "Python",
    "Node.js",
    "SQL",
    "Next.js",
    "Salesforce (Apex/Flows)",
    "Data Pipelines",
    "ETL",
    "CI/CD",
    "Automated Testing (QA)",
  ],
  experience: [
    {
      company: "Assent",
      role: "AI Solutions Architect",
      location: "Canada",
      dates: "Feb 2025 - Present",
      bullets: [
        "AI Platform Building: Architecting a secure, auditable GenAI layer for a compliance platform, utilizing Agentic workflows and custom MCP servers to expose internal data tools safely.",
        "Operational Velocity: Successfully saved the company over 20,000 man-hours in one year by replacing manual tasks with GenAI automations and productivity tools.",
        "Adoption & Culture: Drove internal AI adoption from 47% to 97%, empowering teams to use self-service AI data platforms for daily decision-making.",
        "Tech Stack: OpenAI, Anthropic, Gemini, AWS, Live RAG pipelines, and internal API integrations.",
      ],
    },
    {
      company: "Sesh | Ai Solutions",
      role: "AI Solutions Architect",
      location: "Toronto, Ontario",
      dates: "Nov 2021 - Present",
      bullets: [
        "Production AI: Designed and shipped architecture for over 120 GenAI applications and 90+ chatbots across 30 diverse clients.",
        "Agentic Systems: Built multi-step agentic workflows that automate complex business logic across CRMs, marketing tools, and data stores.",
        "Education & Community: Lead a community of 100+ members, facilitating AI workshops and tutorials (e.g., Latinas in Tech) to demystify AI implementation.",
      ],
    },
    {
      company: "Online Business Systems",
      role: "Salesforce Consultant (Agentforce)",
      location: "Toronto, Ontario",
      dates: "Jun 2024 - Nov 2024",
      bullets: [
        "Agentforce Implementation: Configured AI assistants and copilot experiences, defining strict data access controls and prompt engineering strategies.",
        "Data Modeling: Aligned Salesforce data models with AI requirements to ensure accurate retrieval and action execution by agents.",
      ],
    },
    {
      company: "Globalization Partners",
      role: "Salesforce Manager & AI Lead",
      location: "Ontario, Canada",
      dates: "Nov 2018 - Nov 2023",
      bullets: [
        "GenAI Innovation: Pioneered the internal \"GIA\" chatbot and GenAI-powered workflows for Jira ticket handling, blending platform management with early AI adoption.",
        "Platform Scale: Managed a Salesforce environment for 1,000+ users, overseeing data quality, integrations, and scalable configuration.",
      ],
    },
    {
      company: "Amstar DMC",
      role: "Project Manager",
      location: "Mexico",
      dates: "May 2016 - Nov 2018",
      bullets: [
        "Managed complex web and integration projects (Java, PHP, APIs), overseeing budgets up to $700k USD and ensuring alignment between engineering and business stakeholders.",
      ],
    },
  ],
  education: [
    {
      degree: "Ingenieria en Sistemas (Systems Engineering)",
      school: "Universidad Marista de MAcrida",
      years: "2004 - 2007",
    },
  ],
};

export default function Home() {
  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`${resume.name} | ${resume.title}`}</title>
        <meta
          name="description"
          content="Resume site built from provided summary with a playful blue theme."
        />
      </Head>
      <div className="page">
        <button className="printButton" onClick={handlePrint}>
          Download PDF
        </button>
        <header className="hero">
          <div className="heroText">
            <p className="role">Role</p>
            <h1>{resume.name}</h1>
            <h2>{resume.title}</h2>
            <section className="summaryCard">
              <h3>Professional Summary</h3>
              <p>{resume.summary}</p>
            </section>
          </div>
          <aside className="contactCard">
            <h3>Contact</h3>
            <ul>
              <li>
                <span>Phone</span>
                <a href={`tel:${resume.contact.phone}`}>{resume.contact.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <span>Website</span>
                <a href={resume.contact.website} target="_blank" rel="noreferrer">
                  Website
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={resume.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </aside>
        </header>

        <section className="section">
          <div className="sectionTitle">Areas of Expertise</div>
          <div className="tags">
            {resume.expertise.map((item, idx) => (
              <span key={item} className="tag" style={{ "--i": idx }}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">Work Experience</div>
          <div className="timeline">
            {resume.experience.map((job) => (
              <article key={`${job.company}-${job.dates}`} className="card">
                <div className="cardHeader">
                  <div>
                    <p className="eyebrow">{job.location}</p>
                    <h4>{job.company}</h4>
                    <p className="roleTitle">{job.role}</p>
                  </div>
                  <div className="dateBadge">{job.dates}</div>
                </div>
                <ul className="list">
                  {job.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">Education</div>
          <div className="education">
            {resume.education.map((edu) => (
              <div key={edu.degree} className="eduCard">
                <h4>{edu.degree}</h4>
                <p className="school">{edu.school}</p>
                <p className="years">{edu.years}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
