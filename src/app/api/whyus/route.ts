import { whyUs } from "@/app/data/data";

export async function GET() {
    return Response.json(whyUs);
}