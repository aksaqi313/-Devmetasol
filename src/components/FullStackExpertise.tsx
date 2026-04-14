// FullStackExpertise.tsx
import { useState } from "react";
// Import technology images
import ReactImg from "../assets/React.webp";
import AngularjsImg from "../assets/Angularjs.webp";
import VueImg from "../assets/Vue.webp";
import NextjsImg from "../assets/nextjs.webp";
import jQueryImg from "../assets/jQuery.webp";
import MicrosoftNetImg from "../assets/Microsoft.net.webp";
import NodejsImg from "../assets/nodejs.webp";
import NestjsImg from "../assets/Nestjs.webp";
import LaravelImg from "../assets/Larvel.webp";
import RailsImg from "../assets/Rails.webp";
import FlutterImg from "../assets/flutter.webp";

// Technology Icons Component
const TechnologyIcon = ({
  name,
}: {
  name: string;
}) => {
  const getIcon = () => {
    switch (name) {
      case "React":
        return (
          <img
            src={ReactImg}
            alt="React"
            className="w-full h-full object-contain"
          />
        );
      case "AngularJS":
        return (
          <img
            src={AngularjsImg}
            alt="AngularJS"
            className="w-full h-full object-contain"
          />
        );
      case "Vue.js":
        return (
          <img
            src={VueImg}
            alt="Vue.js"
            className="w-full h-full object-contain"
          />
        );
      case "Next.js":
        return (
          <img
            src={NextjsImg}
            alt="Next.js"
            className="w-full h-full object-contain"
          />
        );
      case "jQuery":
        return (
          <img
            src={jQueryImg}
            alt="jQuery"
            className="w-full h-full object-contain"
          />
        );
      case "Microsoft .NET":
        return (
          <img
            src={MicrosoftNetImg}
            alt="Microsoft .NET"
            className="w-full h-full object-contain"
          />
        );
      case "Node.js":
        return (
          <img
            src={NodejsImg}
            alt="Node.js"
            className="w-full h-full object-contain"
          />
        );
      case "NestJS":
        return (
          <img
            src={NestjsImg}
            alt="NestJS"
            className="w-full h-full object-contain"
          />
        );
      case "Spring":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#6DB33F" rx="2" />
            <path
              fill="white"
              d="M12 4L8 8h8l-4-4zm0 16l4-4H8l4 4zm8-8l-4-4v8l4-4zM4 12l4 4V8L4 12z"
            />
          </svg>
        );
      case "Laravel":
        return (
          <img
            src={LaravelImg}
            alt="Laravel"
            className="w-full h-full object-contain"
          />
        );
      case "Rails":
        return (
          <img
            src={RailsImg}
            alt="Rails"
            className="w-full h-full object-contain"
          />
        );
      case "Flutter":
        return (
          <img
            src={FlutterImg}
            alt="Flutter"
            className="w-full h-full object-contain"
          />
        );
      case "Xamarin":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#3498DB" rx="2" />
            <text
              x="12"
              y="17"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              X
            </text>
          </svg>
        );
      case "React Native":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
            <ellipse
              cx="12"
              cy="12"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="#61DAFB"
              strokeWidth="1.2"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="#61DAFB"
              strokeWidth="1.2"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="#61DAFB"
              strokeWidth="1.2"
              transform="rotate(-60 12 12)"
            />
          </svg>
        );
      case ".NET MAUI":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#512BD4" />
            <circle cx="12" cy="12" r="3" fill="white" />
          </svg>
        );
      // Programming Languages
      case "JavaScript":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#F7DF1E" rx="2" />
            <text
              x="12"
              y="16"
              fill="#000"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              JS
            </text>
          </svg>
        );
      case "TypeScript":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#3178C6" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              TS
            </text>
          </svg>
        );
      case "Python":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#3776AB" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Py
            </text>
          </svg>
        );
      case "Java":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#ED8B00" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              Java
            </text>
          </svg>
        );
      case "C#":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#239120" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              C#
            </text>
          </svg>
        );
      case "PHP":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#777BB4" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              PHP
            </text>
          </svg>
        );
      case "Ruby":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#CC342D" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              Rb
            </text>
          </svg>
        );
      case "Go":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#00ADD8" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              Go
            </text>
          </svg>
        );
      case "Swift":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#FA7343" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Swift
            </text>
          </svg>
        );
      case "Kotlin":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#7F52FF" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Kt
            </text>
          </svg>
        );
      case "Rust":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#000" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="9"
              fontWeight="bold"
              textAnchor="middle"
            >
              Rs
            </text>
          </svg>
        );
      case "C++":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#00599C" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              C++
            </text>
          </svg>
        );
      // Platforms
      case "AWS":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#FF9900" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              AWS
            </text>
          </svg>
        );
      case "Azure":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#0078D4" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Azure
            </text>
          </svg>
        );
      case "Google Cloud":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#4285F4" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              GCP
            </text>
          </svg>
        );
      case "Docker":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#2496ED" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Docker
            </text>
          </svg>
        );
      case "Kubernetes":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#326CE5" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              K8s
            </text>
          </svg>
        );
      case "Heroku":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#430098" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Heroku
            </text>
          </svg>
        );
      case "Vercel":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#000" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Vercel
            </text>
          </svg>
        );
      case "Netlify":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#00C7B7" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Netlify
            </text>
          </svg>
        );
      case "Firebase":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#FFCA28" rx="2" />
            <text
              x="12"
              y="16"
              fill="#000"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              Firebase
            </text>
          </svg>
        );
      case "DigitalOcean":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#0080FF" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              DO
            </text>
          </svg>
        );
      // Databases
      case "MySQL":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#4479A1" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              MySQL
            </text>
          </svg>
        );
      case "PostgreSQL":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#336791" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              PostgreSQL
            </text>
          </svg>
        );
      case "MongoDB":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#47A248" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              MongoDB
            </text>
          </svg>
        );
      case "Redis":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#DC382D" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Redis
            </text>
          </svg>
        );
      case "Oracle":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#F80000" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              Oracle
            </text>
          </svg>
        );
      case "SQL Server":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#CC2927" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              SQL
            </text>
          </svg>
        );
      case "SQLite":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#003B57" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
            >
              SQLite
            </text>
          </svg>
        );
      case "Cassandra":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#1287B1" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              Cassandra
            </text>
          </svg>
        );
      case "Elasticsearch":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#005571" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="6"
              fontWeight="bold"
              textAnchor="middle"
            >
              ES
            </text>
          </svg>
        );
      case "DynamoDB":
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" fill="#4053D6" rx="2" />
            <text
              x="12"
              y="16"
              fill="white"
              fontSize="7"
              fontWeight="bold"
              textAnchor="middle"
            >
              DynamoDB
            </text>
          </svg>
        );
      default:
        return (
          <span className="text-white font-bold text-lg sm:text-xl">
            {name.charAt(0)}
          </span>
        );
    }
  };

  return (
    <div
      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16  rounded-lg flex items-center justify-center p-2 shadow-sm`}
    >
      {getIcon()}
    </div>
  );
};

const FullStackExpertise = () => {
  const [activeTab, setActiveTab] = useState("Frame Works");

  const technologies = {
    "Frame Works": [
      { name: "React" },
      { name: "AngularJS" },
      { name: "Vue.js" },
      { name: "Next.js" },
      { name: "jQuery" },
      { name: "Microsoft .NET" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Spring" },
      { name: "Laravel" },
      { name: "Rails", color: "bg-red-600" },
      { name: "Flutter", color: "bg-blue-400" },
      { name: "Xamarin", color: "bg-blue-600" },
      { name: "React Native", color: "bg-cyan-500" },
      { name: ".NET MAUI", color: "bg-purple-600" },
    ],
    "Programming Languages": [
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Python", color: "bg-blue-500" },
      { name: "Java", color: "bg-orange-500" },
      { name: "C#", color: "bg-purple-600" },
      { name: "PHP", color: "bg-indigo-500" },
      { name: "Ruby", color: "bg-red-600" },
      { name: "Go", color: "bg-cyan-500" },
      { name: "Swift", color: "bg-orange-400" },
      { name: "Kotlin", color: "bg-purple-500" },
      { name: "Rust", color: "bg-orange-700" },
      { name: "C++", color: "bg-blue-700" },
    ],
    Platforms: [
      { name: "AWS", color: "bg-orange-500" },
      { name: "Azure", color: "bg-blue-600" },
      { name: "Google Cloud", color: "bg-blue-500" },
      { name: "Docker", color: "bg-blue-400" },
      { name: "Kubernetes", color: "bg-blue-600" },
      { name: "Heroku", color: "bg-purple-500" },
      { name: "Vercel", color: "bg-black" },
      { name: "Netlify", color: "bg-teal-500" },
      { name: "Firebase", color: "bg-orange-500" },
      { name: "DigitalOcean", color: "bg-blue-500" },
    ],
    Database: [
      { name: "MySQL", color: "bg-blue-600" },
      { name: "PostgreSQL", color: "bg-blue-700" },
      { name: "MongoDB", color: "bg-blue-500" },
      { name: "Redis", color: "bg-red-600" },
      { name: "Oracle", color: "bg-red-700" },
      { name: "SQL Server", color: "bg-blue-800" },
      { name: "SQLite", color: "bg-blue-500" },
      { name: "Cassandra", color: "bg-blue-600" },
      { name: "Elasticsearch", color: "bg-yellow-600" },
      { name: "DynamoDB", color: "bg-blue-500" },
    ],
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              <span className="text-blue-500">Technology Stack</span> for
              Enterprise Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 px-4 leading-relaxed">
              KingTechsol leverages industry-leading frameworks, programming
              languages, and platforms to deliver robust, scalable, and secure
              enterprise applications that meet the highest standards of
              performance and reliability.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-4">
            {[
              "Frame Works",
              "Programming Languages",
              "Platforms",
              "Database",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 font-bold sm:px-4 text-3xl md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-slate-800 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
            {technologies[activeTab as keyof typeof technologies].map(
              (tech, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px]"
                >
                  <TechnologyIcon name={tech.name} />
                  <p className="font-bold text-slate-800 text-center">
                    {tech.name}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStackExpertise;
