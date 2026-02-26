import SpecialistsDirectory from "@/components/SpecialistsDirectory";
import { specialistsData } from "@/data/specialists";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Elite Medical Specialists Directory | Doctors & Nurses",
    description: "Connect with Bisvaran's network of verified, elite medical professionals. Whether you need an expert doctor consultation or a specialized critical care nurse at home.",
    alternates: {
        canonical: "/specialists",
    }
}

export default function Specialists() {
    return <SpecialistsDirectory initialSpecialists={specialistsData} />;
}
