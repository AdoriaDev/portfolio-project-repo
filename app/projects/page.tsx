'use client';
import Image from "next/image";
import { useState } from 'react';
import "./Projects.css";
import ProjectCard from '../components/ProjectCard'

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "AudioSift",
      categories: ["generic", "ui/ux", "webdev", "full-stack"],
      description:"This is my biggest project to date, as my Capstone Project for college. This React.js and node.js web app allows you to create and manage accounts, verified by email, and 'sift' songs to get the metadata, bpm, key signature, waveform, genre, and mood. You can browse your uploads on your home page, create song groups, browse and download other people's sifts, and compare and find similar songs based on their data.",
      logo: 'logos/audiosift.png',
      link: "https://audiosift-frontend.onrender.com/"
    },
    {
      id: 2,
      name: "D&D Character Manager - COMING SOON",
      categories: ["generic", "ui/ux", "webdev", "full-stack"],
      description:"",
      logo: 'logos/coming-soon.jpg',
      link: "https://youtu.be/5I4SUnfZGGQ"
    },
    {
      id: 3,
      name: "My College Project Demonstrations",
      categories: ["generic"],
      description:"",
      logo: 'logos/myYoutubepng.png',
      link: "https://youtu.be/5I4SUnfZGGQ"
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
