import { Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 id="about-us" className="mb-6 text-lg font-semibold">About Us</h3>
            <p className="text-muted-foreground">
              We are computer science undergraduates at IIT Sri Lanka and this is
              our Software Development Group Project
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
              <a
                href="https://github.com/Project-Rewire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                Project-Rewire
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