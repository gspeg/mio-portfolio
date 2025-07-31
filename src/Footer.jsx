function Footer() {
    return (
      <footer className="mt-20 py-10 border-t border-white text-center text-sm flex flex-col gap-4 items-center">
        <div className="flex gap-6">
          <a href="https://www.instagram.com/giorgio_spegis/following/" target="_blank">
            <img src="public/media/images/Negative.png" className="w-6 h-6" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/giorgio-spegis-119200322/" target="_blank">
            <img src="public/media/images/NegativeL.png" className="w-6 h-6" alt="LinkedIn" />
          </a>
          <a class= "font-sans font-extralight" href="tel:+393451230890">📞: +393451230890</a>
          <a class= "font-sans font-extralight" href="giorgio.spegis25@gmail.com">✉️: giorgio.spegis25@gmail.com</a>
        </div>
        <p>&copy; 2025 Giorgio Spegis</p>
      </footer>
    )
  }
  
  export default Footer
  