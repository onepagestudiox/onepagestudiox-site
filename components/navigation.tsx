"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Templates", href: "#templates" },
  { name: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Track active section
      const sections = [
        ...navItems.map((item) => item.href.substring(1)),
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const newSection = sections[i];
          if (activeSection !== newSection) {
            setActiveSection(newSection);
            // Update URL without triggering scroll
            const newUrl = newSection === "home" ? "#" : `#${newSection}`;
            window.history.replaceState(null, "", newUrl);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">
              OnePageStudioX
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm lg:text-base font-medium transition-colors duration-200 cursor-pointer",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:flex flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3 cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span
                  className={cn(
                    "absolute block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-6 space-y-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            {/* Mobile Navigation Links */}
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block w-full text-left px-4 py-4 text-base font-medium transition-colors duration-200 rounded-lg cursor-pointer",
                    isActive
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.name}
                </a>
              );
            })}

            {/* Mobile Get Started Button */}
            <div className="px-4 pt-4 pb-6">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3 cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
