const locale = process.env.NEXT_LOCALE;

module.exports = {
  "locales": ["es", "en"],
  "defaultLocale": locale === "es" ? "es" : "en",
  "localeDetection": false,
  "pages": {
    "*": ["common"],
    "/": ["home"],
    "/caseStudies": ["caseStudies"],
    "/caseStudies/[csid]": ["caseStudies"],
    "/career": ["career"],
    "/about-us" : ["about-us"]
  }
}