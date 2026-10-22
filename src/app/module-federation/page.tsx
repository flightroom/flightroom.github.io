import { Metadata } from "next";
import Link from "next/link";

// A retired URL: it sends visitors and crawlers to the home page.
export const metadata: Metadata = {
  title: "Moved",
  robots: { index: false, follow: true },
};

export default function Moved() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <meta httpEquiv="refresh" content="0; url=/" />
      <Link href="/" className="text-primary-strong hover:underline">
        Go to the home page
      </Link>
    </div>
  );
}
