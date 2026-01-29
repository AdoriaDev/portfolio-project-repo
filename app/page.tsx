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
      logo: '/logos/HTML5_logo_and_wordmark.svg.png'
    },
    { 
      id: 2, 
      name: 'JavaScript', 
      categories: ["generic", "OOP", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 3, 
      name: 'CSS', 
      categories: ["generic", "ui/ux", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 4, 
      name: 'React', 
      categories: ["generic", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 5, 
      name: 'Next.js', 
      categories: ["generic", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 6, 
      name: 'git', 
      categories: ["generic", "webdev", ],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 7, 
      name: 'node.js', 
      categories: ["generic", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 8, 
      name: 'Python', 
      categories: ["generic", "OOP", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 9, 
      name: 'MySQL', 
      categories: ["generic", "db"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 10, 
      name: 'PostgreSQL', 
      categories: ["generic", "db"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 11, 
      name: 'Bootstrap Studio', 
      categories: ["ui/ux", "webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 12, 
      name: 'Rest APIs', 
      categories: ["webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 13, 
      name: 'Machine Learning', 
      categories: ["ai"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 14, 
      name: 'Prompt Engineering', 
      categories: ["ai"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 15, 
      name: 'OpenAI API', 
      categories: ["ai"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 16, 
      name: 'YOLO Classification', 
      categories: ["ai"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 17, 
      name: 'Svelte', 
      categories: ["webdev"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 18, 
      name: 'Clickup', 
      categories: ["team"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 19, 
      name: 'Slack', 
      categories: ["team"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 20, 
      name: 'Java', 
      categories: ["OOP"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 21, 
      name: 'C#', 
      categories: ["OOP"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 22, 
      name: 'IOT Programming', 
      categories: ["iot"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 23, 
      name: 'Arduino Framework', 
      categories: ["iot"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 24, 
      name: 'Teamwork', 
      categories: ["transferrable"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 25, 
      name: 'Customer Service', 
      categories: ["transferrable"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 26, 
      name: 'Customer Relationship Management (CRM)', 
      categories: ["transferrable"],
      logo: "https//:www.logo.com" //TODO
    },
    { 
      id: 27, 
      name: 'Time Management', 
      categories: ["transferrable"],
      logo: "https//:www.logo.com" //TODO
    },
    { id: 28, 
      name: 'Figma', 
      categories: ["ui/ux"], 
      logo: "https//:www.logo.com" 
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
