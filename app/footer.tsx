import { Mail, Github, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[60%_40%] items-center">
          <div>
            <h3 id="about-us" className="mb-6 text-lg font-semibold">About Us</h3>
            <p className="text-muted-foreground">
              <span>We are computer science undergraduates at</span>
              &nbsp;
              <a href="https://www.iit.ac.lk/" className="hover:underline underline-offset-4" target="_blank">
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
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:mohamad.20230343@iit.ac.lk"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                mohamad.20230343@iit.ac.lk
              </a>
              <a
                href="mailto:isuru.20232458@iit.ac.lk"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                isuru.20232458@iit.ac.lk
              </a>
              {/* <a
                href="https://github.com/Project-Rewire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                /Project-Rewire
              </a> */}
              <a
                href="https://www.instagram.com/team_rewire/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                /team_rewire
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Rewire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}