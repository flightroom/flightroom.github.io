import { Metadata } from "next";
import { Card, CardContent } from "@/components/design-system";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: {
    canonical: 'https://flightroom.dev/cookie-policy',
  },
  description: "Cookie Policy for Flightroom - Learn about how we use cookies",
  openGraph: {
    title: "Cookie Policy",
    description: "Cookie Policy for Flightroom - Learn about how we use cookies",
    url: "https://flightroom.dev/cookie-policy",
    siteName: "Flightroom",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy",
    description: "Cookie Policy for Flightroom - Learn about how we use cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn about how we use cookies
        </p>
      </div>

      <Card className="border-primary/20 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full h-[calc(100vh-300px)] min-h-[600px]">
            <iframe
              src="https://www.iubenda.com/privacy-policy/73426124/cookie-policy"
              title="Cookie Policy"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
