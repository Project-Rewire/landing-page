export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">ReWire</h3>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="mt-6 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} ReWire. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

