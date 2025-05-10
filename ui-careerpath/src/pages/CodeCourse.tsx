import { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import {
  BookOpen,
  Code,
  Terminal,
  CheckCircle,
  PlayCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  MessageSquare,
  FileText,
  Bookmark,
} from "lucide-react";

const CodeCourse = () => {
  const [activeTab, setActiveTab] = useState("lesson");
  const [codeSolution, setCodeSolution] = useState(false);

  // Sample code for the exercises
  const exerciseCode = `// Write a function that takes a name and returns a greeting
function greet(name) {
  // Your code here
  
}

// Test your function
console.log(greet("Alex"));`;

  const solutionCode = `// Write a function that takes a name and returns a greeting
function greet(name) {
  return "Hello, " + name + "! Welcome to JavaScript 101.";
}

// Test your function
console.log(greet("Alex"));`;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            JavaScript 101: Introduction to Programming
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Your first step into the world of web development
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              <Clock size={16} className="mr-1" /> 8 Weeks
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              <BookOpen size={16} className="mr-1" /> Beginner
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              <Award size={16} className="mr-1" /> Certificate
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button>Start Course</Button>
          <Button variant="outline">
            <Bookmark size={16} className="mr-2" /> Save
          </Button>
        </div>
      </div>

      {/* Course Navigation */}
      <div className="border-b mb-8">
        <div className="flex overflow-x-auto">
          <button
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "lesson" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
            onClick={() => setActiveTab("lesson")}
          >
            Lesson Content
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "exercises" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
            onClick={() => setActiveTab("exercises")}
          >
            Practical Exercises
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "resources" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
            onClick={() => setActiveTab("resources")}
          >
            Additional Resources
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "discussion" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
            onClick={() => setActiveTab("discussion")}
          >
            Discussion
          </button>
        </div>
      </div>

      {/* Lesson Content Tab */}
      {activeTab === "lesson" && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Welcome to JavaScript 101
              </h2>
              <p className="mb-4">
                In this course, you'll learn the fundamentals of JavaScript, the
                programming language that powers the web. Whether you're aiming
                to become a full-stack developer, a front-end specialist, or
                simply want to understand how websites work, JavaScript is an
                essential skill in your toolbox.
              </p>
              <p>
                By the end of this course, you'll be able to write basic
                JavaScript programs, understand programming concepts, and have
                the foundation needed to progress to more advanced web
                development topics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Learn JavaScript?</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Code size={18} className="mr-2 text-primary" />
                    Universal Web Language
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    JavaScript is supported by all modern web browsers, making
                    it the universal language for creating interactive websites.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Terminal size={18} className="mr-2 text-primary" />
                    Versatile Applications
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    From web and mobile apps to server-side development and even
                    desktop applications, JavaScript can do it all.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Award size={18} className="mr-2 text-primary" />
                    High Demand Skill
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    JavaScript developers are consistently among the most
                    sought-after professionals in the tech industry.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2 flex items-center">
                    <BookOpen size={18} className="mr-2 text-primary" />
                    Gateway to Advanced Frameworks
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Learning JavaScript is the first step to working with
                    powerful frameworks like React, Angular, and Vue.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Lesson 1: JavaScript Basics
              </h3>

              <div className="mb-6">
                <h4 className="font-bold mb-2">What is JavaScript?</h4>
                <p className="mb-4">
                  JavaScript is a high-level, interpreted programming language
                  that allows you to implement complex features on web pages.
                  It's the third layer of the standard web technologies, two of
                  which are HTML and CSS.
                </p>
                <p className="mb-4">
                  Originally created to "make web pages alive", JavaScript
                  programs are called scripts. They can be written right in a
                  web page's HTML and run automatically as the page loads.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-medium">Key Characteristics:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>
                      JavaScript is a client-side language (runs in the browser)
                    </li>
                    <li>It's dynamically typed (variables can change types)</li>
                    <li>It's event-driven (responds to user interactions)</li>
                    <li>With Node.js, JavaScript can also run on servers</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Setting Up Your Environment</h4>
                <p className="mb-4">
                  One of the great things about JavaScript is that you don't
                  need to install any special tools to start coding. All you
                  need is:
                </p>
                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>A text editor (we recommend Visual Studio Code)</li>
                  <li>A modern web browser (Chrome, Firefox, Edge, etc.)</li>
                </ol>
                <p>
                  For this course, we've also set up an interactive coding
                  environment where you can practice directly in your browser.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Your First JavaScript Code</h4>
                <p className="mb-4">
                  Let's write your first JavaScript code - the traditional
                  "Hello, World!" program:
                </p>
                <div className="bg-background border rounded-lg p-4 mb-4 font-mono text-sm">
                  <code>console.log("Hello, World!");</code>
                </div>
                <p className="mb-4">
                  The{" "}
                  <code className="bg-muted px-1 rounded">console.log()</code>{" "}
                  function is used to output messages to the console, which is a
                  tool used for debugging.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center">
                    <PlayCircle size={18} className="mr-2 text-primary" />
                    Try it yourself:
                  </h5>
                  <p className="mb-2">
                    Open your browser's developer tools (right-click on the page
                    and select "Inspect" or press F12), go to the "Console" tab,
                    and type the code above. Press Enter to see the result.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Variables and Data Types
              </h3>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Declaring Variables</h4>
                <p className="mb-4">
                  Variables are containers for storing data values. In
                  JavaScript, we declare variables using{" "}
                  <code className="bg-muted px-1 rounded">let</code>,{" "}
                  <code className="bg-muted px-1 rounded">const</code>, or{" "}
                  <code className="bg-muted px-1 rounded">var</code>:
                </p>
                <div className="bg-background border rounded-lg p-4 mb-4 font-mono text-sm">
                  <code>
                    // Using let (modern way to declare variables)
                    <br />
                    let name = "Alex";
                    <br />
                    <br />
                    // Using const (for values that won't change)
                    <br />
                    const pi = 3.14159;
                    <br />
                    <br />
                    // Using var (older way, less commonly used now)
                    <br />
                    var age = 25;
                  </code>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="font-medium flex items-center">
                    <CheckCircle size={18} className="mr-2 text-primary" />
                    Best Practice:
                  </p>
                  <p className="text-sm">
                    Use <code className="bg-muted px-1 rounded">const</code> by
                    default, and only use{" "}
                    <code className="bg-muted px-1 rounded">let</code> when you
                    need to reassign the variable. Avoid using{" "}
                    <code className="bg-muted px-1 rounded">var</code> in modern
                    JavaScript.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Data Types</h4>
                <p className="mb-4">JavaScript has several basic data types:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-4">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Type</th>
                        <th className="border p-2 text-left">Description</th>
                        <th className="border p-2 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2 font-medium">String</td>
                        <td className="border p-2">Text values</td>
                        <td className="border p-2 font-mono text-sm">
                          "Hello" or 'World'
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Number</td>
                        <td className="border p-2">Numeric values</td>
                        <td className="border p-2 font-mono text-sm">
                          42 or 3.14
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Boolean</td>
                        <td className="border p-2">Logical values</td>
                        <td className="border p-2 font-mono text-sm">
                          true or false
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Object</td>
                        <td className="border p-2">Complex data structures</td>
                        <td className="border p-2 font-mono text-sm">
                          {"{ name: 'Alex', age: 25 }"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Array</td>
                        <td className="border p-2">Lists of values</td>
                        <td className="border p-2 font-mono text-sm">
                          [1, 2, 3, 4]
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Null</td>
                        <td className="border p-2">
                          Intentional absence of value
                        </td>
                        <td className="border p-2 font-mono text-sm">null</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Undefined</td>
                        <td className="border p-2">
                          Variable declared but not assigned
                        </td>
                        <td className="border p-2 font-mono text-sm">
                          undefined
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4">
                  JavaScript is a dynamically typed language, which means you
                  don't need to specify the data type when declaring variables:
                </p>
                <div className="bg-background border rounded-lg p-4 mb-4 font-mono text-sm">
                  <code>
                    let message = "Hello"; // String
                    <br />
                    message = 42; // Now it's a Number
                    <br />
                    message = true; // Now it's a Boolean
                  </code>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Button variant="outline" disabled>
                Previous Lesson
              </Button>
              <Button onClick={() => setActiveTab("exercises")}>
                Continue to Exercises <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg overflow-hidden sticky top-24">
              <div className="bg-muted p-4 border-b">
                <h3 className="font-bold">Course Modules</h3>
              </div>
              <div className="p-2">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md bg-primary/10 text-primary"
                    >
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-2">
                        1
                      </span>
                      JavaScript Basics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        2
                      </span>
                      Functions & Logic
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        3
                      </span>
                      Loops & Arrays
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        4
                      </span>
                      Objects & DOM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        5
                      </span>
                      Events & Interaction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        6
                      </span>
                      Async JavaScript
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        7
                      </span>
                      Error Handling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted/50"
                    >
                      <span className="w-6 h-6 bg-muted-foreground/30 rounded-full flex items-center justify-center text-xs mr-2">
                        8
                      </span>
                      Final Project
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Your Progress</h4>
                  <span className="text-sm text-primary">5%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{ width: "5%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exercises Tab */}
      {activeTab === "exercises" && (
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Practical Exercises</h2>
            <p>
              Let's put what you've learned into practice with these hands-on
              exercises. Try to solve them on your own first, but don't worry if
              you get stuck - you can always check the solution.
            </p>
          </div>

          {/* Exercise 1 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">
                Exercise 1: Your First Function
              </h3>
              <p className="mb-4">
                Write a function called{" "}
                <code className="bg-muted px-1 rounded">greet</code> that takes
                a name as a parameter and returns a personalized greeting
                message.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <h4 className="font-medium mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The function should accept one parameter:{" "}
                    <code className="bg-muted px-1 rounded">name</code>
                  </li>
                  <li>
                    It should return a string in the format: "Hello, [name]!
                    Welcome to JavaScript 101."
                  </li>
                  <li>
                    Call your function with a test name to verify it works
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Expected Output:</h4>
                <div className="bg-background border rounded p-3 font-mono text-sm">
                  Hello, Alex! Welcome to JavaScript 101.
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold">Your Solution</h4>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCodeSolution(!codeSolution)}
                >
                  {codeSolution ? "Hide Solution" : "Show Solution"}
                </Button>
              </div>

              <div className="bg-background border rounded-lg p-4 mb-4 font-mono text-sm">
                <pre>{codeSolution ? solutionCode : exerciseCode}</pre>
              </div>

              <div className="flex gap-3">
                <Button>Run Code</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </div>
          </div>

          {/* Exercise 2 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">
                Exercise 2: Variable Types
              </h3>
              <p className="mb-4">
                Create variables of each data type we learned about, and use{" "}
                <code className="bg-muted px-1 rounded">console.log()</code> to
                display their values and types.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <h4 className="font-medium mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Create a string variable named{" "}
                    <code className="bg-muted px-1 rounded">courseName</code>
                  </li>
                  <li>
                    Create a number variable named{" "}
                    <code className="bg-muted px-1 rounded">moduleNumber</code>
                  </li>
                  <li>
                    Create a boolean variable named{" "}
                    <code className="bg-muted px-1 rounded">isEnrolled</code>
                  </li>
                  <li>
                    Create an array variable named{" "}
                    <code className="bg-muted px-1 rounded">topics</code> with
                    at least 3 string elements
                  </li>
                  <li>
                    Create an object variable named{" "}
                    <code className="bg-muted px-1 rounded">courseInfo</code>{" "}
                    with properties for name, difficulty, and duration
                  </li>
                  <li>
                    Use{" "}
                    <code className="bg-muted px-1 rounded">console.log()</code>{" "}
                    to print each variable and its type using{" "}
                    <code className="bg-muted px-1 rounded">typeof</code>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold">Your Solution</h4>
                <Button variant="outline" size="sm">
                  Show Solution
                </Button>
              </div>

              <div className="bg-background border rounded-lg p-4 mb-4 font-mono text-sm">
                <pre>
                  {`// Create your variables here
// String variable
let courseName = 

// Number variable
let moduleNumber = 

// Boolean variable
let isEnrolled = 

// Array variable
let topics = 

// Object variable
let courseInfo = 

// Print variables and their types
console.log("courseName:", courseName, "type:", typeof courseName);
// Add more console.log statements for the other variables
`}
                </pre>
              </div>

              <div className="flex gap-3">
                <Button>Run Code</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-6 border-t">
            <Button variant="outline" onClick={() => setActiveTab("lesson")}>
              Back to Lesson
            </Button>
            <Button onClick={() => setActiveTab("resources")}>
              Additional Resources <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <p>
              Expand your knowledge with these carefully selected resources.
              They complement the course material and provide different
              perspectives on JavaScript fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Documentation */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Documentation</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary"
                  >
                    <FileText size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">
                        MDN JavaScript Guide
                      </span>
                      <span className="text-sm text-muted-foreground">
                        The comprehensive reference from Mozilla Developer
                        Network
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://javascript.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary"
                  >
                    <FileText size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">JavaScript.info</span>
                      <span className="text-sm text-muted-foreground">
                        Modern JavaScript Tutorial with interactive examples
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://eloquentjavascript.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary"
                  >
                    <BookOpen size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">
                        Eloquent JavaScript
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Free book with in-depth explanations of concepts
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Interactive Learning */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Interactive Practice</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.codecademy.com/learn/introduction-to-javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary"
                  >
                    <Code size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">
                        Codecademy JavaScript Course
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Hands-on interactive exercises to practice fundamentals
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary"
                  >
                    <Code size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">
                        freeCodeCamp JavaScript Course
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Comprehensive curriculum with challenges and projects
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://javascript30.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary"
                  >
                    <Code size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">JavaScript30</span>
                      <span className="text-sm text-muted-foreground">
                        30 day vanilla JS coding challenge
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Videos */}
            <div className="border rounded-lg p-6 col-span-full">
              <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="https://www.youtube.com/watch?v=W6NZfCO5SIk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="border rounded-lg overflow-hidden group-hover:border-primary transition-colors">
                    <div className="aspect-video bg-muted relative flex items-center justify-center">
                      <PlayCircle
                        size={48}
                        className="text-primary/70 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                        JavaScript Fundamentals for Beginners
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Duration: 48 minutes
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=hdI2bqOjy3c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="border rounded-lg overflow-hidden group-hover:border-primary transition-colors">
                    <div className="aspect-video bg-muted relative flex items-center justify-center">
                      <PlayCircle
                        size={48}
                        className="text-primary/70 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                        JavaScript Crash Course for Beginners
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Duration: 1 hour 40 minutes
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=jS4aFq5-91M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="border rounded-lg overflow-hidden group-hover:border-primary transition-colors">
                    <div className="aspect-video bg-muted relative flex items-center justify-center">
                      <PlayCircle
                        size={48}
                        className="text-primary/70 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                        JavaScript ES6 Basics
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Duration: 1 hour 10 minutes
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Cheat Sheet */}
            <div className="border rounded-lg p-6 col-span-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">
                  JavaScript Quick Reference
                </h3>
                <Button variant="outline" size="sm">
                  <FileText size={16} className="mr-2" />
                  Download PDF
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Variables & Data Types</h4>
                  <div className="bg-background border rounded-lg p-3 font-mono text-sm mb-4">
                    <pre>
                      {`// Variable declaration
let name = "John";             // String
const age = 30;                // Number
let isActive = true;           // Boolean
let items = [1, 2, 3];         // Array
let user = {                   // Object
  name: "John",
  age: 30
};`}
                    </pre>
                  </div>

                  <h4 className="font-bold mb-3">Operators</h4>
                  <div className="bg-background border rounded-lg p-3 font-mono text-sm">
                    <pre>
                      {`// Arithmetic
let sum = 5 + 3;         // Addition: 8
let diff = 10 - 4;       // Subtraction: 6
let product = 7 * 2;     // Multiplication: 14
let quotient = 20 / 4;   // Division: 5
let remainder = 10 % 3;  // Modulus: 1

// Comparison
5 === 5               // Strict equality: true
5 !== "5"             // Strict inequality: true
10 > 5                // Greater than: true
5 <= 5                // Less than or equal: true`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">Functions</h4>
                  <div className="bg-background border rounded-lg p-3 font-mono text-sm mb-4">
                    <pre>
                      {`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function
const add = (a, b) => a + b;

// Calling a function
greet("Alice");       // "Hello, Alice!"
multiply(4, 5);       // 20
add(3, 7);            // 10`}
                    </pre>
                  </div>

                  <h4 className="font-bold mb-3">Conditional Statements</h4>
                  <div className="bg-background border rounded-lg p-3 font-mono text-sm">
                    <pre>
                      {`// If statement
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Switch statement
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("End of week");
    break;
  default:
    console.log("Mid-week");
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-6 border-t">
            <Button variant="outline" onClick={() => setActiveTab("exercises")}>
              Back to Exercises
            </Button>
            <Button onClick={() => setActiveTab("discussion")}>
              Join Discussion <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Discussion Tab */}
      {activeTab === "discussion" && (
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Discussion Forum</h2>
            <p>
              Connect with fellow students and instructors, ask questions, share
              your insights, and participate in thoughtful discussions about
              JavaScript fundamentals.
            </p>
          </div>

          {/* New Post Form */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Start a New Discussion</h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="post-title"
                  className="block text-sm font-medium mb-1"
                >
                  Title
                </label>
                <input
                  id="post-title"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div>
                <label
                  htmlFor="post-content"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="post-content"
                  rows={4}
                  className="w-full p-2 border rounded-md"
                  placeholder="Share your thoughts, questions, or insights..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <Button>Post Discussion</Button>
              </div>
            </div>
          </div>

          {/* Discussion Threads */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Recent Discussions</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded p-1">
                  <option>Recent</option>
                  <option>Popular</option>
                  <option>Unanswered</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {/* Discussion 1 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      MK
                    </div>
                    <div>
                      <h4 className="font-bold">
                        Difference between let, const, and var?
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        Posted by Michael K. • 2 days ago
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center">
                      <MessageSquare size={14} className="mr-1" /> 12
                    </span>
                    <span className="flex items-center">
                      <Star size={14} className="mr-1" /> 5
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  I'm confused about when to use let vs const vs var in
                  JavaScript. The course explains the basics, but I'm wondering
                  about real-world usage and best practices. When would you
                  choose one over the others?
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    12 replies • Last reply 6 hours ago
                  </span>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>

              {/* Discussion 2 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      SJ
                    </div>
                    <div>
                      <h4 className="font-bold">Help with Exercise 2</h4>
                      <div className="text-sm text-muted-foreground">
                        Posted by Sarah J. • Yesterday
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center">
                      <MessageSquare size={14} className="mr-1" /> 8
                    </span>
                    <span className="flex items-center">
                      <Star size={14} className="mr-1" /> 2
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  I'm stuck on Exercise 2 where we need to create different
                  variable types. I keep getting an error when I try to define
                  my object with the courseInfo variable. Can someone help me
                  figure out what I'm doing wrong?
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    8 replies • Last reply 3 hours ago
                  </span>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>

              {/* Discussion 3 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Award size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">
                        INSTRUCTOR: JavaScript vs TypeScript
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        Posted by David M. (Instructor) • 1 week ago
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center">
                      <MessageSquare size={14} className="mr-1" /> 24
                    </span>
                    <span className="flex items-center">
                      <Star size={14} className="mr-1" /> 18
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  Many of you have asked about the differences between
                  JavaScript and TypeScript, and when you should learn
                  TypeScript. I've started this thread to address these
                  questions and discuss the pros and cons of each.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    24 replies • Last reply Yesterday
                  </span>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline">View All Discussions</Button>
            </div>
          </div>

          {/* Sidebar: Ask the Instructor */}
          <div className="border rounded-lg p-6 bg-muted/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Award size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Ask Your Instructor</h4>
                <p className="text-sm text-muted-foreground">
                  Have a specific question? Reach out directly to your course
                  instructor for personalized help.
                </p>
              </div>
            </div>
            <Button className="w-full">
              <MessageSquare size={16} className="mr-2" />
              Message Instructor
            </Button>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-6 border-t">
            <Button variant="outline" onClick={() => setActiveTab("resources")}>
              Back to Resources
            </Button>
            <Button variant="outline">
              Next Module <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Course Completion Progress */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Progress</h2>
          <Button variant="outline" size="sm">
            View Certificate Requirements
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center">
              <BookOpen size={18} className="mr-2 text-primary" />
              Module Completion
            </h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Module 1: JavaScript Basics</span>
                <span>5%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>0/8</strong> modules completed
            </div>
          </div>

          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center">
              <Terminal size={18} className="mr-2 text-primary" />
              Exercises Completed
            </h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Progress</span>
                <span>0%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>0/24</strong> exercises completed
            </div>
          </div>

          <div className="bg-background border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center">
              <Award size={18} className="mr-2 text-primary" />
              Final Project
            </h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Progress</span>
                <span>0%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Not started yet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeCourse;
