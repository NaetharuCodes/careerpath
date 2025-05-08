import { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Clock,
  Edit,
  Plus,
  Award,
  BookOpen,
  Users,
  Briefcase,
  BarChart,
  Target,
  FileText,
  Calendar,
  Star,
} from "lucide-react";

const MyJourneyPage = () => {
  // State for tracking which milestones are expanded in the accordion
  const [expandedMilestones, setExpandedMilestones] = useState({});

  // Toggle expanded state of a milestone
  const toggleMilestone = (id) => {
    setExpandedMilestones((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Sample user data
  const userData = {
    name: "Jamie Smith",
    currentRole: "Junior Web Developer",
    targetRole: "Senior Frontend Developer",
    completedMilestones: 4,
    totalMilestones: 12,
    progress: 33, // Percentage of journey completed
  };

  // Sample milestone data
  const milestones = [
    {
      id: 1,
      title: "Career Assessment",
      description:
        "Complete a comprehensive assessment to identify your strengths, interests, and career matches",
      status: "completed",
      completedDate: "January 15, 2025",
      icon: <Target size={24} />,
      steps: [
        {
          id: "1a",
          title: "Skills Inventory",
          description: "Identify your technical and soft skills",
          status: "completed",
          completedDate: "January 10, 2025",
          details:
            "Completed a detailed self-assessment of 45 technical skills and 20 soft skills. Key strengths identified: React.js, JavaScript, UI/UX fundamentals, communication, and problem-solving.",
        },
        {
          id: "1b",
          title: "Interests Assessment",
          description: "Discover fields and roles aligned with your interests",
          status: "completed",
          completedDate: "January 12, 2025",
          details:
            "Your interests showed strong alignment with frontend development, creative design work, and user experience fields. Top matches: Frontend Developer (92%), UX Engineer (85%), Product Designer (78%).",
        },
        {
          id: "1c",
          title: "Values Assessment",
          description:
            "Identify your workplace values and cultural preferences",
          status: "completed",
          completedDate: "January 15, 2025",
          details:
            "Your top workplace values: creativity, flexibility, continuous learning, collaboration, and work-life balance. Ideal work environment would offer remote options, mentorship, and professional development opportunities.",
        },
      ],
    },
    {
      id: 2,
      title: "Career Path Selection",
      description:
        "Choose your target career path based on assessments and research",
      status: "completed",
      completedDate: "January 28, 2025",
      icon: <BookOpen size={24} />,
      steps: [
        {
          id: "2a",
          title: "Career Path Research",
          description:
            "Explore potential career paths based on assessment results",
          status: "completed",
          completedDate: "January 22, 2025",
          details:
            "Researched potential career paths in web development, focusing on frontend, full-stack, and UI/UX roles. Compared salary ranges, job availability, and projected growth across these specializations.",
        },
        {
          id: "2b",
          title: "Industry Professional Consultation",
          description: "Meet with a professional in your target field",
          status: "completed",
          completedDate: "January 25, 2025",
          details:
            "Consulted with Sarah Chen, Senior Frontend Developer at TechCorp, via our mentor matching service. Discussed day-to-day responsibilities, career progression from junior to senior roles, and necessary skills to prioritize.",
        },
        {
          id: "2c",
          title: "Career Path Decision",
          description: "Select your target career path",
          status: "completed",
          completedDate: "January 28, 2025",
          details:
            "Selected Frontend Development specialization with focus on React ecosystem. Target role: Senior Frontend Developer within 3-4 years. Decision based on skills alignment, interest in visual aspects of development, and strong market demand.",
        },
      ],
    },
    {
      id: 3,
      title: "Skill Gap Analysis",
      description:
        "Identify skills you need to develop to reach your target role",
      status: "completed",
      completedDate: "February 12, 2025",
      icon: <BarChart size={24} />,
      steps: [
        {
          id: "3a",
          title: "Target Role Requirements",
          description: "Research skills required for your target role",
          status: "completed",
          completedDate: "February 5, 2025",
          details:
            "Analyzed 25+ job descriptions for Senior Frontend Developer positions. Common requirements: 4+ years experience, advanced React knowledge, state management (Redux/Context), testing frameworks, performance optimization, team leadership, and architectural decision-making.",
        },
        {
          id: "3b",
          title: "Current Skill Assessment",
          description:
            "Evaluate your current skill levels against requirements",
          status: "completed",
          completedDate: "February 10, 2025",
          details:
            "Completed technical assessments in key areas. Strong in: React basics, JavaScript fundamentals, HTML/CSS. Areas for development: Advanced React patterns, state management at scale, performance optimization, testing, and architectural patterns.",
        },
        {
          id: "3c",
          title: "Skill Gap Report",
          description: "Generate a report of skills to develop",
          status: "completed",
          completedDate: "February 12, 2025",
          details:
            "Generated comprehensive skill gap analysis with prioritized learning path. Key skills to develop: Redux/Context API mastery, unit and integration testing with Jest and React Testing Library, React performance optimization, and system architecture design patterns.",
        },
      ],
    },
    {
      id: 4,
      title: "Learning Plan Creation",
      description: "Build a personalized learning plan to close skill gaps",
      status: "completed",
      completedDate: "February 25, 2025",
      icon: <FileText size={24} />,
      steps: [
        {
          id: "4a",
          title: "Resource Selection",
          description: "Identify learning resources for each skill gap",
          status: "completed",
          completedDate: "February 18, 2025",
          details:
            "Selected learning resources for each skill area: Advanced React patterns course on Frontend Masters, Redux/Context deep dive on Udemy, Testing workshop series in our platform, and performance optimization webinar series.",
        },
        {
          id: "4b",
          title: "Timeline Development",
          description: "Create a timeline for completing learning activities",
          status: "completed",
          completedDate: "February 22, 2025",
          details:
            "Developed 6-month learning timeline with specific weekly goals. Structure: 8 hours/week dedicated to learning (5 hours courses/tutorials, 3 hours practical application). March-April: Advanced React, May-June: State Management, July-August: Testing & Performance.",
        },
        {
          id: "4c",
          title: "Progress Tracking Setup",
          description: "Set up a system to track learning progress",
          status: "completed",
          completedDate: "February 25, 2025",
          details:
            "Configured learning tracker in CareerPath platform. Set milestone completion criteria for each skill area. Connected GitHub account to track project development. Set up bi-weekly skill assessments to measure growth.",
        },
      ],
    },
    {
      id: 5,
      title: "Skill Development: Advanced React",
      description: "Master advanced React patterns and concepts",
      status: "in-progress",
      startDate: "March 1, 2025",
      expectedEndDate: "April 30, 2025",
      progress: 65, // Percentage complete
      icon: <Award size={24} />,
      steps: [
        {
          id: "5a",
          title: "React Hooks Mastery",
          description: "Advanced usage of built-in and custom hooks",
          status: "completed",
          completedDate: "March 20, 2025",
          details:
            "Completed advanced React hooks course. Mastered useCallback, useMemo, useRef, and created custom hooks for form validation, data fetching, and complex state management. Built hook library for personal projects.",
        },
        {
          id: "5b",
          title: "Component Patterns",
          description: "Learn and implement advanced component patterns",
          status: "completed",
          completedDate: "April 5, 2025",
          details:
            "Studied and implemented Compound Components, Render Props, HOCs, and Context API patterns. Created component library implementing these patterns. Received code review from mentor with 90% positive feedback.",
        },
        {
          id: "5c",
          title: "React Project",
          description: "Build a project showcasing advanced React skills",
          status: "in-progress",
          progress: 40,
          details:
            "Currently developing a task management application implementing advanced React patterns. Features include: complex state management, custom hook library, compound components for UI elements, and optimization techniques. Expected completion: April 25.",
        },
      ],
    },
    {
      id: 6,
      title: "Skill Development: State Management",
      description:
        "Master Redux, Context API, and other state management approaches",
      status: "not-started",
      expectedStartDate: "May 1, 2025",
      expectedEndDate: "June 30, 2025",
      icon: <BookOpen size={24} />,
      steps: [
        {
          id: "6a",
          title: "Redux Fundamentals",
          description: "Learn core Redux concepts and implementation",
          status: "not-started",
          details:
            "Course selected: 'Redux Fundamentals' by Redux team. Will cover actions, reducers, store, middleware, and Redux Toolkit. Planned exercises include converting existing application to use Redux.",
        },
        {
          id: "6b",
          title: "Context API Deep Dive",
          description: "Master React's Context API for state management",
          status: "not-started",
          details:
            "Will explore advanced Context API implementations, including performance considerations, multiple contexts, and integration with hooks. Will compare Context vs. Redux for different application scenarios.",
        },
        {
          id: "6c",
          title: "State Management Project",
          description: "Build an application with complex state management",
          status: "not-started",
          details:
            "Planned project: E-commerce platform with user authentication, shopping cart, product filtering, and order management. Will implement using both Redux and Context API approaches to compare solutions.",
        },
      ],
    },
    {
      id: 7,
      title: "Networking & Community",
      description: "Build professional connections in your target field",
      status: "in-progress",
      startDate: "March 15, 2025",
      progress: 30,
      icon: <Users size={24} />,
      steps: [
        {
          id: "7a",
          title: "Professional Profile Optimization",
          description: "Update LinkedIn and GitHub profiles",
          status: "completed",
          completedDate: "March 20, 2025",
          details:
            "Updated LinkedIn profile with new skills, projects, and career focus. Optimized GitHub profile with pinned repositories showcasing best code. Added detailed README files to all projects. Profile views increased by 35% in two weeks.",
        },
        {
          id: "7b",
          title: "Community Participation",
          description: "Join and participate in developer communities",
          status: "in-progress",
          progress: 40,
          details:
            "Joined three React/Frontend communities: React Dev community on Discord, local Frontend Meetup group, and 'ReactJS Developers' on LinkedIn. Currently participating in weekly discussions and code challenges. Goal: Contribute to at least one open discussion per week.",
        },
        {
          id: "7c",
          title: "Mentor Connection",
          description: "Establish relationship with a mentor in your field",
          status: "not-started",
          details:
            "Planning to apply for CareerPath's mentorship program in May. Alternative options: Reach out to senior developers in current network, participate in mentorship channels in joined communities.",
        },
      ],
    },
    {
      id: 8,
      title: "Portfolio Development",
      description: "Create a professional portfolio showcasing your skills",
      status: "in-progress",
      startDate: "April 1, 2025",
      progress: 25,
      icon: <Briefcase size={24} />,
      steps: [
        {
          id: "8a",
          title: "Portfolio Planning",
          description: "Plan portfolio structure and projects to include",
          status: "completed",
          completedDate: "April 5, 2025",
          details:
            "Designed portfolio site architecture and selected 4 key projects to showcase: React component library, task management app, e-commerce concept, and data visualization dashboard. Created design mockups and component structure plan.",
        },
        {
          id: "8b",
          title: "Portfolio Development",
          description: "Build your portfolio website",
          status: "in-progress",
          progress: 35,
          details:
            "Currently developing portfolio using Next.js and Tailwind CSS. Completed home page and about section. Working on project showcase components with detailed case studies. Implementing responsive design and animations.",
        },
        {
          id: "8c",
          title: "Case Studies",
          description: "Create detailed case studies for each project",
          status: "not-started",
          details:
            "Will develop in-depth case studies for each featured project, highlighting: problem statement, technical approach, architecture decisions, challenges overcome, and results. Will include code snippets and live demos where possible.",
        },
      ],
    },
  ];

  // Function to render milestone status indicator
  const renderStatusIndicator = (status, progress) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={18} className="text-green-500" />;
      case "in-progress":
        return (
          <div className="relative w-5 h-5">
            <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-primary border-r-transparent"
              style={{
                transform: `rotate(${progress * 3.6}deg)`,
              }}
            ></div>
          </div>
        );
      default:
        return <Clock size={18} className="text-muted-foreground" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Career Journey</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress toward becoming a {userData.targetRole}
        </p>
      </div>

      {/* Journey Overview Card */}
      <div className="bg-background border rounded-lg p-6 shadow-sm mb-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Journey Stats */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Journey Progress</h2>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-medium">
                  {userData.progress}%
                </span>
              </div>
              <div className="h-2.5 bg-muted rounded-full">
                <div
                  className="h-2.5 bg-primary rounded-full"
                  style={{ width: `${userData.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">
                  Current Role
                </div>
                <div className="font-medium">{userData.currentRole}</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">
                  Target Role
                </div>
                <div className="font-medium">{userData.targetRole}</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">
                  Milestones Completed
                </div>
                <div className="font-medium">
                  {userData.completedMilestones} of {userData.totalMilestones}
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">
                  Estimated Time to Goal
                </div>
                <div className="font-medium">16 months</div>
              </div>
            </div>
          </div>

          {/* Visual Journey Path */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm py-8">
              {/* Journey Path Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-muted -translate-x-1/2"></div>

              {/* Circle Points */}
              {milestones.map((milestone, index) => {
                const position = (index / (milestones.length - 1)) * 100;
                let bgColor;

                switch (milestone.status) {
                  case "completed":
                    bgColor = "bg-green-500 border-green-500";
                    break;
                  case "in-progress":
                    bgColor = "bg-primary border-primary";
                    break;
                  default:
                    bgColor = "bg-muted border-muted-foreground";
                }

                return (
                  <div
                    key={milestone.id}
                    className={`absolute left-1/2 w-6 h-6 rounded-full border-2 -translate-x-1/2 flex items-center justify-center ${bgColor}`}
                    style={{ top: `${position}%` }}
                  >
                    {milestone.status === "completed" && (
                      <CheckCircle size={14} className="text-white" />
                    )}
                  </div>
                );
              })}

              {/* Milestone Labels */}
              {milestones.map((milestone, index) => {
                const position = (index / (milestones.length - 1)) * 100;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={`label-${milestone.id}`}
                    className={`absolute text-xs font-medium ${isLeft ? "right-1/2 pr-10 text-right" : "left-1/2 pl-10"}`}
                    style={{ top: `${position}%` }}
                  >
                    {milestone.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Career Goal Card */}
      <div className="bg-background border rounded-lg p-6 shadow-sm mb-10">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">My Career Goal</h2>
          <Button variant="outline" size="sm">
            <Edit size={16} className="mr-2" />
            Edit Goal
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Target Role</h3>
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-primary" size={20} />
              <span className="text-lg">{userData.targetRole}</span>
            </div>

            <h3 className="font-medium mb-2">Key Milestones</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Complete Advanced React Training</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span>Build 3 Production-Quality Projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span>Contribute to Open Source Project</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span>Secure Mid-Level Developer Position</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Timeline</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-24 text-sm text-muted-foreground">
                  Current
                </div>
                <div className="flex-1">Junior Web Developer</div>
              </div>
              <div className="flex gap-3">
                <div className="w-24 text-sm text-muted-foreground">1 Year</div>
                <div className="flex-1">Mid-level Frontend Developer</div>
              </div>
              <div className="flex gap-3">
                <div className="w-24 text-sm text-muted-foreground">
                  3 Years
                </div>
                <div className="flex-1">Senior Frontend Developer</div>
              </div>
              <div className="flex gap-3">
                <div className="w-24 text-sm text-muted-foreground">
                  5 Years
                </div>
                <div className="flex-1">Lead Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Accordion */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Milestones</h2>
          <Button variant="outline" size="sm">
            <Plus size={16} className="mr-2" />
            Add Custom Milestone
          </Button>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className="border rounded-lg overflow-hidden bg-background"
            >
              {/* Milestone Header */}
              <div
                className={`p-4 flex items-center justify-between cursor-pointer ${
                  expandedMilestones[milestone.id] ? "border-b" : ""
                }`}
                onClick={() => toggleMilestone(milestone.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      milestone.status === "completed"
                        ? "bg-green-500/10 text-green-500"
                        : milestone.status === "in-progress"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {milestone.icon}
                  </div>

                  <div>
                    <h3 className="font-bold">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {renderStatusIndicator(
                      milestone.status,
                      milestone.progress
                    )}
                    <span className="text-sm font-medium">
                      {milestone.status === "completed"
                        ? `Completed ${milestone.completedDate}`
                        : milestone.status === "in-progress"
                          ? `In Progress (${milestone.progress}%)`
                          : "Not Started"}
                    </span>
                  </div>

                  {expandedMilestones[milestone.id] ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </div>
              </div>

              {/* Milestone Content */}
              {expandedMilestones[milestone.id] && (
                <div className="p-4 bg-background/50">
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">
                      Steps to Complete This Milestone
                    </h4>
                    <div className="space-y-4">
                      {milestone.steps.map((step) => (
                        <div key={step.id} className="border rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {step.status === "completed" ? (
                                <CheckCircle
                                  size={16}
                                  className="text-green-500"
                                />
                              ) : step.status === "in-progress" ? (
                                <div className="w-4 h-4 rounded-full border-2 border-primary border-r-transparent animate-spin"></div>
                              ) : (
                                <Clock
                                  size={16}
                                  className="text-muted-foreground"
                                />
                              )}
                              <h5 className="font-medium">{step.title}</h5>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {step.status === "completed"
                                ? `Completed ${step.completedDate}`
                                : step.status === "in-progress"
                                  ? `In Progress (${step.progress}%)`
                                  : "Not Started"}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground mb-3">
                            {step.description}
                          </p>

                          {step.details && (
                            <div className="bg-muted/30 p-3 rounded-lg text-sm">
                              {step.details}
                            </div>
                          )}

                          {step.status !== "completed" && (
                            <div className="mt-3 flex justify-end">
                              <Button
                                size="sm"
                                variant={
                                  step.status === "in-progress"
                                    ? "default"
                                    : "outline"
                                }
                              >
                                {step.status === "in-progress"
                                  ? "Continue"
                                  : "Start"}{" "}
                                This Step
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    {milestone.status !== "completed" && (
                      <Button variant="outline">
                        <Edit size={16} className="mr-2" />
                        Update Progress
                      </Button>
                    )}

                    <Button variant="outline">View Resources</Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps and Recommendations */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Recommended Next Steps</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Current Focus */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Target size={18} className="text-primary" />
              Current Focus
            </h3>

            <div className="mb-4">
              <div className="font-medium mb-2">
                Advanced React Component Patterns
              </div>
              <div className="h-2 bg-muted rounded-full mb-1">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>65% Complete</span>
                <span>Due: April 30, 2025</span>
              </div>
            </div>

            <Button size="sm" className="w-full">
              Continue Learning
            </Button>
          </div>

          {/* Next Milestone */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              Upcoming Milestone
            </h3>

            <div className="mb-4">
              <div className="font-medium mb-1">State Management</div>
              <p className="text-sm text-muted-foreground mb-2">
                Master Redux, Context API, and other state management approaches
              </p>
              <div className="text-xs text-muted-foreground">
                Starts: May 1, 2025
              </div>
            </div>

            <Button size="sm" variant="outline" className="w-full">
              Preview Materials
            </Button>
          </div>

          {/* Recommended Resource */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Star size={18} className="text-yellow-500" />
              Recommended Resource
            </h3>

            <div className="mb-4">
              <div className="font-medium mb-1">Real-World React Patterns</div>
              <p className="text-sm text-muted-foreground mb-2">
                Expert webinar on implementing advanced React patterns in
                production applications
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock size={14} className="mr-1" />
                <span>45 min video</span>
              </div>
            </div>

            <Button size="sm" variant="outline" className="w-full">
              Watch Webinar
            </Button>
          </div>
        </div>
      </div>

      {/* Career Advisor */}
      <div className="bg-background border rounded-lg p-6 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3">
            <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
              <Users size={36} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              Career Advisor
            </h3>
            <p className="text-center text-muted-foreground mb-4 md:mb-0">
              Get personalized guidance from a career professional
            </p>
          </div>

          <div className="md:w-2/3 space-y-4">
            <p>
              Having trouble with a specific milestone? Need guidance on your
              career path? Our career advisors can provide personalized advice
              to help you overcome challenges and accelerate your progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">Schedule Consultation</Button>
              <Button variant="outline" className="flex-1">
                Message Your Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Progress */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Others on Your Path</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Community Stats */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4">Frontend Developer Community</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">842</div>
                <div className="text-xs text-muted-foreground">
                  Active Members
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">58</div>
                <div className="text-xs text-muted-foreground">
                  On Your Path
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">16</div>
                <div className="text-xs text-muted-foreground">
                  At Your Milestone
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">37</div>
                <div className="text-xs text-muted-foreground">
                  Recently Hired
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Join Community Discussions
            </Button>
          </div>

          {/* Community Members */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Connect with Peers</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  MJ
                </div>
                <div className="flex-grow">
                  <div className="font-medium">Mikayla Johnson</div>
                  <div className="text-xs text-muted-foreground">
                    Same milestone, 2 weeks ahead
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  TK
                </div>
                <div className="flex-grow">
                  <div className="font-medium">Thomas Kim</div>
                  <div className="text-xs text-muted-foreground">
                    Recently completed this milestone
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  RP
                </div>
                <div className="flex-grow">
                  <div className="font-medium">Ravi Patel</div>
                  <div className="text-xs text-muted-foreground">
                    Recently hired as Senior Frontend Dev
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Achievements</h2>
          <Button variant="outline" size="sm">
            View All Badges
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Completed Badge */}
          <div className="bg-background border rounded-lg p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="text-primary" size={28} />
            </div>
            <div className="font-medium mb-1">Pathfinder</div>
            <div className="text-xs text-muted-foreground">
              Completed career assessment
            </div>
          </div>

          {/* Completed Badge */}
          <div className="bg-background border rounded-lg p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="text-primary" size={28} />
            </div>
            <div className="font-medium mb-1">Goal Setter</div>
            <div className="text-xs text-muted-foreground">
              Created career plan
            </div>
          </div>

          {/* Completed Badge */}
          <div className="bg-background border rounded-lg p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="text-primary" size={28} />
            </div>
            <div className="font-medium mb-1">Knowledge Seeker</div>
            <div className="text-xs text-muted-foreground">
              Completed first learning path
            </div>
          </div>

          {/* Locked Badge */}
          <div className="bg-background border rounded-lg p-4 text-center opacity-60">
            <div className="w-16 h-16 mx-auto mb-3 bg-muted/40 rounded-full flex items-center justify-center">
              <Briefcase className="text-muted-foreground" size={28} />
            </div>
            <div className="font-medium mb-1">Portfolio Builder</div>
            <div className="text-xs text-muted-foreground">
              Complete your portfolio
            </div>
          </div>

          {/* Locked Badge */}
          <div className="bg-background border rounded-lg p-4 text-center opacity-60">
            <div className="w-16 h-16 mx-auto mb-3 bg-muted/40 rounded-full flex items-center justify-center">
              <Users className="text-muted-foreground" size={28} />
            </div>
            <div className="font-medium mb-1">Networker</div>
            <div className="text-xs text-muted-foreground">
              Connect with 10+ peers
            </div>
          </div>

          {/* Locked Badge */}
          <div className="bg-background border rounded-lg p-4 text-center opacity-60">
            <div className="w-16 h-16 mx-auto mb-3 bg-muted/40 rounded-full flex items-center justify-center">
              <Star className="text-muted-foreground" size={28} />
            </div>
            <div className="font-medium mb-1">Job Offer</div>
            <div className="text-xs text-muted-foreground">
              Receive your first offer
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Accelerate Your Progress?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Get personalized coaching, exclusive resources, and priority support
          to reach your career goals faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Upgrade to Premium
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Learn About Premium Benefits
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyJourneyPage;
