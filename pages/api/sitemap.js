const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "weekly", priority: 1 },
    
    { url: "/portfolio", changefreq: "weekly", priority: .7 },
    { url: "/portfolio/toeic", changefreq: "monthly", priority: 0.4 },
    { url: "/portfolio/rosella-tea", changefreq: "monthly", priority: 0.4 },
    { url: "/portfolio/poudre-blanche", changefreq: "monthly", priority: 0.4 },
    { url: "/portfolio/maison-des-ados-virtuelle", changefreq: "monthly", priority: 0.4 },
    { url: "/portfolio/polygon", changefreq: "monthly", priority: 0.4 },
    { url: "/portfolio/where-in-the-world", changefreq: "monthly", priority: 0.4 },
    { url: "/portfolio/youclone", changefreq: "monthly", priority: 0.4 },

    { url: "/contact", changefreq: "never", priority: 0.2 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};