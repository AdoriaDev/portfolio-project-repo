'use client';
import "./Projects.css";
import ProjectCard from '../components/ProjectCard'

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "AudioSift",
      categories: ["generic", "ui/ux", "webdev", "full-stack"],
      description:"This is my biggest project to date, as my Capstone Project for college. This React.js and node.js web app allows you to create and manage accounts, verified by email, and 'sift' songs to get the metadata, bpm, key signature, waveform, genre, and mood. You can browse your uploads on your home page, create song groups, browse and download other people's sifts, and compare and find similar songs based on their data.",
      technologies:["ReactJS", "NodeJS", "TypeScript", "HTML", "CSS", "PostgreSQL"],
      logo: 'logos/audiosift.png',
      link: "https://audiosift-frontend.onrender.com/"
    },
    {
      id: 2,
      name: "D&D Character Manager - COMING SOON",
      categories: ["generic", "ui/ux", "webdev", "full-stack"],
      description:"This was a fun project from the Emerging Web Technologies course in Semester 6 at Mohawk - while the base app is done to the assignment's standards, I plan on expanding and improving the project and hosting it for use in real D&D Campaigns",
      technologies:["NextJS", "HTML", "CSS" ],
      logo: 'logos/coming-soon.jpg',
      link: "https://youtu.be/5I4SUnfZGGQ"
    },
    {
      id: 3,
      name: "My College Project Demonstrations",
      categories: ["generic"],
      description:"",
      technologies:["NextJS", "ReactJS", "NodeJS", "TypeScript", "Arduino", "Python", "CSS", "HTML"],
      logo: 'logos/myYoutubepng.png',
      link: "https://www.youtube.com/playlist?list=PLDsWV9xlU5x0rw7aiQ2GsnQK6-foRv5v3"
    },
  ]

  return (
    <div>
      <h1 className="page-title">Projects</h1>
      <div className="projects-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
