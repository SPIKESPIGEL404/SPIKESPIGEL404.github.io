import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-32">
      <h1 className="font-mono text-4xl font-bold">404</h1>
      <p className="mt-4 text-muted-foreground">Page not found.</p>
      <Link
        href="/"
        className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        Go home
      </Link>
    </div>
  );
}
