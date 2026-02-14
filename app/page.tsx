'use client';
import Image from "next/image";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SkillCard from './components/SkillCard'
import { Suspense } from 'react';

export default function Home() {
  //variable to set skills view - depending on which skill is selected in about me paragraph, different skills display.
  //In v2, skills will drop on and off the screen in a cool animation
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

   const [activeCategory, setActiveCategory] = useState<string>(
    categoryFilter || 'generic'
  );

  const skills = [
    { 
      id: 2, 
      name: 'JavaScript', 
      categories: ["generic", "OOP", "webdev"],
      logo: "logos/javascript-svgrepo-com.svg"
    },
    {
      id:29,
      name: 'TypeScript',
      categories: ["generic", "OOP", "webdev"],
      logo: "logos/typescript-icon-svgrepo-com.svg"
    },
    { 
      id: 1, 
      name: 'HTML', 
      categories: ["generic", "ui/ux", "webdev"],
      logo: 'logos/html-5-svgrepo-com.svg'
    },
    { 
      id: 3, 
      name: 'CSS', 
      categories: ["generic", "ui/ux", "webdev"],
      logo: "logos/css-3-svgrepo-com.svg"
    },
    { 
      id: 4, 
      name: 'React', 
      categories: ["generic", "webdev"],
      logo: "logos/react-svgrepo-com.svg"
    },
    { 
      id: 5, 
      name: 'Next.js', 
      categories: ["generic", "webdev"],
      logo: "logos/nextjs-fill-svgrepo-com.svg"
    },
    { 
      id: 6, 
      name: 'git', 
      categories: ["generic", "webdev", ],
      logo: "logos/git-svgrepo-com.svg"
    },
    { 
      id: 7, 
      name: 'node.js', 
      categories: ["generic", "webdev"],
      logo: "logos/nodejs-icon-svgrepo-com.svg"
    },
    { 
      id: 8, 
      name: 'Python', 
      categories: ["generic", "OOP", "webdev"],
      logo: "logos/python-svgrepo-com.svg"
    },
    { 
      id: 9, 
      name: 'MySQL', 
      categories: ["generic", "db"],
      logo: "logos/mysql-logo-svgrepo-com.svg"
    },
    { 
      id: 10, 
      name: 'PostgreSQL', 
      categories: ["generic", "db"],
      logo: "logos/postgresql-svgrepo-com.svg"
    },
    { 
      id: 11, 
      name: 'Bootstrap Studio', 
      categories: ["ui/ux", "webdev"],
      logo: "logos/bootstrap-svgrepo-com.svg"
    },
    { 
      id: 12, 
      name: 'Rest APIs', 
      categories: ["webdev"],
      logo: "logos/rest-api-svgrepo-com.svg"
    },
    { 
      id: 13, 
      name: 'Machine Learning', 
      categories: ["ai"],
      logo: "logos/machine-learning-model-svgrepo-com.svg"
    },
    { 
      id: 14, 
      name: 'Prompt Engineering', 
      categories: ["ai"],
      logo: "logos/ai-svgrepo-com.svg"
    },
    { 
      id: 15, 
      name: 'OpenAI API', 
      categories: ["ai"],
      logo: "logos/openai-svgrepo-com.svg"
    },
    { 
      id: 16, 
      name: 'YOLO Classification', 
      categories: ["ai"],
      logo: "logos/classifier-language-svgrepo-com.svg"
    },
    { 
      id: 17, 
      name: 'Svelte', 
      categories: ["webdev"],
      logo: "logos/svelte-icon-svgrepo-com.svg"
    },
    { 
      id: 18, 
      name: 'Clickup', 
      categories: ["team"],
      logo: "logos/clickup-svgrepo-com.svg"
    },
    { 
      id: 19, 
      name: 'Slack', 
      categories: ["team"],
      logo: "logos/slack-svgrepo-com.svg"
    },
    { 
      id: 20, 
      name: 'Java', 
      categories: ["OOP"],
      logo: "logos/java-svgrepo-com.svg"
    },
    { 
      id: 21, 
      name: 'C#', 
      categories: ["OOP"],
      logo: "logos/c-sharp-svgrepo-com.svg"
    },
    { 
      id: 22, 
      name: 'IOT Programming', 
      categories: ["iot"],
      logo: "logos/iot-core-svgrepo-com.svg"
    },
    { 
      id: 23, 
      name: 'Arduino Framework', 
      categories: ["iot"],
      logo: "logos/arduino-svgrepo-com.svg"
    },
    { 
      id: 24, 
      name: 'Teamwork', 
      categories: ["transferrable"],
      logo: "logos/teamwork-svgrepo-com.svg"
    },
    { 
      id: 25, 
      name: 'Customer Service', 
      categories: ["transferrable"],
      logo: "logos/customer-service-support-svgrepo-com.svg"
    },
    { 
      id: 26, 
      name: 'Customer Relationship Management', 
      categories: ["transferrable"],
      logo: "logos/zoho-svgrepo-com.svg"
    },
    { 
      id: 27, 
      name: 'Time Management', 
      categories: ["transferrable"],
      logo: "logos/time-svgrepo-com.svg"
    },
    { id: 28, 
      name: 'Figma', 
      categories: ["ui/ux"], 
      logo: "logos/figma-svgrepo-com.svg" 
    },
  ];

  const categories = Array.from(new Set(
    skills.flatMap(skill => skill.categories)
  ));

  const filteredSkills = skills.filter(skill => 
    skill.categories.includes(activeCategory)
  );

   const BioParagraph = () => {
    return (
      <p 
        className="bio-paragraph" 
        onClick={handleSkillReveal} // Add this line
      >
        As a developer, I've always been fascinated by the power of <span className="hidden-skill" data-category="webdev">web technologies </span> 
        that transform complex ideas into elegant solutions. My journey started with a <span className="hidden-skill" data-category="generic">general</span> curiosity about <span className="hidden-skill" data-category="OOP">object-oriented programming</span>, 
        which led me to explore various languages and frameworks. Whether I'm crafting <span className="hidden-skill" data-category="ui/ux">intuitive user interfaces,</span> wiring up an <span className="hidden-skill" data-category="iot">IoT</span> device, 
        figuring out the most efficient way to store <span className="hidden-skill" data-category="db">data</span>,
        or diving into <span className="hidden-skill" data-category="ai">machine learning challenges</span>, 
        I'm driven by the potential to create meaningful and uniquely interesting digital experiences.

        <br></br><br></br>
        I carry with me years of experience working on <span className="hidden-skill" data-category="team">teams</span>, and with wide varieties of people. 
      </p>
    );
  };

  const handleSkillReveal = (e: React.MouseEvent<HTMLSpanElement>) => {
    const category = (e.target as HTMLSpanElement).getAttribute('data-category');
    if (category) {
      setActiveCategory(category);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="home-container">
      <div className="about-section">
        <div className="header-section">
          <div className="picture-div">
            <img 
              src={'logos/me.jpg'} 
              alt={`Adoria Stevens`} 
              className="picture"
            />
          </div>
          <h1 className="greeting">Hi, I'm Adoria</h1>
        </div>
        
        <BioParagraph />
      </div>

      <div className="skills-section">
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
    </Suspense>
  );
}

export const metadata = {
  metadataBase: new URL('https://adoria-stevens-portfolio.onrender.com'),
}
