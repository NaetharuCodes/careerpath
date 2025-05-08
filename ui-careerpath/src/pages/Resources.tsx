import { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import {
  BookOpen,
  FileText,
  ExternalLink,
  Video,
  BookMarked,
  Users,
  Search,
  Check,
  Filter,
  BarChart,
  Download,
  Star,
  Bookmark,
  PlusCircle,
} from "lucide-react";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "resume", name: "Resume & CV" },
    { id: "interview", name: "Interview Prep" },
    { id: "skills", name: "Skill Development" },
    { id: "networking", name: "Networking" },
    { id: "learning", name: "Education & Learning" },
  ];

  const resourceTypes = [
    { id: "all", name: "All Types" },
    { id: "article", name: "Articles" },
    { id: "video", name: "Videos" },
    { id: "tool", name: "Tools" },
    { id: "course", name: "Courses" },
    { id: "template", name: "Templates" },
  ];

  const resources = [
    {
      id: 1,
      title: "Resume Builder",
      type: "tool",
      category: "resume",
      description:
        "Build professional, ATS-friendly resumes with our interactive builder",
      source: "internal",
      link: "/tools/resume-builder",
      featured: true,
      icon: <FileText size={24} />,
    },
    {
      id: 2,
      title: "Interview Simulator",
      type: "tool",
      category: "interview",
      description:
        "Practice with AI-powered mock interviews tailored to your industry",
      source: "internal",
      link: "/tools/interview-simulator",
      featured: true,
      icon: <Users size={24} />,
    },
    {
      id: 3,
      title: "Skill Assessment Tests",
      type: "tool",
      category: "skills",
      description:
        "Evaluate your professional skills and identify areas for improvement",
      source: "internal",
      link: "/tools/skill-assessment",
      featured: true,
      icon: <BarChart size={24} />,
    },
    {
      id: 4,
      title: "Modern Resume Templates",
      type: "template",
      category: "resume",
      description:
        "Download professionally designed resume templates for various industries",
      source: "internal",
      link: "/resources/resume-templates",
      icon: <Download size={24} />,
    },
    {
      id: 5,
      title: "Top 50 Interview Questions & Answers",
      type: "article",
      category: "interview",
      description:
        "Comprehensive guide to the most common interview questions across industries",
      source: "internal",
      link: "/articles/top-interview-questions",
      icon: <BookMarked size={24} />,
    },
    {
      id: 6,
      title: "LinkedIn Profile Optimization",
      type: "article",
      category: "networking",
      description:
        "Expert tips to enhance your LinkedIn profile and attract recruiters",
      source: "internal",
      link: "/articles/linkedin-optimization",
      icon: <BookOpen size={24} />,
    },
    {
      id: 7,
      title: "Free Coding Courses - freeCodeCamp",
      type: "course",
      category: "skills",
      description:
        "Learn to code with free interactive lessons covering web development, data science, and more",
      source: "external",
      link: "https://www.freecodecamp.org/",
      icon: <ExternalLink size={24} />,
    },
    {
      id: 8,
      title: "Coursera Career Certificates",
      type: "course",
      category: "learning",
      description:
        "Professional certificates in high-demand fields from industry leaders",
      source: "external",
      link: "https://www.coursera.org/professional-certificates",
      icon: <ExternalLink size={24} />,
    },
    {
      id: 9,
      title: "Harvard CS50: Introduction to Computer Science",
      type: "course",
      category: "learning",
      description:
        "World-renowned introductory computer science course from Harvard University",
      source: "external",
      link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
      icon: <ExternalLink size={24} />,
    },
    {
      id: 10,
      title: "How to Network Effectively - Career Guide",
      type: "article",
      category: "networking",
      description:
        "Learn professional networking strategies to build valuable career connections",
      source: "internal",
      link: "/articles/networking-guide",
      icon: <BookOpen size={24} />,
    },
    {
      id: 11,
      title: "Khan Academy",
      type: "course",
      category: "learning",
      description:
        "Free courses in math, science, computing, economics, and more",
      source: "external",
      link: "https://www.khanacademy.org/",
      icon: <ExternalLink size={24} />,
    },
    {
      id: 12,
      title: "Interview Preparation Checklist",
      type: "template",
      category: "interview",
      description:
        "Comprehensive checklist to ensure you're fully prepared for any interview",
      source: "internal",
      link: "/resources/interview-checklist",
      icon: <Check size={24} />,
    },
    {
      id: 13,
      title: "Indeed Career Guide",
      type: "article",
      category: "resume",
      description:
        "Comprehensive resource for resume writing, job search, and interview tips",
      source: "external",
      link: "https://www.indeed.com/career-advice",
      icon: <ExternalLink size={24} />,
    },
    {
      id: 14,
      title: "Mastering Technical Interviews",
      type: "video",
      category: "interview",
      description:
        "Video series on how to excel in technical interviews for tech roles",
      source: "internal",
      link: "/videos/technical-interviews",
      icon: <Video size={24} />,
    },
    {
      id: 15,
      title: "Google Digital Garage",
      type: "course",
      category: "skills",
      description:
        "Free online courses to gain new skills for your career from Google",
      source: "external",
      link: "https://learndigital.withgoogle.com/digitalgarage",
      icon: <ExternalLink size={24} />,
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "all" || resource.category === selectedCategory) &&
      (selectedType === "all" || resource.type === selectedType) &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredResources = resources.filter((resource) => resource.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Career Resources</h1>
        <p className="text-lg text-muted-foreground">
          Discover tools, guides, courses, and more to help you succeed in your
          career journey
        </p>
      </div>

      {/* Featured Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm"
            >
              <div className="text-primary mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">
                {resource.description}
              </p>

              <Button
                as="a"
                href={resource.link}
                className="w-full"
                {...(resource.source === "external"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {resource.source === "internal"
                  ? "Access Now"
                  : "Visit Resource"}
                {resource.source === "external" && (
                  <ExternalLink size={16} className="ml-2" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search for resources..."
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-background border rounded-md p-2 overflow-x-auto">
            <Filter size={18} className="text-muted-foreground ml-1" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Resource Type Filter */}
        <div className="flex items-center gap-2 bg-background border rounded-md p-2 overflow-x-auto">
          <Filter size={18} className="text-muted-foreground ml-1" />
          {resourceTypes.map((type) => (
            <Button
              key={type.id}
              variant={selectedType === type.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(type.id)}
            >
              {type.name}
            </Button>
          ))}
        </div>
      </div>

      {/* All Resources */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Resources</h2>
          <div className="text-sm text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-background border rounded-lg p-6 shadow-sm"
              >
                <div className="flex justify-between mb-4">
                  <div className="text-primary">{resource.icon}</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" title="Save for later">
                      <Bookmark size={18} />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-muted rounded-full">
                    {resourceTypes.find((t) => t.id === resource.type)?.name ||
                      resource.type}
                  </span>
                  <span className="text-xs px-2 py-1 bg-muted rounded-full">
                    {resource.source === "internal"
                      ? "CareerPath Resource"
                      : "External Resource"}
                  </span>
                </div>

                <Button
                  as="a"
                  href={resource.link}
                  variant="outline"
                  size="sm"
                  className="w-full"
                  {...(resource.source === "external"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {resource.source === "internal" ? "Access" : "Visit"}
                  {resource.source === "external" && (
                    <ExternalLink size={16} className="ml-2" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-background border rounded-lg p-8 text-center">
            <p className="text-lg mb-2">
              No resources found matching your criteria
            </p>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedType("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Resource Collections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Curated Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Collection 1 */}
          <div className="bg-background border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">
                Starting Your Tech Career
              </h3>
              <p className="text-muted-foreground">
                Essential resources for beginners looking to break into the tech
                industry
              </p>
            </div>

            <div className="p-4">
              <ul className="divide-y">
                <li className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Coding Fundamentals</p>
                    <p className="text-sm text-muted-foreground">
                      Free interactive course
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Tech Resume Template</p>
                    <p className="text-sm text-muted-foreground">
                      ATS-optimized template
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Technical Interview Guide</p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive preparation
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-muted/30">
              <Button size="sm" className="w-full">
                View All Resources in Collection
              </Button>
            </div>
          </div>

          {/* Collection 2 */}
          <div className="bg-background border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">
                Career Transition Toolkit
              </h3>
              <p className="text-muted-foreground">
                Resources for professionals looking to change careers or
                industries
              </p>
            </div>

            <div className="p-4">
              <ul className="divide-y">
                <li className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Skills Transferability Guide</p>
                    <p className="text-sm text-muted-foreground">
                      Mapping your skills to new roles
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      Career Change Resume Templates
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Highlight relevant experience
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      Networking for Career Changers
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Building connections in a new field
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-muted/30">
              <Button size="sm" className="w-full">
                View All Resources in Collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* User-Generated Content */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Community Resources</h2>
          <Button variant="outline" size="sm" className="gap-1">
            <PlusCircle size={16} />
            Submit Resource
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Community Resource 1 */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-1">
              Product Management Interview Questions
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Shared by Sarah K. • Product Manager at TechCorp
            </p>
            <p className="text-sm mb-3">
              Compilation of 120+ PM interview questions from FAANG companies
              with suggested frameworks for answering.
            </p>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Star size={16} className="mr-1 text-yellow-500" />
              <span className="mr-4">4.9 (42 ratings)</span>
              <span>Downloaded 1.2k times</span>
            </div>
            <Button size="sm" variant="outline" className="w-full">
              View Resource
            </Button>
          </div>

          {/* Community Resource 2 */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-1">UX/UI Portfolio Guide</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Shared by Miguel L. • Senior UX Designer
            </p>
            <p className="text-sm mb-3">
              Step-by-step guide to building a standout UX/UI design portfolio
              with examples and best practices.
            </p>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Star size={16} className="mr-1 text-yellow-500" />
              <span className="mr-4">4.7 (35 ratings)</span>
              <span>Downloaded 870 times</span>
            </div>
            <Button size="sm" variant="outline" className="w-full">
              View Resource
            </Button>
          </div>

          {/* Community Resource 3 */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-1">Remote Work Productivity Guide</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Shared by Jamie T. • Engineering Manager
            </p>
            <p className="text-sm mb-3">
              Practical tips and tools for maintaining productivity and
              work-life balance in remote roles.
            </p>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Star size={16} className="mr-1 text-yellow-500" />
              <span className="mr-4">4.8 (29 ratings)</span>
              <span>Downloaded 950 times</span>
            </div>
            <Button size="sm" variant="outline" className="w-full">
              View Resource
            </Button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our career advisors can help you find specific resources tailored to
          your unique career goals and challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Schedule Consultation</Button>
          <Button variant="outline">Submit Resource Request</Button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
