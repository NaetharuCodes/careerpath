// src/components/home/HomePage.tsx
import React from "react";
import { Button } from "@/components/ui/button/Button";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  FileText,
  MessageSquare,
  BarChart,
  Users,
  Award,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Career Journey,{" "}
            <span className="text-primary">Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The modern platform connecting talent with opportunity through
            advanced tools and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Find Your Next Role <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              For Employers <Briefcase size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Career Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're transforming how people build careers and how companies find
              talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Job Seekers */}
            <div className="bg-background p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-primary" />
                For Job Seekers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Professional CV Builder</p>
                    <p className="text-muted-foreground">
                      Create standout resumes with our AI-powered tools and
                      expert templates.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Interview Practice</p>
                    <p className="text-muted-foreground">
                      Practice with realistic scenarios tailored to your
                      industry and role.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Personalized Job Matching</p>
                    <p className="text-muted-foreground">
                      Discover opportunities that align with your skills,
                      experience, and aspirations.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="gap-2">
                  Get Started <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            {/* For Employers */}
            <div className="bg-background p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-primary" />
                For Employers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Efficient Hiring Tools</p>
                    <p className="text-muted-foreground">
                      Streamline your recruitment process with our comprehensive
                      suite of tools.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Quality Candidate Matching</p>
                    <p className="text-muted-foreground">
                      Find candidates who truly fit your needs using our
                      advanced matching algorithms.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cost-Effective Solutions</p>
                    <p className="text-muted-foreground">
                      Reduce time-to-hire and recruitment costs with our
                      transparent pricing model.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="gap-2">
                  Recruit Better <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process designed to get you results, whether you're
              looking for a job or hiring talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Job Seekers Process */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For Job Seekers</h3>
              <ol className="space-y-8">
                <li className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Create Your Profile
                    </h4>
                    <p className="text-muted-foreground">
                      Build your professional profile and upload or create a
                      standout CV.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Discover Opportunities
                    </h4>
                    <p className="text-muted-foreground">
                      Explore personalized job recommendations or search for
                      specific roles.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Prepare & Apply
                    </h4>
                    <p className="text-muted-foreground">
                      Practice interviews and submit applications with just a
                      few clicks.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* For Employers Process */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For Employers</h3>
              <ol className="space-y-8">
                <li className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Post Your Jobs
                    </h4>
                    <p className="text-muted-foreground">
                      Create detailed job listings that attract the right
                      candidates.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Review Matched Candidates
                    </h4>
                    <p className="text-muted-foreground">
                      Access a curated list of qualified candidates for your
                      positions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Streamlined Hiring
                    </h4>
                    <p className="text-muted-foreground">
                      Schedule interviews, provide feedback, and make offers all
                      in one place.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the tools that make CareerPath the leading platform for
              job seekers and employers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - CV Builder */}
            <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col">
              <div className="mb-4 text-primary">
                <FileText size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered CV Builder</h3>
              <p className="text-muted-foreground flex-grow">
                Create professional resumes with smart suggestions and
                industry-approved templates.
              </p>
              <Button
                variant="ghost"
                className="mt-4 justify-start p-0 hover:bg-transparent hover:text-primary"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            {/* Feature 2 - Interview Practice */}
            <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col">
              <div className="mb-4 text-primary">
                <MessageSquare size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Interview Simulator</h3>
              <p className="text-muted-foreground flex-grow">
                Practice with industry-specific questions and receive feedback
                to improve your skills.
              </p>
              <Button
                variant="ghost"
                className="mt-4 justify-start p-0 hover:bg-transparent hover:text-primary"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            {/* Feature 3 - Analytics */}
            <div className="bg-background p-6 rounded-lg shadow-sm border flex flex-col">
              <div className="mb-4 text-primary">
                <BarChart size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Analytics</h3>
              <p className="text-muted-foreground flex-grow">
                Track application progress, salary trends, and skill demand in
                your industry.
              </p>
              <Button
                variant="ghost"
                className="mt-4 justify-start p-0 hover:bg-transparent hover:text-primary"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what our users say about their experience with CareerPath.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "CareerPath's CV builder and interview practice tools helped me
                land my dream job in tech. The personalized feedback made all
                the difference."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  JS
                </div>
                <div>
                  <p className="font-semibold">Jamie Smith</p>
                  <p className="text-sm text-muted-foreground">
                    Software Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "As a hiring manager, CareerPath has revolutionized our
                recruitment process. The quality of candidates has improved and
                our time-to-hire is down by 40%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  AR
                </div>
                <div>
                  <p className="font-semibold">Alisha Rodriguez</p>
                  <p className="text-sm text-muted-foreground">HR Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "After struggling to transition careers, CareerPath helped me
                identify transferable skills and connect with companies that
                value my unique background."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  TP
                </div>
                <div>
                  <p className="font-semibold">Taylor Park</p>
                  <p className="text-sm text-muted-foreground">
                    Marketing Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10k+</p>
              <p>Job Seekers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p>Hiring Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">2,500+</p>
              <p>Successful Placements</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of professionals who have already discovered the
            CareerPath advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
