import { Certifications } from "@/components/site/certifications"
import { Contact, SiteFooter } from "@/components/site/contact"
import { Experience } from "@/components/site/experience"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { SiteNav } from "@/components/site/nav"
import { Products } from "@/components/site/products"
import { Stack } from "@/components/site/stack"
import { Stats } from "@/components/site/stats"
import { Work } from "@/components/site/work"
import { site } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: "Full Stack Engineer",
      email: `mailto:${site.email}`,
      telephone: site.phone,
      worksFor: {
        "@type": "Organization",
        name: site.company,
        url: site.companyUrl,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta Timur",
        addressCountry: "ID",
      },
      sameAs: [site.linkedin],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Go",
        "PostgreSQL",
        "Docker",
        "Payment gateway integration",
        "CI/CD",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      about: { "@id": `${site.url}/#person` },
      isPartOf: { "@id": `${site.url}/#website` },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-svh flex-col bg-ink">
        <SiteNav />

        <main id="main" className="flex-1">
          <Hero />
          <Marquee />
          <Stats />
          <Work />
          <Products />
          <Experience />
          <Stack />
          <Certifications />
          <Contact />
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
