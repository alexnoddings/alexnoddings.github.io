import type { APIRoute } from "astro";
import puppeteer from "puppeteer";

export const GET: APIRoute = async function GET() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("http://localhost:4321/~gen/resume/resume", { waitUntil: "networkidle0" });

  const pdf = await page.pdf({ format: "A4" });

  await browser.close();

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};
