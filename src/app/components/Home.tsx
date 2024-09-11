// import { useState, useEffect,useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef,useEffect } from "react";
// import { animateScroll as scroll } from "react-scroll";

// interface IHomeProps {
//     aboutRef: RefObject<HTMLDivElement>;
// }

// export const Home:React.FC<IHomeProps> = ({aboutRef}) => {
export const Home = () => {
    const shadow = '1px 1px 0 black,-1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black';
    const frontside1Ref = useRef<HTMLImageElement>(null);
    const frontside2Ref = useRef<HTMLImageElement>(null);
    const mountainLRef = useRef<HTMLImageElement>(null);
    const mountainRRef = useRef<HTMLImageElement>(null);
    const back1Ref = useRef<HTMLImageElement>(null);
    const back2Ref = useRef<HTMLImageElement>(null);
    const backgroundRef = useRef<HTMLImageElement>(null);
    const towerRef = useRef<HTMLImageElement>(null);
    const birdsRef = useRef<HTMLImageElement>(null);
    // const homeRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [text] = useTypewriter({
        words: ['Vitor Victor!', 'Developer Web!'],
        typeSpeed: 150,
        deleteSpeed: 80,
    });

    useEffect(() => {
      const handleScroll = () => {
        const scrollValue = window.scrollY;
  
        if (frontside2Ref.current) {
          frontside2Ref.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
        }
  
        if (back1Ref.current) {
          back1Ref.current.style.transform = `translateY(${scrollValue * 0.1}px)`;
        }

        if (back2Ref.current) {
          back2Ref.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
        }

        if (towerRef.current) {
          towerRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
        }

        if (birdsRef.current) {
          birdsRef.current.style.transform = `opacity(${scrollValue * 0.1}px)`;
          birdsRef.current.style.opacity = `${1 - scrollValue * 0.002}`;
        }

        if (textRef.current) {
          textRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
        }
  
        
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div
        id="Início"
        className="max-w-screen min-h-screen bg-gradient-to-r from-sky-200 to-sky-100 relative overflow-hidden"
      > 
        <div className="relative w-full h-screen">
          {/* <img src="/gifs/bird.gif" className="absolute right-2/4 top-40 rotate-12 diagonal-fade-out" width="100px"/> */}
          <img ref={frontside1Ref}  src="/img/background scrolling/front1.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 10}}/>
          <img ref={frontside2Ref} src="/img/background scrolling/front22.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 9}}/>
          <img ref={mountainLRef}  src="/img/background scrolling/mountainL.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 8}}/>
          <img ref={mountainRRef} src="/img/background scrolling/mountainR.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 8}}/>
          <img ref={back1Ref} src="/img/background scrolling/back1.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 7}}/>
          <img ref={back2Ref} src="/img/background scrolling/back2.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 6}}/>
          <img ref={backgroundRef} src="/img/background scrolling/background.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 5}}/>
          <img ref={towerRef} src="/img/background scrolling/tower.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 5}}/>
          <img ref={birdsRef} src="/img/background scrolling/birds.png" className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: 6}}/>
        </div>
        
        <main className="absolute inset-0 flex flex-col items-center justify-center h-full w-full gap-8 " ref={textRef}
        style={{ zIndex: 9}}>
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center"
          style={{textShadow : shadow}}>
            Hi, I am <strong className="text-amber-400">{text}</strong>
            <span>
              <Cursor />
            </span>
          </h1>
          <p className="text-sm md:text-xl text-white md:w-3/6 px-2 text-center font-bold text-shadow"
          style={{textShadow : shadow}}>
            Sou um desenvolvedor web full stack com experiência na criação de aplicações completas, atuando tanto no front-end quanto no back-end.
          </p>
        </main>
        {/* Ícone no rodapé */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center mb-12 z-50">
          <a
            className="cursor-pointer animate-bounce"
            href="#About"
            // onClick={() => handleNextSession(aboutRef)}
          >
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#ffffff"
              />
            </svg>
          </a>
        </div>
    </div>
    );
}