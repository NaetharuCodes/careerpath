import { Button } from "@/components/ui/button/Button";
import {
  BarChart,
  Calendar,
  FileText,
  BarChart2,
  Users,
  Award,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const activityData = [
  { month: "Jan", applications: 4, interviews: 1, offers: 0 },
  { month: "Feb", applications: 6, interviews: 2, offers: 0 },
  { month: "Mar", applications: 8, interviews: 3, offers: 1 },
  { month: "Apr", applications: 5, interviews: 2, offers: 0 },
  { month: "May", applications: 7, interviews: 4, offers: 1 },
];

const Dash = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>

      {/* Profile and Application Status Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Profile Summary Card */}
        <div className="bg-background border rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mr-4">
              JS
            </div>
            <div>
              <h2 className="text-xl font-bold">Jamie Smith</h2>
              <p className="text-muted-foreground">Software Developer</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Profile Completion</h3>
            <div className="h-2 bg-muted rounded-full mb-1">
              <div
                className="h-2 bg-primary rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">75% complete</p>
          </div>

          <h3 className="text-sm font-medium mb-2">Top Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-muted rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-muted rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-muted rounded-full text-xs">
              Node.js
            </span>
            <span className="px-3 py-1 bg-muted rounded-full text-xs">
              UI/UX
            </span>
          </div>

          <Button variant="outline" size="sm" className="w-full">
            Edit Profile
          </Button>
        </div>

        {/* Application Status Card */}
        <div className="bg-background border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Application Status</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-3">
                  <FileText size={16} />
                </div>
                <span>Total Applications</span>
              </div>
              <span className="text-xl font-bold">28</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <Calendar size={16} />
                </div>
                <span>Awaiting Feedback</span>
              </div>
              <span className="text-xl font-bold">12</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mr-3">
                  <MessageSquare size={16} />
                </div>
                <span>Interviews Scheduled</span>
              </div>
              <span className="text-xl font-bold">3</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mr-3">
                  <Award size={16} />
                </div>
                <span>Offers Received</span>
              </div>
              <span className="text-xl font-bold">1</span>
            </div>
          </div>

          <Button className="w-full mt-4">View All Applications</Button>
        </div>

        {/* Quick Links Card */}
        <div className="bg-background border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Career Tools</h2>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start text-left"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Interview Practice
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume Builder
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left"
            >
              <BarChart className="mr-2 h-4 w-4" />
              Skills Assessment
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left"
            >
              <Users className="mr-2 h-4 w-4" />
              Networking Tools
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-left"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Learning Resources
            </Button>
          </div>

          <Button className="w-full mt-4">Explore All Tools</Button>
        </div>
      </div>

      {/* Activity Graph Card */}
      <div className="bg-background border rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-4">Activity Over Time</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={activityData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="applications"
              stroke="#646cff"
              activeDot={{ r: 8 }}
              name="Applications"
            />
            <Line
              type="monotone"
              dataKey="interviews"
              stroke="#10b981"
              name="Interviews"
            />
            <Line
              type="monotone"
              dataKey="offers"
              stroke="#f59e0b"
              name="Offers"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recommendations Row */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recommended For You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recommended Job */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold">Senior Frontend Developer</h3>
                <p className="text-muted-foreground">TechCorp Inc.</p>
              </div>
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                95% Match
              </span>
            </div>
            <p className="text-sm mb-4">
              Based on your experience with React and TypeScript, this position
              might be a great fit for your skills.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Job
            </Button>
          </div>

          {/* Skill to Develop */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold">Skill to Develop</h3>
                <p className="text-primary font-medium">GraphQL</p>
              </div>
              <BarChart2 className="text-primary" />
            </div>
            <p className="text-sm mb-4">
              Adding GraphQL to your skillset could make you eligible for 32%
              more job opportunities in your field.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Start Learning
            </Button>
          </div>

          {/* Upcoming Event */}
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold">Upcoming Webinar</h3>
                <p className="text-muted-foreground">May 15, 2025 • 2:00 PM</p>
              </div>
              <Calendar className="text-primary" />
            </div>
            <p className="text-sm mb-4">
              Tech Interview Mastery: Learn how to ace technical interviews at
              top companies.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
