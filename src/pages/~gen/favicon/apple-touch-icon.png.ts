import type { APIRoute } from "astro";
import { getPngIcon } from "./GetPngIcon";

export const GET: APIRoute = async function GET() {
  return await getPngIcon(180);
};
