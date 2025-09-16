export default function sitemap() {
  const base = "https://www.zaccaifree.com"
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/faq`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ]
}
