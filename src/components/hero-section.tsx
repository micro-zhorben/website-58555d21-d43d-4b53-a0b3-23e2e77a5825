import { Typography } from "@/components/ui/typography";
import { CallbackForm } from "@/components/callback-form";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={`relative min-h-[80vh] w-full ${className}`}>
      <div className="absolute inset-0">
        <img
          src="/luxury-dubai.jpg" // You'll need to add this image to your public folder
          alt="Luxury Dubai Real Estate"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="relative flex min-h-[80vh] items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Typography.H1 className="mb-6 text-white">
            Discover Luxury Living in Dubai
          </Typography.H1>
          <Typography.Lead className="mb-8 max-w-2xl mx-auto text-white">
            Experience unparalleled luxury in the heart of Dubai. From stunning penthouses to exclusive villas, find your dream property with us.
          </Typography.Lead>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}