import { EmailIcon, GitHubIcon, LinkedInIcon } from "@site/src/utils/icons";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Jose Trejos.
          </p>
        </div>
      </div>
    </footer>
  );
}
