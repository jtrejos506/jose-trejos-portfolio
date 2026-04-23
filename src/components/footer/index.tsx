export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Jose Trejos.
        </p>
      </div>
    </footer>
  );
}
