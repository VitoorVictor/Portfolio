import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { navLinksArray, NavLink } from "../data/index";
import menu from "/img/logos/menu.svg";
import close from "/img/logos/close.svg";

export const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    // const [scrolled, setScrolled] = useState(false);
    
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollTop = window.scrollY;
    //     setScrolled(scrollTop > 100);
    //   };
  
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
  
    useEffect(() => {
      const sections = document.querySelectorAll("div[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      );

      
  
      sections.forEach((section) => observer.observe(section));
  
      return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return(

    <nav
      className="w-full flex items-center p-8 sm:px-16 sm:py-10 fixed z-40 md:pointer-events-none"
    >
      <div className='w-full flex justify-end items-start mx-auto'>
        {/* <Link
          to='/'
          className='flex items-start'
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex'>
            VV
          </p>
        </Link> */}

        <ul className='hidden sm:flex flex-col gap-5'>
          {navLinksArray.map((nav: NavLink) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.title ? "text-yellow-500" : "text-[#3730A3]"
              } hover:text-white text-[14px] lg:text-[22px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.title}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>

        <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[20px] h-[20px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinksArray.map((nav: NavLink) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-yellow-500" : "text-[#3730A3]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.title}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


{/* <header
id="home"
className="fixed top-0 left-0 w-full flex gap-10 md:justify-center justify-between items-center px-5 h-12 z-60 backdrop-blur-sm bg-blue-900/30 border-b-2 border-yellow-400"
>
<div className="z-60">
  <strong className="text-amber-400">Vitor Victor</strong>
</div>
<div className="md:hidden">
<svg fill="#FBBF24" width="24px" height="24px">
      <path fill="#FBBF24" d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"/>
      <path  fill="#FBBF24" d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"/>
  </svg>
</div>
<ul className="md:flex gap-5 text-lg font-suse font-extrabold text-blueColor hidden z-60">
  <li className="cursor-pointer">
    <a onClick={() => handleNextSession(homeRef)}>Home</a>
  </li>
  <li className="cursor-pointer">
    <a onClick={() => handleNextSession(aboutRef)}>About</a>
  </li>
  <li className="cursor-pointer">
    <a onClick={() => handleNextSession(aboutRef)}>Skills</a>
  </li>
  <li className="cursor-pointer">
    <a onClick={() => handleNextSession(aboutRef)}>Portfolio</a>
  </li>
  <li className="cursor-pointer">
    <a onClick={() => handleNextSession(aboutRef)}>Contacts</a>
  </li>
</ul>
</header> */}
