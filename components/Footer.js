'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-netflix-black border-t border-netflix-red/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="text-netflix-red">P</span>
              <span className="text-white">V</span>
            </div>
            <p className="text-gray-400">Full Stack Developer | Enterprise Solutions</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-netflix-red transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/pooja-vish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-netflix-red transition-colors block"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pooja-vishwakarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-netflix-red transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="mailto:official.poojashwkarma@gmail.com"
                className="text-gray-400 hover:text-netflix-red transition-colors block"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-netflix-red/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pooja Vishwakarma. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-netflix-red hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
