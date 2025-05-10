import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  FileText,
  MessageSquare,
  BarChart,
  Users,
} from "lucide-react";
import Hero from "@/components/ui/hero/Hero";
import FeatureCard from "@/components/ui/featurecard/FeatureCard";
import ProcessList from "@/components/ui/processlist/ProcessList";
import FeatureBox from "@/components/ui/featurebox/FeatureBox";
import TestimonialCard from "@/components/ui/testimonial/Testimonial";
import StatisticsSection from "@/components/ui/statsbar/StatsBar";
import CTASection from "@/components/ui/calltoaction/CallToAction";
import CVBuilderInfoModal from "@/components/ui/featuremodals/CVBuilderInfoModal";
import { useState } from "react";

const HomePage = () => {
  const [cvModal, setCvModal] = useState<boolean>(false);

  const handleOpenCvModal = () => {
    setCvModal(!cvModal);
  };

  return (
    <div className="flex flex-col">
      <Hero
        title={
          <>
            Your Career Journey,{"  "}
            <span className="text-primary">Reimagined</span>
          </>
        }
        subtitle="The modern platform connecting talent with opportunity through advanced tools and personalized guidance."
        primaryButtonText="Find Your Next Role"
        primaryButtonIcon={<ArrowRight size={18} />}
        secondaryButtonText="For Employers"
        secondaryButtonIcon={<Briefcase size={18} />}
      />

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
            <FeatureCard
              icon={<Users className="text-primary" />}
              title="For Job Seekers"
              features={[
                {
                  icon: (
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  ),
                  title: "Professional CV Builder",
                  description:
                    "Create standout resumes with our AI-powered tools and expert templates.",
                },
                {
                  icon: (
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  ),
                  title: "Interview Practice",
                  description:
                    "Practice with realistic scenarios tailored to your industry and role.",
                },
                {
                  icon: (
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  ),
                  title: "Personalized Job Matching",
                  description:
                    "Discover opportunities that align with your skills, experience, and aspirations.",
                },
              ]}
              buttonText="Get Started"
              buttonIcon={<ArrowRight size={16} />}
            />

            {/* For Employers */}
            <FeatureCard
              icon={<Briefcase className="text-primary" />}
              title="For Employers"
              features={[
                {
                  icon: (
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  ),
                  title: "Efficient Hiring Tools",
                  description:
                    "Streamline your recruitment process with our comprehensive suite of tools.",
                },
                {
                  icon: (
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  ),
                  title: "Quality Candidate Matching",
                  description:
                    "Find candidates who truly fit your needs using our advanced matching algorithms.",
                },
                {
                  icon: (
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  ),
                  title: "Cost-Effective Solutions",
                  description:
                    "Reduce time-to-hire and recruitment costs with our transparent pricing model.",
                },
              ]}
              buttonText="Recruit Better"
              buttonIcon={<ArrowRight size={16} />}
              onButtonClick={() => console.log("Button clicked")}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works:
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process designed to get you results, whether you're
              looking for a job or hiring talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Job Seekers Process */}
            <ProcessList
              title="For Job Seekers"
              steps={[
                {
                  number: 1,
                  title: "Create Your Profile",
                  description:
                    "Build your professional profile and upload or create a standout CV.",
                },
                {
                  number: 2,
                  title: "Discover Opportunities",
                  description:
                    "Explore personalized job recommendations or search for specific roles.",
                },
                {
                  number: 3,
                  title: "Prepare & Apply",
                  description:
                    "Practice interviews and submit applications with just a few clicks.",
                },
              ]}
            />

            {/* For Employers Process */}
            <ProcessList
              title="For Employers"
              steps={[
                {
                  number: 1,
                  title: "Post Your Jobs",
                  description:
                    "Create detailed job listings that attract the right candidates.",
                },
                {
                  number: 2,
                  title: "Review Matched Candidates",
                  description:
                    "Access a curated list of qualified candidates for your positions.",
                },
                {
                  number: 3,
                  title: "Streamlined Hiring",
                  description:
                    "Schedule interviews, provide feedback, and make offers all in one place.",
                },
              ]}
            />
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
            <FeatureBox
              icon={<FileText size={48} />}
              title="AI-Powered CV Builder"
              description="Create professional resumes with smart suggestions and industry-approved templates."
              linkText="Learn more"
              onClick={handleOpenCvModal}
            />

            {/* Feature 2 - Interview Practice */}
            <FeatureBox
              icon={<MessageSquare size={48} />}
              title="Interview Simulator"
              description="Practice with industry-specific questions and receive feedback to improve your skills."
              linkText="Learn more"
              onClick={handleOpenCvModal}
            />

            {/* Feature 3 - Analytics */}
            <FeatureBox
              icon={<BarChart size={48} />}
              title="Career Analytics"
              description="Track application progress, salary trends, and skill demand in your industry."
              linkText="Learn more"
              onClick={handleOpenCvModal}
            />
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
            <TestimonialCard
              quote="CareerPath's CV builder and interview practice tools helped me land my dream job in tech. The personalized feedback made all the difference."
              authorName="Jamie Smith"
              authorTitle="Software Developer"
              rating={5}
              avatarContent="JS"
            />
            <TestimonialCard
              quote="As a hiring manager, CareerPath has revolutionized our recruitment process. The quality of candidates has improved and our time-to-hire is down by 40%."
              authorName="Alisha Rodriguez"
              authorTitle="HR Director"
              rating={5}
              avatarContent="AR"
            />
            <TestimonialCard
              quote="After struggling to transition careers, CareerPath helped me identify transferable skills and connect with companies that value my unique background."
              authorName="Taylor Park"
              authorTitle="Marketing Specialist"
              rating={5}
              avatarContent="TP"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection
        items={[
          { value: "10k+", label: "Job Seekers" },
          { value: "500+", label: "Hiring Companies" },
          { value: "2,500+", label: "Successful Placements" },
          { value: "95%", label: "Satisfaction Rate" },
        ]}
      />

      {/* CTA Section */}

      <CTASection
        title="Ready to Transform Your Career Journey?"
        description="Join thousands of professionals who have already discovered the CareerPath advantage."
        primaryButton={{
          text: "Get Started",
          icon: <ArrowRight size={18} />,
          href: "/signup",
        }}
        secondaryButton={{
          text: "Learn More",
          variant: "outline",
          href: "/about",
        }}
      />
      <CVBuilderInfoModal isOpen={cvModal} onClose={handleOpenCvModal} />
    </div>
  );
};

export default HomePage;
