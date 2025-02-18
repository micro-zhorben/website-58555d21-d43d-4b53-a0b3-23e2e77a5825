import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  area: number;
  onContactClick: () => void;
}

export function PropertyCard({
  title,
  price,
  location,
  image,
  beds,
  baths,
  area,
  onContactClick,
}: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <Typography.H3>{title}</Typography.H3>
            <Typography.Large className="text-primary">{price}</Typography.Large>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <Typography.Muted>{location}</Typography.Muted>
            </div>
          </div>
          <div className="flex justify-between border-t pt-4">
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-primary" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-primary" />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="h-4 w-4 text-primary" />
              <span>{area} sqft</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full"
          size="lg"
          onClick={onContactClick}
        >
          Contact Agent
        </Button>
      </CardFooter>
    </Card>
  );
}