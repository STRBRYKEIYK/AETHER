import { properties } from "@/data/properties";
import PropertyClient from "./PropertyClient";

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }) {
  const { id } = await params;
  return <PropertyClient id={id} />;
}
