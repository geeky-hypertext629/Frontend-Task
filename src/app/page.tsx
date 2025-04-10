"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Heading from "@/components/Header";

// Define content types for each test and their suboptions
type TestOption = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type Test = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  testNumber: number;
  options: TestOption[];
};

type CareerOption = {
  number: number;
  title: string;
};

const ReportPage: FC = () => {
  const [selectedTest, setSelectedTest] = useState("personality");
  const [selectedOption, setSelectedOption] = useState("understanding");

  const careerOptions: CareerOption[] = [
    { number: 1, title: "Engineer" },
    { number: 2, title: "Doctor" },
    { number: 3, title: "Teacher" },
  ];

  const tests: Test[] = [
    {
      id: "personality",
      name: "Personality Explorer",
      testNumber: 1,
      color: "blue",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </svg>
      ),
      options: [
        {
          id: "understanding",
          title: "Understanding Personality Explorer",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Understanding{" "}
                <span className="text-blue-700">Personality Explorer</span>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Introduction</h3>
                <p className="text-gray-700 mb-4">
                  Congratulations on taking the first step for personalized
                  Career Planning & Assessment! We understand the significance
                  of making informed decisions as you navigate your academic
                  journey and future career. We are committed to empowering
                  individuals with the tools and insights needed to confidently
                  navigate the world of careers and education.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-2">
                  To understand your personality Myers-Brig Type Indicator
                  (MBTI) test was used.
                </p>
                <p className="text-gray-700 mb-4">
                  It is a personality explorer psychometric assessment tool that
                  helps individuals understand their preferences, strengths, and
                  areas for growth. Developed by Isabel Briggs Myers and
                  Katharine Cook Briggs, the MBTI categorizes individuals into
                  16 personality types based on four dichotomies. The goal is to
                  gain deeper self-awareness, enhance personal development, and
                  improve interpersonal relationships.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-blue-700 mb-4">
                  THE FOUR DICHOTOMIES
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Extraversion (E)</h4>
                    <p className="text-gray-600 text-sm">
                      Energized by social interactions and external activities
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "70%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Introversion (I)</h4>
                    <p className="text-gray-600 text-sm">
                      Energized by solitary activities and internal reflection
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "30%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Sensing (S)</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "60%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Intuition (N)</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on abstract, conceptual information and future
                      possibilities
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "40%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Thinking (T)</h4>
                    <p className="text-gray-600 text-sm">
                      Makes decisions based on logic, consistency, and objective
                      analysis
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "55%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Feeling (F)</h4>
                    <p className="text-gray-600 text-sm">
                      Makes decisions based on values, harmony, and subjective
                      analysis
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "45%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Judging (J)</h4>
                    <p className="text-gray-600 text-sm">
                      Prefers structured, organized approaches and planning
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "65%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Perceiving (P)</h4>
                    <p className="text-gray-600 text-sm">
                      Prefers flexible, spontaneous approaches and adaptability
                    </p>
                    <div className="mt-3 relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green-500"></div>
                      <div
                        className="absolute h-2 rounded-full bg-red-500 right-0"
                        style={{ width: "35%" }}
                      ></div>
                      <div
                        className="absolute left-0 h-2 rounded-full bg-green-500"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-blue-700 mb-6">
                  Purpose, Applications, and Benefits of MBTI in Career
                  Development
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Self Awareness</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Leadership Development</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Career Alignment</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Career Planning</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Team Building</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Conflict Resolution</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Improved Communication</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">
                      Strength Identification
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Personal Growth</h4>
                    <p className="text-gray-600 text-sm">
                      Focuses on concrete, tangible information and present
                      realities tangible information and present realities
                    </p>
                  </div>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "personality-types",
          title: "Personality Types",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Personality Types
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <div className="bg-blue-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Protector"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Inspector</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      ISTJ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div>
                  <div className="bg-blue-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Protector"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Protector</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      ISFJ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div>
                  <div className="bg-blue-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Artist"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Artist</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      ISFP
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div>
                  <div className="bg-blue-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Consul"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Consul</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      ESFJ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <div className="bg-amber-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Virtuoso"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Virtuoso</h4>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      ISTP
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div>
                  <div className="bg-amber-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Entrepreneur"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Entrepreneur</h4>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      ESTP
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div>
                  <div className="bg-amber-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Entertainer"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Entertainer</h4>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      ESFP
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div>
                  <div className="bg-amber-50 rounded-lg p-6 mb-2 flex justify-center items-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Executive"
                      height={96}
                      width={96}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Executive</h4>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      ESTJ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "your-result",
          title: "Your Result",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Your <span className="text-blue-700">Result</span>
              </h2>

              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8 overflow-x-auto">
                  <button className="px-4 py-2 font-medium text-gray-800 border-b-2 border-blue-600">
                    Personality
                  </button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                    Characteristics
                  </button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                    Strengths/ Weaknesses
                  </button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                    Work Style
                  </button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                    Preferences
                  </button>
                  <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                    Interpersonal Interaction
                  </button>
                </div>
              </div>

              <div className="flex mb-8">
                <div className="flex mb-8">
                  <div className="bg-purple-50 rounded-lg p-6 flex items-center justify-center h-32">
                    <Image
                      src="/architect.png"
                      alt="Architect character"
                      width={120}
                      height={200}
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>

                  <div className=" pl-8">
                    <div className="flex items-center mb-5">
                      <h3 className="text-3xl font-bold text-gray-800">
                        Architect
                      </h3>
                      <div className="mx-4 border-l border-gray-300"></div>
                      <span className="text-xl font-medium text-purple-600">
                        INTJ Personality
                      </span>
                    </div>

                    <div className="flex space-x-3 mb-6">
                      <span className="bg-purple-100 text-purple-700 px-5 py-1.5 rounded-full text-sm font-medium">
                        STRATEGIC
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-5 py-1.5 rounded-full text-sm font-medium">
                        ANALYTICAL
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-5 py-1.5 rounded-full text-sm font-medium">
                        INDEPENDENT
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Congratulations on taking the first step for personalized
                      Career Planning & Assessment! We understand the
                      significance of making informed decisions as you navigate
                      your academic journey and future career. We are committed
                      to empowering individuals with the tools and insights
                      needed to confidently navigate the world of careers and
                      education.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: "interest",
      name: "Interest Explorer",
      testNumber: 2,
      color: "green",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 8l8 6 8-6-8-6zM4 8v8l8 6 8-6V8l-8 6-8-6z" />
        </svg>
      ),
      options: [
        {
          id: "understanding-interest",
          title: "Understanding Interest Explorer",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Understanding{" "}
                <span className="text-green-600">Interest Explorer</span>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Introduction</h3>
                <p className="text-gray-700 mb-4">
                  The Interest Explorer assessment is designed to identify your
                  vocational interests and preferences. Based on John Holland's
                  RIASEC model, this assessment helps you discover which career
                  fields might align with your natural inclinations and
                  passions.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">To Understand</h3>
                <p className="text-gray-700 mb-4">
                  The Holland Codes or RIASEC model is a theory of career and
                  vocational choice based upon personality types. This theory
                  suggests that people tend to seek out work environments that
                  are aligned with their interests, skills, and values.
                  Understanding your Holland Code can help you identify
                  potential career paths that would be most satisfying.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "riasec-model",
          title: "RIASEC Model",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Themes of RIASEC
              </h2>

              <div className="flex justify-center mb-12">
                <div className="relative  flex items-center justify-center">
                  <Image
                    src="/riasec-wheel.png"
                    alt="RIASEC Wheel"
                    // className="w-full h-full object-contain"
                    height={400}
                    width={400}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Purpose and Applications of RIASEC in Career Development
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Career Exploration</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Career Guidance</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Team Building</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Benefits of Understanding Interest Using RIASEC for Career
                Planning
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Alignment with Preferences
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Enhanced Self-Awareness</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Facilitates Goal Setting</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Assess Fit</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Improved Decision-Making</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "interest-result",
          title: "Your Result",
          content: (
            <>
              <div className="mb-8">
                <div className="flex items-center border-b pb-4">
                  <h2 className="text-3xl font-bold">
                    Your <span className="text-green-600">Result</span>
                  </h2>
                  <div className="ml-8 flex">
                    <button className="px-6 py-2 font-medium text-gray-900 border-b-2 border-green-600">
                      PRIMARY INTEREST
                    </button>
                    <button className="px-6 py-2 font-medium text-gray-400">
                      SECONDARY INTEREST
                    </button>
                    <button className="px-6 py-2 font-medium text-gray-400">
                      TERTIARY INTEREST
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex border-b">
                  <button className="px-6 py-3 font-medium text-gray-900 border-b-2 border-green-600">
                    Personality
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-500">
                    Preferences
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-500">
                    Skills and Strengths
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-500">
                    Preferred Work Environment
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-500">
                    Interaction Styles
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-500">
                    Conclusion
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <svg
                    className="w-10 h-10 text-red-500 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M10.5 6l4.5 4.5m0 0l-4.5 4.5m4.5-4.5H3m18 0h-4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6l4.5 4.5m0 0L3 15m4.5-4.5H21m-18 0h4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-3xl font-medium text-red-500">
                    Realistic (R)
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white border border-red-300 text-red-500 px-5 py-2 rounded-full text-sm">
                    Practical and Hands-On
                  </span>
                  <span className="bg-white border border-red-300 text-red-500 px-5 py-2 rounded-full text-sm">
                    Problem-solvers who prefer tangible results
                  </span>
                  <span className="bg-white border border-red-300 text-red-500 px-5 py-2 rounded-full text-sm">
                    Enjoying work with tools and machinery
                  </span>
                  <span className="bg-white border border-red-300 text-red-500 px-5 py-2 rounded-full text-sm">
                    Value efficiency and effectiveness in tasks
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Congratulations on taking the first step for personalized
                  Career Planning & Assessment! We understand the significance
                  of making informed decisions as you navigate your academic
                  journey and future career. We are committed to empowering
                  individuals with the tools and insights needed to confidently
                  navigate the world of careers and education.
                </p>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: "motivators",
      name: "Career Motivators",
      testNumber: 3,
      color: "amber",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm10 0h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM10 13H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm10 0h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1z" />
        </svg>
      ),
      options: [
        {
          id: "understanding-motivators",
          title: "Understanding Career Motivators",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Understanding{" "}
                <span className="text-amber-500">Career Motivators</span>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Introduction</h3>
                <p className="text-gray-700 mb-4">
                  Career motivators are the underlying factors that drive your
                  career choices and job satisfaction. Understanding what truly
                  motivates you in your professional life is essential for
                  making fulfilling career decisions and maintaining long-term
                  career satisfaction.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">
                  The Importance of Career Motivators
                </h3>
                <p className="text-gray-700 mb-4">
                  When your career aligns with your core motivators, you're more
                  likely to feel engaged, satisfied, and successful in your
                  work. Career motivators go beyond simple interests or skills –
                  they tap into deeper values and needs that energize and
                  inspire you professionally.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "motivator-types",
          title: "Motivator Types",
          content: (
            <>
              <h2 className="text-2xl font-bold text-blue-700 mb-8">
                TOP 10 Career Motivators
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-center border border-teal-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Achievement and Results
                    </div>
                  </div>

                  <div className="flex items-center border border-amber-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-amber-700 text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Helping Others
                    </div>
                  </div>

                  <div className="flex items-center border border-teal-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-teal-300 text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Financial Rewards
                    </div>
                  </div>

                  <div className="flex items-center border border-yellow-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-white font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Creativity and Innovation
                    </div>
                  </div>

                  <div className="flex items-center border border-purple-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-500 text-white font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Security and Stability
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-center border border-blue-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-400 text-white font-bold text-xl">
                      6
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Leadership and Influence
                    </div>
                  </div>

                  <div className="flex items-center border border-blue-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-700 text-white font-bold text-xl">
                      7
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Continuous Learning
                    </div>
                  </div>

                  <div className="flex items-center border border-pink-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-pink-400 text-white font-bold text-xl">
                      8
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Independence
                    </div>
                  </div>

                  <div className="flex items-center border border-red-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-red-400 text-white font-bold text-xl">
                      9
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Teamwork and Collaboration
                    </div>
                  </div>

                  <div className="flex items-center border border-orange-200 rounded-full overflow-hidden">
                    <div className="w-16 h-16 flex items-center justify-center bg-orange-400 text-white font-bold text-xl">
                      10
                    </div>
                    <div className="flex-1 px-4 py-3 font-medium">
                      Flexibility and Work-Life Balance
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-6">
                Purpose and Applications of Career Motivators in career
                development include
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Enhanced Job Satisfaction
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Improved Performance and Engagement
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Career Planning and Development
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "motivator-result",
          title: "Your Result",
          content: (
            <>
              <h2 className="text-3xl font-bold mb-8">Your Result</h2>

              <div className="border-b border-gray-300 mb-6">
                <div className="flex">
                  <button className="px-4 py-2 font-medium text-gray-800 border-b-2 border-gray-800 mr-8">
                    Your Scores
                  </button>
                  <button className="px-4 py-2 font-medium text-gray-400">
                    Conclusion
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-blue-700 mr-4">
                    Your Scores
                  </h3>
                  <span className="text-gray-500 mr-4">Low Relevance</span>
                  <span className="text-gray-500 mr-4">Moderate Relevance</span>
                  <span className="text-gray-500">High Relevance</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Achievement and Results */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="font-bold text-lg mr-2">1</span>
                        <h4 className="text-xl font-medium">
                          Achievement and Results
                        </h4>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700 font-medium mr-2">
                          25/30
                        </span>
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                      </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-5">
                      <p className="text-gray-700 mb-6">
                        Prefer tasks that involve physical work and create
                        outcomes. Prefer tasks that involve physical work and
                        create outcomes.Prefer tasks that involve physical work
                        and create outcomes.
                      </p>

                      <div className="mb-4">
                        <h5 className="font-medium mb-1">Pros</h5>
                        <p className="text-gray-700">
                          They are friendly, approachable, & enjoy being around
                          people. They are often seen as the "hosts" of their
                          social circles.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-1">Cons</h5>
                        <p className="text-gray-700">
                          They are friendly, approachable, & enjoy being around
                          people. They are often seen as the "hosts" of their
                          social circles.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Helping Others */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="font-bold text-lg mr-2">2</span>
                        <h4 className="text-xl font-medium">Helping Others</h4>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700 font-medium mr-2">
                          25/30
                        </span>
                        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                      </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-5">
                      <p className="text-gray-700 mb-6">
                        Prefer tasks that involve physical work and create
                        outcomes. Prefer tasks that involve physical work and
                        create outcomes.Prefer tasks that involve physical work
                        and create outcomes.
                      </p>

                      <div className="mb-4">
                        <h5 className="font-medium mb-1">Pros</h5>
                        <p className="text-gray-700">
                          They are friendly, approachable, & enjoy being around
                          people. They are often seen as the "hosts" of their
                          social circles.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-1">Cons</h5>
                        <p className="text-gray-700">
                          They are friendly, approachable, & enjoy being around
                          people. They are often seen as the "hosts" of their
                          social circles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: "emotional",
      name: "Emotional Intelligence",
      testNumber: 4,
      color: "blue",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      options: [
        {
          id: "understanding-eq",
          title: "Understanding Emotional Intelligence",
          content: (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Understanding{" "}
                <span className="text-blue-700">Emotional Intelligence</span>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Introduction</h3>
                <p className="text-gray-700 mb-4">
                  Emotional intelligence (EI) is the ability to understand and
                  manage your own emotions and the emotions of others. It's a
                  crucial skill in both personal and professional life. High
                  emotional intelligence can lead to better relationships,
                  improved decision-making, and overall success.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">
                  The Components of Emotional Intelligence
                </h3>
                <p className="text-gray-700 mb-4">
                  Emotional intelligence consists of four main components:
                  self-awareness, self-regulation, empathy, and social skills.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "eq-components",
          title: "Daniel Goleman Emotional Intelligence Test",
          content: (
            <>
              <h2 className="text-2xl font-bold text-blue-700 mb-8">
                5 Emotional Elements
              </h2>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {/* Self-Awareness */}
                <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-orange-100 to-transparent rounded-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold mb-3">
                      1
                    </div>
                    <h3 className="font-medium text-center">Self-Awareness</h3>
                  </div>
                </div>

                {/* Self-Regulation */}
                <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-blue-100 to-transparent rounded-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold mb-3">
                      2
                    </div>
                    <h3 className="font-medium text-center">Self-Regulation</h3>
                  </div>
                </div>

                {/* Empathy */}
                <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-pink-100 to-transparent rounded-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold mb-3">
                      3
                    </div>
                    <h3 className="font-medium text-center">Empathy</h3>
                  </div>
                </div>

                {/* Social Skills */}
                <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-rose-200 to-transparent rounded-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold mb-3">
                      4
                    </div>
                    <h3 className="font-medium text-center">Social Skills</h3>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-6">
                Applications of the Emotional Intelligence Test in career
                development include
              </h3>

              <p className="text-gray-700 mb-8">
                Congratulations on taking the first step for personalized Career
                Planning & Assessment! We understand the significance of making
                informed decisions as you navigate your academic journey and
                future career. We are committed to empowering individuals with
                the tools and insights needed to confidently navigate the world
                of careers and education.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Enhanced Leadership and Communication Skills
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities Focuses
                    on concrete, tangible information and present realities
                    tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Imporved Decision Making and Problem Solving
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities Focuses
                    on concrete, tangible information and present realities
                    tangible information and present realities
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "eq-result",
          title: "Your Result",
          content: (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Your <span className="text-blue-500">Result</span>
              </h2>

              <div className="mb-6">
                <div className="flex border-b border-gray-300">
                  <button className="px-6 py-3 font-medium text-gray-800 border-b-2 border-blue-500 -mb-px">
                    Your Scores
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-400">
                    Conclusion
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-blue-700 mr-8">
                    Your Scores
                  </h3>
                  <div className="flex items-center space-x-2 mr-6">
                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    <span className="text-gray-500">Strength</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-red-500"></div>
                    <span className="text-gray-500">Needs Attention</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Self Awareness */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 font-bold mr-4">
                          1
                        </div>
                        <h4 className="text-xl font-medium text-orange-400">
                          Self Awareness
                        </h4>
                      </div>
                      <div className="flex items-center bg-orange-400 text-white px-3 py-1 rounded-full">
                        <span className="font-medium mr-2">45/50</span>
                        <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
                      </div>
                    </div>

                    <div className="border border-orange-300 rounded-lg p-5">
                      <p className="text-gray-700 mb-6">
                        Prefer tasks that involve physical work and create
                        outcomes. Prefer tasks that involve physical work and
                        create outcomes.Prefer tasks that involve physical work
                        and create outcomes.
                      </p>

                      <div>
                        <h5 className="font-medium mb-3">Strategies</h5>
                        <ul className="space-y-4">
                          <li className="flex">
                            <span className="text-gray-400 mr-2">•</span>
                            <p className="text-gray-700">
                              They are friendly, approachable, & enjoy being
                              around people. They are often seen as the "hosts"
                              of their social circles.
                            </p>
                          </li>
                          <li className="flex">
                            <span className="text-gray-400 mr-2">•</span>
                            <p className="text-gray-700">
                              They are friendly, approachable, & enjoy being
                              around people. They are often seen as the "hosts"
                              of their social circles.
                            </p>
                          </li>
                          <li className="flex">
                            <span className="text-gray-400 mr-2">•</span>
                            <p className="text-gray-700">
                              They are friendly, approachable, & enjoy being
                              around people. They are often seen as the "hosts"
                              of their social circles.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Self-Regulation */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400 font-bold mr-4">
                          2
                        </div>
                        <h4 className="text-xl font-medium text-blue-400">
                          Self-Regulation
                        </h4>
                      </div>
                      <div className="flex items-center bg-blue-400 text-white px-3 py-1 rounded-full">
                        <span className="font-medium mr-2">45/50</span>
                        <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
                      </div>
                    </div>

                    <div className="border border-blue-300 rounded-lg p-5">
                      <p className="text-gray-700 mb-6">
                        Prefer tasks that involve physical work and create
                        outcomes. Prefer tasks that involve physical work and
                        create outcomes.Prefer tasks that involve physical work
                        and create outcomes.
                      </p>

                      <div>
                        <h5 className="font-medium mb-3">Strategies</h5>
                        <ul className="space-y-4">
                          <li className="flex">
                            <span className="text-gray-400 mr-2">•</span>
                            <p className="text-gray-700">
                              They are friendly, approachable, & enjoy being
                              around people. They are often seen as the "hosts"
                              of their social circles.
                            </p>
                          </li>
                          <li className="flex">
                            <span className="text-gray-400 mr-2">•</span>
                            <p className="text-gray-700">
                              They are friendly, approachable, & enjoy being
                              around people. They are often seen as the "hosts"
                              of their social circles.
                            </p>
                          </li>
                          <li className="flex">
                            <span className="text-gray-400 mr-2">•</span>
                            <p className="text-gray-700">
                              They are friendly, approachable, & enjoy being
                              around people. They are often seen as the "hosts"
                              of their social circles.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: "learning",
      name: "Learning Styles",
      testNumber: 5,
      color: "purple",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
        </svg>
      ),
      options: [
        {
          id: "understanding-learning",
          title: "Understanding Learning Styles",
          content: (
            <>
              <h2 className="text-3xl font-bold mb-6">
                Understanding{" "}
                <span className="text-purple-500">Learning Styles</span>
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">Introduction</h3>
                <p className="text-gray-700 mb-4">
                  The <strong>VARK Learning Style</strong> test identifies and
                  individual's prefereed learning style based on visual,
                  auditory, reading and Kinesthetic The VARK Learning Style test
                  identifies and individual's prefereed learning style based on
                  visual, auditory, reading and Kinesthetic The VARK Learning
                  Style test identifies and individual's prefereed learning
                  style based on visual, auditory, reading and Kinesthetic.
                </p>
              </div>

              <div className="flex justify-center items-center space-x-16 mb-12">
                {/* Auditory - Ear Icon */}
                <div className="flex flex-col items-center">
                  <svg
                    className="w-24 h-24 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4c3.9 0 7 3.1 7 7v1h-4v-1c0-1.7-1.3-3-3-3s-3 1.3-3 3v3.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V14h4v.5c0 3.6-2.9 6.5-6.5 6.5S5 18.1 5 14.5v-3.5c0-3.9 3.1-7 7-7z" />
                  </svg>
                </div>

                {/* Visual - Eye Icon */}
                <div className="flex flex-col items-center">
                  <svg
                    className="w-24 h-24 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>

                {/* Reading - Book Icon */}
                <div className="flex flex-col items-center">
                  <svg
                    className="w-24 h-24 text-amber-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Kinesthetic - Hand Icon */}
                <div className="flex flex-col items-center">
                  <svg
                    className="w-24 h-24 text-green-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-6">
                The purposes and applications of learning styles in career
                development include
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Tailored Learning Strategies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities Focuses
                    on concrete, tangible information and present realities
                    tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Optimized Training Programs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities Focuses
                    on concrete, tangible information and present realities
                    tangible information and present realities
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Improved Communication and Collaboration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Enhanced Job Performance</h4>
                  <p className="text-gray-600 text-sm">
                    Focuses on concrete, tangible information and present
                    realities tangible information and present realities
                  </p>
                </div>
              </div>
            </>
          ),
        },

        {
          id: "learning-result",
          title: "Your Result",
          content: (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Your <span className="text-purple-500">Result</span>
              </h2>

              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button className="px-6 py-3 font-medium text-gray-800 border-b-2 border-purple-500 -mb-px">
                    Learning Style
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-400">
                    Characteristics
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-400">
                    Preferences
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-400">
                    Strengths
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-400">
                    Environment
                  </button>
                  <button className="px-6 py-3 font-medium text-gray-400">
                    Interpersonal Interaction
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <svg
                    className="w-12 h-12 text-red-500 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4c3.9 0 7 3.1 7 7v1h-4v-1c0-1.7-1.3-3-3-3s-3 1.3-3 3v3.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V14h4v.5c0 3.6-2.9 6.5-6.5 6.5S5 18.1 5 14.5v-3.5c0-3.9 3.1-7 7-7z" />
                  </svg>
                  <h3 className="text-3xl font-medium text-red-500">
                    Kinesthetic
                  </h3>
                </div>

                <p className="text-gray-700 mb-8">
                  Congratulations on taking the first step for personalized
                  Career Planning & Assessment! We understand the significance
                  of making informed decisions as you navigate your academic
                  journey and future career. We are committed to empowering
                  individuals with the tools and insights needed to confidently
                  navigate the world of careers and education.
                </p>
              </div>
            </>
          ),
        },
      ],
    },
  ];

  const currentTest = tests.find((test) => test.id === selectedTest);
  const currentOption = currentTest?.options.find(
    (option) => option.id === selectedOption
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Heading />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 flex gap-6 ">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Career Analysis Report
            </h1>
            <p className="text-gray-600">
              Your Report ensures a complete understanding of your strengths,
              areas for growth, and ideal career fit.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center max-w-2xl">
            <div>
              <h2 className="font-bold text-gray-800 text-sm">
                Want To Speak To An Expert Career Counsellor?
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Explore a list of 1000+ Expert Career Counsellors near you!
              </p>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm whitespace-nowrap">
              See All
            </button>
          </div>
        </div>

        {/* Career Options Section */}
        <div className="border-t border-b border-gray-200 py-4 flex justify-center">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              Your <span className="text-blue-600 font-medium">TOP 3</span>{" "}
              Career Options
            </span>
            {careerOptions.map((career) => (
              <div key={career.number} className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                  {career.number}
                </span>
                <span className="text-gray-600">{career.title}</span>
              </div>
            ))}

            <div className="flex items-center space-x-3 ml-4 border-l pl-4 border-gray-200">
              <span className="text-gray-800 font-medium">
                Choose them right here!
              </span>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Your Career Options
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0 mt-10">
            {tests.map((test) => (
              <div key={test.id} className="mb-8">
                <div className="relative">
                  <button
                    onClick={() => {
                      setSelectedTest(test.id);
                      setSelectedOption(test.options[0].id);
                    }}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg shadow-sm ${
                      selectedTest === test.id
                        ? "bg-white text-gray-800 border-r-4 border-blue-600"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    } cursor-pointer`}
                  >
                    <div className="flex-shrink-0 text-blue-600">
                      {test.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-500">
                        TEST {test.testNumber}
                      </div>
                      <div
                        className={`font-medium ${
                          selectedTest === test.id ? `text-blue-600` : ""
                        }`}
                      >
                        {test.name}
                      </div>
                    </div>
                  </button>
                </div>

                {/* Divider line between tests */}
                {selectedTest === test.id && (
                  <div className="mt-4 pl-12 space-y-3">
                    {test.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedOption(option.id)}
                        className={`w-full text-left py-2 text-sm cursor-pointer ${
                          selectedOption === option.id
                            ? "font-medium text-gray-800"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {option.title}
                      </button>
                    ))}
                  </div>
                )}
                <div className="mt-4 border-t border-gray-200"></div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 ">
            <div className="bg-white px-6 border-l border-gray-300 mt-10">
              {currentOption?.content}
            </div>
          </div>

          {/* Right Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
