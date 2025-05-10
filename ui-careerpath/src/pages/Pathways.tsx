import { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import {
  Search,
  BookOpen,
  Briefcase,
  BarChart,
  Filter,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  DollarSign,
  TrendingUp,
  GraduationCap,
  Users,
} from "lucide-react";

const Pathways = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Fields" },
    { id: "tech", name: "Technology" },
    { id: "health", name: "Healthcare" },
    { id: "finance", name: "Finance" },
    { id: "creative", name: "Creative Arts" },
    { id: "education", name: "Education" },
  ];

  const careerPaths = [
    {
      id: 1,
      title: "Software Development",
      category: "tech",
      description:
        "Design, build, and maintain software applications and systems",
      averageSalary: "$92,000",
      growthRate: "21%",
      entryRequirements: "Bachelor's degree or equivalent experience",
      popularRoles: [
        "Frontend Developer",
        "Backend Engineer",
        "Full Stack Developer",
        "Mobile Developer",
      ],
      keySkills: [
        "Programming",
        "Problem-solving",
        "Software design",
        "Testing",
      ],
    },
    {
      id: 2,
      title: "Data Science",
      category: "tech",
      description:
        "Extract insights from complex data using analytics, statistics, and machine learning",
      averageSalary: "$96,000",
      growthRate: "28%",
      entryRequirements: "Bachelor's or Master's degree in relevant field",
      popularRoles: [
        "Data Scientist",
        "Data Analyst",
        "Machine Learning Engineer",
        "Business Intelligence Analyst",
      ],
      keySkills: [
        "Statistical analysis",
        "Programming",
        "Data visualization",
        "Machine learning",
      ],
    },
    {
      id: 3,
      title: "Nursing",
      category: "health",
      description:
        "Provide and coordinate patient care, educate patients about health conditions",
      averageSalary: "$77,000",
      growthRate: "15%",
      entryRequirements: "Bachelor's degree in Nursing, RN license",
      popularRoles: [
        "Registered Nurse",
        "Nurse Practitioner",
        "Clinical Nurse Specialist",
        "Pediatric Nurse",
      ],
      keySkills: [
        "Patient care",
        "Medical knowledge",
        "Communication",
        "Critical thinking",
      ],
    },
    {
      id: 4,
      title: "Financial Analysis",
      category: "finance",
      description:
        "Evaluate investment opportunities and provide financial guidance",
      averageSalary: "$83,000",
      growthRate: "10%",
      entryRequirements: "Bachelor's degree in Finance or related field",
      popularRoles: [
        "Financial Analyst",
        "Investment Banker",
        "Portfolio Manager",
        "Risk Analyst",
      ],
      keySkills: [
        "Financial modeling",
        "Data analysis",
        "Market research",
        "Reporting",
      ],
    },
    {
      id: 5,
      title: "UX/UI Design",
      category: "creative",
      description:
        "Create user-friendly digital experiences through research and design",
      averageSalary: "$85,000",
      growthRate: "18%",
      entryRequirements: "Bachelor's degree or portfolio of work",
      popularRoles: [
        "UX Designer",
        "UI Designer",
        "Product Designer",
        "Interaction Designer",
      ],
      keySkills: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Visual design",
      ],
    },
    {
      id: 6,
      title: "Teaching",
      category: "education",
      description:
        "Educate students and help them develop knowledge and skills",
      averageSalary: "$61,000",
      growthRate: "8%",
      entryRequirements: "Bachelor's degree, teaching certification",
      popularRoles: [
        "Elementary Teacher",
        "Secondary Teacher",
        "Special Education Teacher",
        "Educational Consultant",
      ],
      keySkills: [
        "Instruction",
        "Curriculum development",
        "Assessment",
        "Classroom management",
      ],
    },
  ];

  const filteredCareers = careerPaths.filter(
    (career) =>
      (selectedCategory === "all" || career.category === selectedCategory) &&
      (career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Explore Career Paths</h1>
        <p className="text-lg text-muted-foreground">
          Discover different career options, qualification requirements, and job
          expectations
        </p>
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
              placeholder="Search careers, skills, or keywords..."
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
      </div>

      {/* Featured Paths */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Career Paths</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="bg-background border rounded-lg overflow-hidden shadow-sm"
            >
              {/* Career Header */}
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {career.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1 text-primary" />
                    <span>Avg: {career.averageSalary}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp size={16} className="mr-1 text-primary" />
                    <span>Growth: {career.growthRate}</span>
                  </div>
                </div>
              </div>

              {/* Career Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-medium flex items-center mb-2">
                    <GraduationCap size={16} className="mr-2 text-primary" />
                    Entry Requirements
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {career.entryRequirements}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium flex items-center mb-2">
                    <Briefcase size={16} className="mr-2 text-primary" />
                    Popular Roles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {career.popularRoles.map((role, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium flex items-center mb-2">
                    <Star size={16} className="mr-2 text-primary" />
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {career.keySkills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-muted rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button variant="outline" size="sm" className="flex-1">
                    Learning Path
                  </Button>
                  <Button size="sm" className="flex-1">
                    Explore Jobs
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="bg-background border rounded-lg p-8 text-center">
            <p className="text-lg mb-2">
              No career paths found matching your criteria
            </p>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Career Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Career Planning Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Assessment Tool */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <BarChart className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Career Assessment</h3>
            <p className="text-muted-foreground mb-4">
              Discover career paths that match your skills, interests, and
              values with our comprehensive assessment.
            </p>
            <Button className="w-full">Take Assessment</Button>
          </div>

          {/* Learning Paths */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Learning Paths</h3>
            <p className="text-muted-foreground mb-4">
              Structured guides to help you acquire the skills and
              qualifications needed for your desired career.
            </p>
            <Button className="w-full">Browse Paths</Button>
          </div>

          {/* Industry Insights */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Industry Insights</h3>
            <p className="text-muted-foreground mb-4">
              Get advice from professionals currently working in your target
              field through interviews and forums.
            </p>
            <Button className="w-full">Read Insights</Button>
          </div>
        </div>
      </div>

      {/* Real Job Examples */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Real Job Examples</h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            View All <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Listing 1 */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold mb-1">Frontend Developer</h3>
                <p className="text-muted-foreground">TechSolutions Inc.</p>
              </div>
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                New
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1 text-muted-foreground" />
                <span>San Francisco, CA (Remote)</span>
              </div>
              <div className="flex items-center">
                <DollarSign size={16} className="mr-1 text-muted-foreground" />
                <span>$90K - $120K</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-muted-foreground" />
                <span>Full-time</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Requirements:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>3+ years of experience with React and TypeScript</li>
                <li>Strong understanding of modern frontend development</li>
                <li>Experience with responsive design and accessibility</li>
                <li>Bachelor's degree or equivalent experience</li>
              </ul>
            </div>

            <Button size="sm">View Full Job</Button>
          </div>

          {/* Job Listing 2 */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold mb-1">Data Scientist</h3>
                <p className="text-muted-foreground">Analytics Corp</p>
              </div>
              <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-xs">
                Trending
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1 text-muted-foreground" />
                <span>Boston, MA (Hybrid)</span>
              </div>
              <div className="flex items-center">
                <DollarSign size={16} className="mr-1 text-muted-foreground" />
                <span>$110K - $140K</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-muted-foreground" />
                <span>Full-time</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Requirements:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>
                  Master's degree in Statistics, Computer Science, or related
                  field
                </li>
                <li>Proficient in Python, R, and SQL</li>
                <li>Experience with machine learning algorithms and models</li>
                <li>Strong communication and visualization skills</li>
              </ul>
            </div>

            <Button size="sm">View Full Job</Button>
          </div>
        </div>
      </div>

      {/* Learning Journey */}
      <div className="bg-background border rounded-lg p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-6">Your Learning Journey</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          {/* Timeline Steps */}
          <div className="space-y-8 relative">
            {/* Step 1 */}
            <div className="ml-12 relative">
              <div className="absolute -left-12 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Discover Your Path</h3>
              <p className="text-muted-foreground mb-4">
                Take assessments to understand your strengths, interests, and
                potential career matches.
              </p>
              <Button variant="outline" size="sm">
                Start Discovery Process
              </Button>
            </div>

            {/* Step 2 */}
            <div className="ml-12 relative">
              <div className="absolute -left-12 w-8 h-8 bg-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Explore Requirements</h3>
              <p className="text-muted-foreground mb-4">
                Research education, certifications, and skills needed for your
                chosen career path.
              </p>
              <Button variant="outline" size="sm">
                Browse Requirements
              </Button>
            </div>

            {/* Step 3 */}
            <div className="ml-12 relative">
              <div className="absolute -left-12 w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Create a Learning Plan</h3>
              <p className="text-muted-foreground mb-4">
                Build a personalized roadmap with courses, resources, and
                milestones to reach your goals.
              </p>
              <Button variant="outline" size="sm">
                Create Plan
              </Button>
            </div>

            {/* Step 4 */}
            <div className="ml-12 relative">
              <div className="absolute -left-12 w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Track Your Progress</h3>
              <p className="text-muted-foreground mb-4">
                Monitor your progress, adjust your plans as needed, and
                celebrate your achievements.
              </p>
              <Button variant="outline" size="sm">
                View Progress Tools
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Start Your Career Journey?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Take the first step toward your dream career with personalized
          guidance, resources, and support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Take Career Assessment
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Speak with a Career Advisor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pathways;
