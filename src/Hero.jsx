import { useState, useEffect } from 'react'
import StarsBackground from './StarsBackground'

function Hero() {
  const [showAnimation, setShowAnimation] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setShowAnimation(true)
    const logoTimer = setTimeout(() => setShowLogo(true), 1500)
    const textTimer = setTimeout(() => setShowText(true), 3000)
    return () => {
      clearTimeout(logoTimer)
      clearTimeout(textTimer)
    }
  }, [])

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Sfondo animato */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showAnimation ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <StarsBackground />
      </div>

      {/* Contenuto */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6">
        {/* Immagine */}
        <img
          src="media/images/IMG_8448.jpg"
          alt="Immagine di me"
          className={`w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg transition-opacity duration-1000 ${
            showLogo ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Nome sotto l'immagine */}
        <h2
          className={`text-lg md:text-2xl font-subtitle font-semibold mt-2 md:mt-4 transition-opacity duration-1000 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Giorgio Spegis | Sound Designer & Digital Strategist
        </h2>
      </div>

      {/* Citazione + Autore */}
      <div className="absolute bottom-16 md:bottom-20 px-4 flex flex-col items-center text-center z-10">
        <blockquote
          className={`max-w-4xl text-2xl md:text-4xl font-title text-white leading-tight transition-opacity duration-1000 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          When you do things from your soul, you feel a river moving in you.
        </blockquote>
        <cite
          className={`mt-4 text-white text-base md:text-lg italic transition-opacity duration-1000 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          — Rumi
        </cite>
      </div>
    </section>
  )
}

export default Hero
