import type { APIRoute } from "astro";
import puppeteer from "puppeteer";

export const GET: APIRoute = async function GET() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 2400, height: 1260 });

  // Navigate the page to a URL
  await page.goto("http://localhost:4321/~gen/og/og", { waitUntil: "networkidle0" });

  const buffer = await page.screenshot({ fullPage: true, type: "png" });

  await browser.close();

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
