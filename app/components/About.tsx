'use client';
import { useState } from 'react';
import Link from 'next/link';
import SkillCard from './SkillCard'

interface AboutProps {
  /** Categories from the URL, e.g. ?category=webdev,db */
  initialCategories?: string[];
  /** Specific skill names from the URL, e.g. ?skills=React,TypeScript,PostgreSQL */
  initialSkills?: string[];
}

type SkillFilter =
  | { kind: 'categories'; values: string[] }
  | { kind: 'skills'; values: string[] };

const normalize = (value: string) => value.trim().toLowerCase();

export default function About({ initialCategories = [], initialSkills = [] }: AboutProps) {
  // Skills shown depend on which hidden word in the bio was clicked, or on the
  // ?category= / ?skills= URL params used to tailor the page for an application.
  const [filter, setFilter] = useState<SkillFilter>(() => {
    if (initialSkills.length > 0) return { kind: 'skills', values: initialSkills.map(normalize) };
    if (initialCategories.length > 0) return { kind: 'categories', values: initialCategories.map(normalize) };
    return { kind: 'categories', values: ['generic'] };
  });

  const skills = [
    { 
      id: 2, 
      name: 'JavaScript', 
      categories: ["generic", "OOP", "webdev"],
      logo: "/logos/javascript-svgrepo-com.svg"
    },
    {
      id:29,
      name: 'TypeScript',
      categories: ["generic", "OOP", "webdev"],
      logo: "/logos/typescript-icon-svgrepo-com.svg"
    },
    { 
      id: 1, 
      name: 'HTML', 
      categories: ["generic", "ui/ux", "webdev"],
      logo: '/logos/html-5-svgrepo-com.svg'
    },
    { 
      id: 3, 
      name: 'CSS', 
      categories: ["generic", "ui/ux", "webdev"],
      logo: "/logos/css-3-svgrepo-com.svg"
    },
    { 
      id: 4, 
      name: 'React', 
      categories: ["generic", "webdev"],
      logo: "/logos/react-svgrepo-com.svg"
    },
    { 
      id: 5, 
      name: 'Next.js', 
      categories: ["generic", "webdev"],
      logo: "/logos/nextjs-fill-svgrepo-com.svg"
    },
    { 
      id: 6, 
      name: 'Git', 
      categories: ["generic", "webdev", ],
      logo: "/logos/git-svgrepo-com.svg"
    },
    { 
      id: 7, 
      name: 'Node.js', 
      categories: ["generic", "webdev"],
      logo: "/logos/nodejs-icon-svgrepo-com.svg"
    },
    { 
      id: 8, 
      name: 'Python', 
      categories: ["generic", "OOP", "webdev"],
      logo: "/logos/python-svgrepo-com.svg"
    },
    { 
      id: 9, 
      name: 'MySQL', 
      categories: ["generic", "db"],
      logo: "/logos/mysql-logo-svgrepo-com.svg"
    },
    { 
      id: 10, 
      name: 'PostgreSQL', 
      categories: ["generic", "db"],
      logo: "/logos/postgresql-svgrepo-com.svg"
    },
    { 
      id: 11, 
      name: 'Bootstrap Studio', 
      categories: ["ui/ux", "webdev"],
      logo: "/logos/bootstrap-svgrepo-com.svg"
    },
    { 
      id: 12, 
      name: 'Rest APIs', 
      categories: ["webdev"],
      logo: "/logos/rest-api-svgrepo-com.svg"
    },
    { 
      id: 13, 
      name: 'Machine Learning', 
      categories: ["ai"],
      logo: "/logos/machine-learning-model-svgrepo-com.svg"
    },
    { 
      id: 14, 
      name: 'Prompt Engineering', 
      categories: ["ai"],
      logo: "/logos/ai-svgrepo-com.svg"
    },
    { 
      id: 15, 
      name: 'OpenAI API', 
      categories: ["ai"],
      logo: "/logos/openai-svgrepo-com.svg"
    },
    { 
      id: 16, 
      name: 'YOLO Classification', 
      categories: ["ai"],
      logo: "/logos/classifier-language-svgrepo-com.svg"
    },
    { 
      id: 17, 
      name: 'Svelte', 
      categories: ["generic", "webdev"],
      logo: "/logos/svelte-icon-svgrepo-com.svg"
    },
    { 
      id: 18, 
      name: 'Clickup', 
      categories: ["team"],
      logo: "/logos/clickup-svgrepo-com.svg"
    },
    { 
      id: 19, 
      name: 'Slack', 
      categories: ["team"],
      logo: "/logos/slack-svgrepo-com.svg"
    },
    { 
      id: 20, 
      name: 'Java', 
      categories: ["OOP"],
      logo: "/logos/java-svgrepo-com.svg"
    },
    { 
      id: 21, 
      name: 'C#', 
      categories: ["OOP"],
      logo: "/logos/c-sharp-svgrepo-com.svg"
    },
    { 
      id: 22, 
      name: 'IOT Programming', 
      categories: ["iot"],
      logo: "/logos/iot-core-svgrepo-com.svg"
    },
    { 
      id: 23, 
      name: 'Arduino Framework', 
      categories: ["iot"],
      logo: "/logos/arduino-svgrepo-com.svg"
    },
    { 
      id: 24, 
      name: 'Teamwork', 
      categories: ["generic", "transferrable"],
      logo: "/logos/teamwork-svgrepo-com.svg"
    },
    { 
      id: 25, 
      name: 'Customer Service', 
      categories: ["generic", "transferrable"],
      logo: "/logos/customer-service-support-svgrepo-com.svg"
    },
    { 
      id: 26, 
      name: 'Customer Relationship Management', 
      categories: ["generic", "transferrable"],
      logo: "/logos/zoho-svgrepo-com.svg"
    },
    { 
      id: 27, 
      name: 'Time Management', 
      categories: ["generic", "transferrable"],
      logo: "/logos/time-svgrepo-com.svg"
    },
    { id: 28, 
      name: 'Figma', 
      categories: ["ui/ux"], 
      logo: "/logos/figma-svgrepo-com.svg" 
    },
    {
      id: 30,
      name: 'Jest',
      categories: ["generic", "webdev"],
      logo: "/logos/jest.svg"
    },
    {
      id: 31,
      name: 'AWS',
      categories: ["generic", "webdev"],
      logo: "/logos/amazonwebservices.svg"
    },
    {
      id: 32,
      name: 'Claude Code',
      categories: ["generic", "ai"],
      logo: "/logos/claude.svg"
    },
  ];

  const matchesFilter = (skill: (typeof skills)[number], f: SkillFilter) =>
    f.kind === 'skills'
      ? f.values.includes(normalize(skill.name))
      : skill.categories.some((category) => f.values.includes(normalize(category)));

  let filteredSkills = skills.filter((skill) => matchesFilter(skill, filter));
  if (filter.kind === 'skills') {
    // Keep the order given in the URL so the most relevant skills come first
    filteredSkills.sort(
      (a, b) => filter.values.indexOf(normalize(a.name)) - filter.values.indexOf(normalize(b.name))
    );
  }
  if (filteredSkills.length === 0) {
    // Unknown param values: fall back to the general skill set
    filteredSkills = skills.filter((skill) => skill.categories.includes('generic'));
  }

  const handleSkillReveal = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const category = (e.target as HTMLElement).getAttribute('data-category');
    if (category) {
      setFilter({ kind: 'categories', values: [normalize(category)] });
    }
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkillReveal(e);
    }
  };

  return (
    <div className="home-container">
      <div className="about-section">
        <div className="header-section">
          <div className="picture-div">
            <img 
              src="/logos/me.jpg" 
              alt={`Adoria Stevens`} 
              className="picture"
            />
          </div>
          <div className="intro">
            <h1 className="greeting">Hi, I&apos;m Adoria</h1>
            <p className="tagline">Full-stack developer · React, Node.js, TypeScript</p>
            <p className="looking-for">Open to junior full-stack developer roles, remote or in Ontario.</p>
            <div className="cta-row">
              <Link href="/projects" className="cta-button cta-primary">View Projects</Link>
              <a
                href="/Adoria-Stevens-Resume.pdf"
                className="cta-button cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>
        </div>
        
        <div
          className="bio-paragraph"
          onClick={handleSkillReveal}
          onKeyDown={handleSkillKeyDown}
        >
          <p>
            I&apos;m a full-stack developer with 18 months of professional experience on two remote
            development teams. At Hero Technical Solutions, I build custom{' '}
            <span className="hidden-skill" role="button" tabIndex={0} data-category="webdev">web technologies</span> for clients:
            JavaScript widgets and REST API integrations inside Zoho CRM, plus workflow automation.
            I also manage the Support Desk, triaging client tickets and making sure every client
            hears back on time.
          </p>
          <p>
            My capstone project, AudioSift, analyzes uploaded songs for BPM, key, genre and mood,
            with a PostgreSQL <span className="hidden-skill" role="button" tabIndex={0} data-category="db">data</span> layer and a Redis job queue
            doing the heavy lifting.
          </p>
          <p>
            My journey started with a <span className="hidden-skill" role="button" tabIndex={0} data-category="generic">general</span> curiosity
            about <span className="hidden-skill" role="button" tabIndex={0} data-category="OOP">object-oriented programming</span>. Whether I&apos;m
            crafting <span className="hidden-skill" role="button" tabIndex={0} data-category="ui/ux">intuitive user interfaces</span>, wiring up
            an <span className="hidden-skill" role="button" tabIndex={0} data-category="iot">IoT</span> device or diving
            into <span className="hidden-skill" role="button" tabIndex={0} data-category="ai">machine learning challenges</span>, I&apos;m driven by
            the potential to create meaningful and uniquely interesting digital experiences.
          </p>
          <p>
            I bring years of experience working on <span className="hidden-skill" role="button" tabIndex={0} data-category="team">teams</span> and
            with a wide variety of people, along with
            the <span className="hidden-skill" role="button" tabIndex={0} data-category="transferrable">people skills</span> that come with it.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <ul className="skills-grid" aria-label="Skills">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}