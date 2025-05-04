// src/components/ui/header/Header.tsx
import React from "react";
import { Button } from "@/components/ui/button/Button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";
import LoginModal from "../loginmodal/LoginModal";
import SignupModal from "../signupmodal/SignupModal";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignupModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">CareerPath</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="/explore" className="text-sm font-medium hover:text-primary">
            Explore Careers
          </a>
          <a
            href="/assessments"
            className="text-sm font-medium hover:text-primary"
          >
            Assessments
          </a>
          <a
            href="/resources"
            className="text-sm font-medium hover:text-primary"
          >
            Resources
          </a>
        </nav>

        {/* Right Side - Auth and Theme Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={toggleLoginModal}
          >
            Sign In
          </Button>
          <Button className="hidden md:flex" onClick={toggleSignupModal}>
            Sign Up
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a
              href="/explore"
              className="text-sm font-medium hover:text-primary"
            >
              Explore Careers
            </a>
            <a
              href="/assessments"
              className="text-sm font-medium hover:text-primary"
            >
              Assessments
            </a>
            <a
              href="/resources"
              className="text-sm font-medium hover:text-primary"
            >
              Resources
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" size="sm" onClick={toggleLoginModal}>
                Sign In
              </Button>
              <Button onClick={toggleSignupModal}>Sign Up</Button>
            </div>
          </nav>
        </div>
      )}

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={() => {}}
          isOpen
        />
      )}
      {showSignUpModal && (
        <SignupModal
          onClose={() => setShowSignUpModal(false)}
          onSwitchToLogin={() => {}}
          isOpen
        />
      )}
    </header>
  );
};

export default Header;
