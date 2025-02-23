import { FileDown } from "lucide-react";

export default function ResumeDownload() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <FileDown className="h-5 w-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
