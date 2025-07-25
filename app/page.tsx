"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SplineScene from "@/components/SplineScene";

export default function Portfolio() {
  const [rotatingSvgs, setRotatingSvgs] = useState<Set<string>>(new Set());

  const handleClick = (svgId: string) => {
    setRotatingSvgs((prev) => new Set([...prev, svgId]));

    // Remover solo este SVG específico después de la animación
    setTimeout(() => {
      setRotatingSvgs((prev) => {
        const newSet = new Set(prev);
        newSet.delete(svgId);
        return newSet;
      });
    }, 600);
  };

  const projects = [
    {
      title: "El Mejor Maestro de Chile",
      description:
        "Registration form for the television program 'El Mejor Maestro de Chile'. Developed with WebSocket, SignalR, iframe and Hub for real-time communication. Includes form validation, API integration and responsive design.",
      image: "/projects/mejor-maestro.webp",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "WebSocket",
        "SignalR",
        "Hub",
        "Iframe",
      ],
      github: "disabled",
      demo: "https://qa-mejor-maestro.vercel.app",
    },
    {
      title: "Ticket sales for a school event.",
      description:
        "A Full-Stack ticket sales app, I replicated the design and made it functional and responsive, with form handling, Webpay integration, and PDF ticket downloads.",
      image: "/projects/colegio-verbo-divino.webp",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Webpay",
        "React Hook Form",
      ],
      github: "disabled",
      demo: "https://cvd-comida-ex-alumnos-bsik.vercel.app/compra-tu-preventa/preventa",
    },
    {
      title: "Ticket sales for Aumusement Kids Park.",
      description:
        "A Full-Stack ticket sales app, I improved the original website, featuring a renewed design, modern animations, responsive, and faster performance, includes form handling, Webpay integration, and PDF ticket downloads.",
      image: "/projects/mampato.webp",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Axios",
        "Webpay",
        "React Hook Form",
      ],
      github: "disabled",
      demo: "https://mampato-tickets.vercel.app",
    },
    {
      title: "TECK",
      description:
        "Registration form for a mining industry party event. Features modern animations, form validation, and ticket download functionality. Built with responsive design.",
      image: "/projects/teck.webp",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Hook Form",
      ],
      github: "disabled",
      demo: "https://teck-app-eta.vercel.app",
    },
    {
      title: "Bazar Online",
      description:
        "Full-stack e-commerce application built with the MERN stack. The project features have a clean and responsive design, allowing users to browse products, add them to a cart. Includes user authentication, and full CRUD functionality.",
      image: "/projects/bazar-online.webp",
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "Material UI",
        "React Slick",
      ],
      github: "https://github.com/hetsiro/auction-market",
      demo: "https://auction-market-three.vercel.app/login",
    },
    {
      title: "Bazar Online API",
      description:
        "Backend API built with Node.js and Express. Features include RESTful routes, controllers for cart, users, and products management, MongoDB models with Mongoose, and JWT middleware for authentication and authorization.",
      image: "/projects/bazar-online-API.webp",
      technologies: ["MongoDB", "Express.js", "Node.js", "Render"],
      github: "https://github.com/hetsiro/auction-market-api",
      demo: "https://auction-market-three.vercel.app/login",
    },
  ];

  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Referencias para los elementos DOM
  const lightRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observerRef.current?.observe(section));

    // Evento para mover la luz
    const moveLight = (e: MouseEvent) => {
      if (lightRef.current) {
        lightRef.current.style.left = `${e.clientX}px`;
        lightRef.current.style.top = `${e.clientY}px`;
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", moveLight as any);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", moveLight as any);
      }
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900">
      <div ref={lightRef} className="fixed inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 bg-grid" />

      {/* Todo el contenido con z-index positivo */}
      <div className="relative z-10">
        {/* Hero/About Section */}
        <section className="container mx-auto px-4 pt-24">
          <div
            data-animate
            id="hero"
            className={`transition-all duration-1000 ${
              visibleSections.has("hero")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-gray-900/80 to-gray-700/100 hover:scale-105 transition-all duration-500 rounded-2xl p-8">
              <div className="mb-8">
                <Image
                  src="/profile.webp"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6 hover:scale-110 hover:brightness-110 hover:-rotate-3 transition-all duration-500 cursor-pointer"
                />
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Cristóbal Fuentealba
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6">
                  Full Stack Developer
                </p>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
                I'm a passionate Full-Stack developer with 2+ years of
                experience creating modern web applications. I specialize in
                React, Next.js, and Node.js, with a focus on building scalable
                and user-friendly solutions. I love turning complex problems
                into simple, with amazing designs.
              </p>

              {/* Technologies Section */}
              <div>
                <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
                  {/* Next.js */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-white transition-all cursor-pointer ${
                      rotatingSvgs.has("Next.js") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 256 256"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                    fill="currentColor"
                    onClick={() => handleClick("Next.js")}
                  >
                    <g>
                      {" "}
                      <path
                        d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                        fill="currentColor"
                      >
                        {" "}
                      </path>{" "}
                    </g>
                  </svg>

                  {/* React */}

                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-blue-400 transition-all cursor-pointer ${
                      rotatingSvgs.has("React") ? "rotate-360" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    version="1.1"
                    onClick={() => handleClick("React")}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>react</title>{" "}
                      <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>{" "}
                    </g>
                  </svg>

                  {/* TypeScript */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-blue-500 transition-all cursor-pointer ${
                      rotatingSvgs.has("TypeScript") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => handleClick("TypeScript")}
                  >
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                  </svg>

                  {/* TailwindCSS */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-cyan-400 transition-all cursor-pointer ${
                      rotatingSvgs.has("TailwindCSS") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => handleClick("TailwindCSS")}
                  >
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                  </svg>

                  {/* MongoDB */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-green-500 transition-all cursor-pointer ${
                      rotatingSvgs.has("MongoDB") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => handleClick("MongoDB")}
                  >
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>

                  {/* Node.js */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-green-400 transition-all cursor-pointer ${
                      rotatingSvgs.has("Node.js") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => handleClick("Node.js")}
                  >
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                  </svg>

                  {/* Express */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-green-400 transition-all cursor-pointer ${
                      rotatingSvgs.has("Express") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 128 128"
                    fill="currentColor"
                    onClick={() => handleClick("Express")}
                  >
                    <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
                  </svg>

                  {/* GitHub */}
                  <svg
                    className={`w-12 h-12 text-gray-400 hover:text-purple-400 transition-all cursor-pointer ${
                      rotatingSvgs.has("GitHub") ? "rotate-360" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => handleClick("GitHub")}
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 pt-16">
          <div
            data-animate
            id="projects"
            className={`transition-all duration-1000 delay-200 ${
              visibleSections.has("projects")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-300">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <CardHeader className="p-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-2 text-gray-100">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mb-4 line-clamp-5 text-justify">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent ${
                            project.github === "disabled"
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.github === "disabled" ? (
                            <a>
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          ) : (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div
            data-animate
            id="contact-content"
            className={`transition-all duration-1000 delay-300 ${
              visibleSections.has("contact-content")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-2xl mx-auto text-center bg-gray-900/85 hover:scale-105 transition-all rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-400">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out if you'd like to collaborate!
              </p>
              <SplineScene sceneUrl="https://prod.spline.design/aYwAg-2udgaEgxd6/scene.splinecode" className="invisible md:visible -my-20 clip-polygon" />
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
                onClick={() => {
                  const email = "fhcristobal@hotmail.com";
                  const subject = "Portfolio Contact";
                  const body = "Hi Cristóbal, I'd like to discuss a project with you.";
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.open(gmailUrl, "_blank");
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900/95 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 Cristóbal Fuentealba. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gray-100"
                  asChild
                >
                  <a
                    href="https://github.com/hetsiro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gray-100"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/cristobal-fuentealba-herrera-698404338/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
