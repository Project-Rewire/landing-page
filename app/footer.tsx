import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container text-muted-foreground">
        <div className="py-12 px-8 grid gap-8 md:gap-12 lg:grid-cols-[60%_40%] items-start text-center md:text-left">
          <div className="max-w-prose mx-auto md:mx-0">
            <h3 id="about-us" className="mb-4 sm:mb-6 text-lg font-semibold">About Us</h3>
            <p className="text-sm sm:text-base">
              <span>We are computer science undergraduates at</span>
              &nbsp;
              <a
                href="https://www.iit.ac.lk/"
                className="hover:underline underline-offset-4 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                IIT Sri Lanka
              </a>
              &nbsp;
              <span>
                and this is our Software Development Group Project. Rewire is a mobile app that we are developing
                to help individuals recover from behavioral addictions. It features a AI-powered assistant,
                along with a recommendation system that generates activities that helps for the recovery process,
                and a community platform.
              </span>
            </p>
          </div>
          <div className="w-full max-w-md mx-auto md:mx-0">
            <h3 className="mb-4 sm:mb-6 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4 flex items-center flex-col md:items-start">
              <a
                href="mailto:mohamad.20230343@iit.ac.lk"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="break-all">mohamad.20230343@iit.ac.lk</span>
              </a>
              <a
                href="mailto:isuru.20232458@iit.ac.lk"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="break-all">isuru.20232458@iit.ac.lk</span>
              </a>
              <a
                href="https://github.com/Project-Rewire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                /Project-Rewire
              </a>
              <a
                href="https://www.instagram.com/team_rewire/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                /team_rewire
              </a>
            </div>
          </div>
        </div>
        <div className="border-t py-8 text-center text-sm">
          <p>&copy; 2025 Rewire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}