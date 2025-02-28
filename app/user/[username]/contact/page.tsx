import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

interface ContactProps {
  href?: string;
  children: React.ReactNode;
  extra?: any;
}

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Contact" />
        <TopMainHeadingText text="Get In Touch" />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ContactButtons href="mailto:your.email@example.com">
            <>
              <Mail className="h-6 w-6 mr-2" />
              Email
            </>
          </ContactButtons>
          <ContactButtons
            href="https://linkedin.com/in/yourusername"
            extra={{
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          >
            <>
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </>
          </ContactButtons>
          <ContactButtons
            href=""
            extra={{
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          >
            <>
              <Github className="h-6 w-6 mr-2" />
              GitHub
            </>
          </ContactButtons>
          <ContactButtons
            href="https://twitter.com/yourusername"
            extra={{
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          >
            <>
              <Twitter className="h-6 w-6 mr-2" />
              Twitter
            </>
          </ContactButtons>
        </div>
      </div>
    </div>
  );
}

function ContactButtons({ href, children, extra }: ContactProps) {
  const colorCss = href
    ? "text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-700 transition-colors duration-200"
    : "text-gray-700 bg-gray-100 hover:bg-gray-200";
  return (
    <a
      href={href ? href : "mailto:your.email@example.com"}
      {...extra}
      className={
        `flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md ` +
        colorCss
      }
    >
      {children}
    </a>
  );
}
