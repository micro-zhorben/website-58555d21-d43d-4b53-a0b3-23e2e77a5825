import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { useToast } from "@/components/ui/use-toast";

export function Home() {
  const { toast } = useToast();
  const [featuredProperties] = useState([
    {
      id: "1",
      title: "Luxury Penthouse in Downtown Dubai",
      price: "AED 15,000,000",
      location: "Downtown Dubai",
      image: "/luxury-penthouse.jpg", // Add this image to public folder
      beds: 4,
      baths: 5,
      area: 4500,
    },
    {
      id: "2",
      title: "Beachfront Villa on Palm Jumeirah",
      price: "AED 25,000,000",
      location: "Palm Jumeirah",
      image: "/beach-villa.jpg", // Add this image to public folder
      beds: 6,
      baths: 7,
      area: 8000,
    },
    {
      id: "3",
      title: "Modern Apartment in Dubai Marina",
      price: "AED 3,500,000",
      location: "Dubai Marina",
      image: "/marina-apartment.jpg", // Add this image to public folder
      beds: 2,
      baths: 2,
      area: 1200,
    },
  ]);

  const handleContactClick = (propertyId: string) => {
    toast({
      title: "Contact Request Sent",
      description: "Our agent will contact you shortly about this property.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Typography.H3>Dubai Elite Properties</Typography.H3>
          <ModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section with Strong CTA */}
        <HeroSection />

        {/* Featured Properties Section */}
        <FeaturedProperties
          properties={featuredProperties}
          onContactClick={handleContactClick}
        />

        {/* Why Choose Us Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Typography.H2>Why Choose Dubai Elite Properties</Typography.H2>
              <Typography.Lead>
                Your trusted partner in Dubai's luxury real estate market
              </Typography.Lead>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Typography.H4>Expert Knowledge</Typography.H4>
                <Typography.P>
                  Our team of experienced professionals knows every corner of Dubai's luxury real estate market.
                </Typography.P>
              </div>
              <div className="text-center">
                <Typography.H4>Premium Portfolio</Typography.H4>
                <Typography.P>
                  Access to the most exclusive properties in Dubai's most prestigious locations.
                </Typography.P>
              </div>
              <div className="text-center">
                <Typography.H4>Personalized Service</Typography.H4>
                <Typography.P>
                  Dedicated agents providing tailored solutions to meet your specific requirements.
                </Typography.P>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Typography.H4>Dubai Elite Properties</Typography.H4>
              <Typography.P>
                Your gateway to luxury living in Dubai
              </Typography.P>
            </div>
            <div>
              <Typography.H4>Contact</Typography.H4>
              <Typography.P>
                Dubai, UAE<br />
                Email: info@dubaiproperties.com<br />
                Phone: +971 4 XXX XXXX
              </Typography.P>
            </div>
            <div>
              <Typography.H4>Office Hours</Typography.H4>
              <Typography.P>
                Monday - Saturday: 9:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 6:00 PM
              </Typography.P>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Typography.Small>
              © 2024 Dubai Elite Properties. All rights reserved.
            </Typography.Small>
          </div>
        </div>
      </footer>
    </div>
  );
}