import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import MapEmbed from "./MapEmbed";

type NavbarProps = {
  hide: boolean;
};

// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Blurred background */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-black opacity-70 backdrop-filter backdrop-blur-md z-10",
          toggle ? "block" : "hidden"
        )}
        onClick={() => setToggle(false)}
      ></div>

      <nav
        className={cn(
          styles.paddingX,
          "w-full flex items-center py-5 fixed sticky top-0 z-20 ",
          isAtBottom || hide ? "mt-0" : "mt-20",
          "relative", // Ensure the parent is relatively positioned
           // Add a class for the blurred background
        )}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src="./ac.png" alt="Logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[12x] font-medium cursor-pointer flex">
              HAZ AWARE&nbsp;<span className="sm:block hidden"></span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className={cn(
                  active === link.title ? "text-white" : "text-white",
                  "hover:text-white text-[18px] font-medium cursor-pointer",
                  link.id === "linkedin" || link.id === "github"
                    ? "text-white"
                    : "" // Add this line to conditionally apply black text color
                )}
                onClick={() => !link.link && setActive(link.title)}
              >
                {link.link ? (
                  <a href={link.link} target="_blank" rel="noreferrer noopener">
                    {link.title}
                  </a>
                ) : (
                  <a href={`#${link.id}`}>{link.title}</a>
                )}
              </li>
            ))}
          </ul>
          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="Menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={cn(
                !toggle ? "hidden" : "flex",
                "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              )}
            >
              {/* Nav Links (Mobile) */}
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.id}
                    className={cn(
                      active === link.title ? "text-white" : "text-secondary",
                      "font-poppins font-medium cursor-pointer text-[16px]"
                    )}
                    onClick={() => {
                      !link.link && setToggle(!toggle);
                      !link.link && setActive(link.title);
                    }}
                  >
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <a href={`#${link.id}`}>{link.title}</a>
                    )}
                  </li>
                ))}
                <Link to="/map">
                  <MapEmbed />
                </Link>
                <li className="text-white font-poppins font-medium cursor-pointer text-[16px]"></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
