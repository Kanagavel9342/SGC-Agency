import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const routes = [
  "/",
  "/privacy",
  "/contact",
  "/terms",
  "/packages",
  "/services",
  "/vehicles",
  "/about",
];

const generateSitemap = async () => {
  const stream = new SitemapStream({
    hostname: "https://www.sreeganapathycaabs.com/",
  });

  routes.forEach((route) => {
    stream.write({
      url: route,
      changefreq: "weekly",
      lastmod: new Date().toISOString(),
    });
  });

  stream.end();

  const sitemap = await streamToPromise(stream);
  const filePath = "./sitemap.xml";
  const writeStream = createWriteStream(filePath);

  writeStream.write(sitemap.toString());
  console.log("Sitemap generated successfully!");
};

generateSitemap();
