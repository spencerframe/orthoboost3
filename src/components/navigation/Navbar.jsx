import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "@/components/navigation/NavLink";
import { BookCallButton } from "@/components/navigation/BookCallButton";
import { Logo } from "@/components/navigation/Logo";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { getNavLinks } from "@/constants/navigation";
import { DropdownMenu } from "@/components/navigation/DropdownMenu";

export default function Navbar() {
  const location = useLocation();
  const [navLinks, setNavLinks] = useState([]); // Initialize as empty array

  useEffect(() => {
    const loadNavLinks = async () => {
      const links = await getNavLinks();
      console.log("links:", links);
      setNavLinks(links);
    };
    loadNavLinks();
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className='bg-white shadow-md z-[1000]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <Logo />
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu
                  key={link.path}
                  label={link.label}
                  items={link.children}
                />
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  isActive={isActive(link.path)}
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <BookCallButton isActive={isActive("/schedule")} />
          </div>
          <MobileMenu
            isActive={isActive}
            navLinks={navLinks}
          />
        </div>
      </div>
    </nav>
  );
}
