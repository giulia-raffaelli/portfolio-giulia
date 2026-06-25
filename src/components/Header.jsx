import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Curiosity Corner', path: '/curiosity-corner' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-teal/30 bg-bg/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-amber bg-panel shadow-[0_0_10px_rgba(255,182,39,0.3)] hover:shadow-[0_0_20px_rgba(255,182,39,0.6)] transition-all duration-300 neon-focus"
              onClick={closeMenu}
            >
              <span className="font-pixel text-amber text-sm mt-1 group-hover:animate-pulse">GR</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-pixel text-xs tracking-wider transition-colors duration-300 neon-focus py-2 ${
                    isActive 
                      ? 'text-teal drop-shadow-[0_0_8px_rgba(62,144,158,0.8)]' 
                      : 'text-ink-dim hover:text-ink'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a 
              href={location.pathname === '/' ? '#contact' : '/#contact'} 
              className="px-6 py-2 bg-transparent border-2 border-magenta text-magenta font-pixel text-xs hover:bg-magenta/10 shadow-[0_0_10px_rgba(255,46,146,0.3)] hover:shadow-[0_0_20px_rgba(255,46,146,0.6)] transition-all duration-300 neon-focus rounded-full uppercase tracking-widest"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-ink hover:text-teal focus:outline-none neon-focus p-2"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-teal/20 bg-panel absolute w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => 
                `block px-3 py-4 font-pixel text-xs tracking-wider neon-focus ${
                  isActive 
                    ? 'text-teal bg-teal/10 border-l-4 border-teal' 
                    : 'text-ink-dim hover:text-ink hover:bg-bg/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={closeMenu}
            className="block px-3 py-4 font-pixel text-xs tracking-wider text-magenta hover:bg-magenta/10 border-l-4 border-transparent hover:border-magenta neon-focus uppercase"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
