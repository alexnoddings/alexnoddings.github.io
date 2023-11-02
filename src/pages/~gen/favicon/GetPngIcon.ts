import puppeteer from "puppeteer";

export async function getPngIcon(size: number): Promise<Response> {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.setViewport({ width: size, height: size });
  await page.goto("http://localhost:4321/~gen/favicon/favicon", { waitUntil: "networkidle0" });

  const buffer = await page.screenshot({ fullPage: true, type: "png", omitBackground: true });

  await browser.close();

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
