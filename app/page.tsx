'use client';
import Image from "next/image";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SkillCard from './components/SkillCard'

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
      id: 1, 
      name: 'HTML', 
      categories: ["generic", "ui/ux", "webdev"],
      logo: 'logos/html-5-svgrepo-com.svg'
    },
    { 
      id: 2, 
      name: 'JavaScript', 
      categories: ["generic", "OOP", "webdev"],
      logo: "logos/javascript-svgrepo-com.svg"
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

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {categoryFilter 
          ? `${categoryFilter} Skills` 
          : 'My Skills'
        }
      </h1>

      <div className="skills-category-links mb-6">
        {categories.map((category) => (
          <a 
            key={category} 
            href={`/?category=${category}`} 
            className="category-link"
          >
            {category}
          </a>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </main>
  );
}
