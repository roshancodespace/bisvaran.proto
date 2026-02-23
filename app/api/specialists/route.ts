import { NextResponse } from "next/server";
import { specialistsData } from "@/data/specialists";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');

    let result = [...specialistsData];

    // Filter by type (Doctor, Nurse, Caregiver)
    if (type) {
        result = result.filter(s => s.type.toLowerCase() === type.toLowerCase());
    }

    // Filter by featured status
    if (featured === 'true') {
        result = result.filter(s => s.featured === true);
    }

    return NextResponse.json(result);
}
