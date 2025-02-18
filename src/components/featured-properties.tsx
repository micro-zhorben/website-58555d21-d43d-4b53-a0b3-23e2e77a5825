import { Typography } from "@/components/ui/typography";
import { PropertyCard } from "@/components/property-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  area: number;
}

interface FeaturedPropertiesProps {
  properties: Property[];
  onContactClick: (propertyId: string) => void;
}

export function FeaturedProperties({ properties, onContactClick }: FeaturedPropertiesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Typography.H2>Featured Properties</Typography.H2>
          <Typography.Lead>
            Explore our handpicked selection of premium properties
          </Typography.Lead>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {properties.map((property) => (
              <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <PropertyCard
                    {...property}
                    onContactClick={() => onContactClick(property.id)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}