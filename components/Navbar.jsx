"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Grid, Calendar, Image, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 py-2 px-2 rounded-full flex items-center justify-center gap-1 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-white/80 shadow-lg' : 'bg-teal-600/80'
      }`}
    >
      <NavItem href="#home" icon={<Home />} label="Home" active={scrolled} />
      <NavItem href="#features" icon={<Grid />} label="Features" active={scrolled} />
      <NavItem href="#gallery" icon={<Image />} label="Gallery" active={scrolled} />
      <NavItem href="https://www.airbnb.com/rooms/953226587982597312?adults=8&check_in=2025-04-01&check_out=2025-04-05&search_mode=regular_search&source_impression_id=p3_1741652763_P3uYvCbUiDOw5PuM&previous_page_section_name=1000&federated_search_id=56743edb-f0ff-488d-b37a-2876877dde75" isExternal={true} icon={<Calendar />} label="Book Now" active={scrolled} />
      <NavItem href="#contact" icon={<MessageSquare />} label="Contact" active={scrolled} />
    </nav>
  );
};

const NavItem = ({ href, icon, label, active, isExternal = false }) => {
  // For external links, render a regular <a> tag with target="_blank"
  if (isExternal) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all hover:bg-teal-100/50 ${
          active ? 'text-teal-800' : 'text-white'
        }`}
      >
        <span className="mb-1">
          {React.cloneElement(icon, { 
            size: 20,
            className: active ? 'text-teal-600' : 'text-current' 
          })}
        </span>
        <span className="text-xs font-medium">{label}</span>
      </a>
    );
  }
  return (
    <Link 
      href={href}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all hover:bg-teal-100/50 ${
        active ? 'text-teal-800' : 'text-white'
      }`}
    >
      <span className="mb-1">
        {React.cloneElement(icon, { 
          size: 20,
          className: active ? 'text-teal-600' : 'text-current' 
        })}
      </span>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;