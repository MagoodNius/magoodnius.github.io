"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleItem = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const projects = [
    {
      id: "project1",
      title: "Création d'un jeu de Pendu en C (2021)",
      description:
        "Développement d'un jeu de pendu en C, respectant un cahier des charges précis. Élaboration de bibliothèques de mots et implémentation d'une logique de jeu intuitive.",
      img: "/img/pendu.jpg",
      skills: "Programmation en C, Gestion de projet, Présentation orale",
    },
    {
      id: "project2",
      title: "Reconnaissance de caractères en Matlab (2023)",
      description:
        "Conception d'un programme pour la reconnaissance de caractères en utilisant Matlab, avec des étapes de tests et de validation.",
      img: "/img/matlab.jpg",
      skills: "Traitement d'images, Matlab, Analyse de données",
    },
    {
      id: "project3",
      title: "Développement d'une Application Web (2022)",
      description:
        "Création d'une application web avec gestion front-end et back-end, intégrant des appels API pour une expérience utilisateur optimale.",
      img: "/img/webapp.jpg",
      skills: "Développement Web, API, Gestion de projet",
    },
  ];

  const skills = [
    "Python, C, Java, JavaScript, Matlab, SQL",
    "React, Next.js, RSLogix 500, HTML, CSS, Linux, R",
    "Office Suite, SolidWorks, Sweet Home 3D",
    "Gestion de projet, Méthodologie agile, Analyse de données",
  ];

  const languages = [
    { name: "Français", level: 100 },
    { name: "Anglais", level: 90 },
    { name: "Bulgare", level: 100 },
    { name: "Allemand", level: 25 },
  ];

  const experiences = [
    {
      id: "exp1",
      title: "Stage - Schneider Electric (09/2024)",
      description:
        "Support au service client pour les professionnels, gestion des cas techniques et répartition des demandes vers les services adéquats.",
    },
    {
      id: "exp2",
      title: "Runner & Barman - Le NordMarais (06/2022 - 03/2024)",
      description:
        "Travail en équipe pour la satisfaction des clients, rigueur et adaptabilité en tant que barman et runner.",
    },
    {
      id: "exp3",
      title: "Auto-entrepreneur (07/2024)",
      description:
        "Prestations de services aux entreprises : ventes, hôtessariat, barman.",
    },
    {
      id: "exp4",
      title: "Volontaire - UNICEF (2021)",
      description:
        "Animation de sessions de sensibilisation pour les enfants, création d'activités et enseignement des droits des enfants.",
    },
  ];

  return (
    <div className="h-screen bg-gray-900 text-white p-4">
      {/* Bannière en haut de la page */}
      <div className="bg-red-600 text-white py-2 px-4 flex items-center justify-center mb-4 rounded shadow-lg">
        <FaExclamationTriangle className="mr-2" />
        <span>Travail en cours / Work in progress</span>
      </div>

      <div className="flex">
        {/* Colonne gauche */}
        <div className="w-1/3 p-6 bg-gray-800 rounded-lg shadow-lg sticky top-4 h-max">
          <div className="flex flex-col items-center">
            <Image
              src="/img/simeon_tete.jpg"
              alt="Siméon Evtimov"
              width={150}
              height={150}
              className="rounded-full shadow-lg object-cover mb-4"
            />
            <h1 className="text-3xl font-bold">Siméon Evtimov</h1>
            <p className="text-gray-400 mb-4">Élève ingénieur</p>

            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2 text-sky-500" />
                <span>evtimov.simeon@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaPhone className="mr-2 text-sky-500" />
                <span>+33 6 58 27 17 68</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-sky-500" />
                <span>Villejuif - 94800</span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="w-2/3 pl-6 space-y-6 overflow-auto">
          {/* Section Projets */}
          <div className="bg-gray-800 p-4 rounded">
            <button
              className="py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-400 transition duration-300 w-full text-left"
              onClick={() => toggleSection("projects")}
            >
              Projets
            </button>
            {expandedSection === "projects" && (
              <div className="mt-4 space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">{project.title}</p>
                      <button
                        className="text-sky-500 hover:text-sky-400 transition duration-300"
                        onClick={() => toggleItem(project.id)}
                      >
                        {expandedItems[project.id] ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>
                    {expandedItems[project.id] && (
                      <div className="mt-2 space-y-2">
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-gray-400">
                          <strong>Compétences clés :</strong> {project.skills}
                        </p>
                        <Image
                          src={project.img}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="rounded shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section Compétences */}
          <div className="bg-gray-800 p-4 rounded">
            <button
              className="py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-400 transition duration-300 w-full text-left"
              onClick={() => toggleSection("skills")}
            >
              Compétences
            </button>
            {expandedSection === "skills" && (
              <div className="mt-4 space-y-2 text-gray-300">
                <ul className="list-disc pl-5">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section Langues */}
          <div className="bg-gray-800 p-4 rounded">
            <button
              className="py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-400 transition duration-300 w-full text-left"
              onClick={() => toggleSection("languages")}
            >
              Langues
            </button>
            {expandedSection === "languages" && (
              <div className="mt-4 space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">{language.name}</span>
                      <span className="text-gray-400">{language.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-sky-500 h-2.5 rounded-full"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section Expériences */}
          <div className="bg-gray-800 p-4 rounded">
            <button
              className="py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-400 transition duration-300 w-full text-left"
              onClick={() => toggleSection("experiences")}
            >
              Expériences professionnelles et associatives
            </button>
            {expandedSection === "experiences" && (
              <div className="mt-4 space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">{exp.title}</p>
                      <button
                        className="text-sky-500 hover:text-sky-400 transition duration-300"
                        onClick={() => toggleItem(exp.id)}
                      >
                        {expandedItems[exp.id] ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>
                    {expandedItems[exp.id] && (
                      <div className="mt-2 text-gray-300">{exp.description}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
