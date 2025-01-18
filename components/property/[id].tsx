import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

export default function PropertyPage() {
  const router = useRouter(); // Get the router object
  const { id } = router.query; //
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id); // Find the property by name

  if (!property) return <p>Property not found</p>; // If property is not found, return a message

  return (
    <div>
      <PropertyDetail property={property} />
      <BookingSection price={property.price} />
      <ReviewSection reviews={property.reviews} />
    </div>
  );
}
