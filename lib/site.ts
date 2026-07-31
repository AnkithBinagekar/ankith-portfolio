const fallbackSiteUrl = "https://ankith-portfolio.vercel.app";

export const siteConfig = {
  name: "Ankith Binagekar",
  title: "Ankith Binagekar | Software Engineer",
  description: "AI & Full-Stack Developer building scalable cloud infrastructure.",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl),
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
