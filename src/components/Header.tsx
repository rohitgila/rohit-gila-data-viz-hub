
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl md:text-2xl font-bold text-theme-blue">
          Rohit<span className="text-theme-gray">Gila</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-theme-blue transition-colors">About</a>
          <a href="#skills" className="text-gray-700 hover:text-theme-blue transition-colors">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-theme-blue transition-colors">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-theme-blue transition-colors">Education</a>
          <a href="#achievements" className="text-gray-700 hover:text-theme-blue transition-colors">Achievements</a>
          <a href="#contact" className="bg-theme-blue hover:bg-theme-dark-blue text-white px-4 py-2 rounded-md transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4">
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-700 hover:text-theme-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#skills" className="text-gray-700 hover:text-theme-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-theme-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#education" className="text-gray-700 hover:text-theme-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Education</a>
              <a href="#achievements" className="text-gray-700 hover:text-theme-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Achievements</a>
              <a href="#contact" className="bg-theme-blue hover:bg-theme-dark-blue text-white px-4 py-2 rounded-md transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
