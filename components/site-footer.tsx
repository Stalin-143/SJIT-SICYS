import Tilt3D from "./tilt-3d"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80">
          © {new Date().getFullYear()} Women in Cybersecurity. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* LinkedIn CTA moved to footer; floating FAB removed */}
          <Tilt3D>
            <a
              href="https://www.linkedin.com/company/wicys-stjosephs-group-of-institutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-sm hover:shadow-md transition-shadow"
              aria-label="Open LinkedIn posts"
              title="LinkedIn"
            >
              {/* LinkedIn 'in' icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-4 w-4 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.79 53.79 0 1 1 53.79-53.8 53.8 53.8 0 0 1-53.79 53.8zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.34-79.3-48.34 0-55.74 37.7-55.74 76.6V448h-92.7V148.9h88.98v40.8h1.3c12.4-23.6 42.7-48.34 87.88-48.34 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </Tilt3D>
        </div>
      </div>
    </footer>
  )
}
