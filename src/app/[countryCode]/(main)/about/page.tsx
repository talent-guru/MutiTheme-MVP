import { Metadata } from "next"
import Image from "next/image"
import { StoreRegion } from "@medusajs/types"
import { listRegions } from "@lib/data/regions"
import { AboutSections, LocalizedButtonLink } from "@/components/ThemeComponents"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sofa Society",
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
    regions.flatMap((r) =>
      r.countries
        ? r.countries
            .map((c) => c.iso_2)
            .filter(
              (value): value is string =>
                typeof value === "string" && Boolean(value)
            )
        : []
    )
  )

  const staticParams = countryCodes.map((countryCode) => ({
    countryCode,
  }))

  return staticParams
}

export default function AboutPage() {
  return (
    <>
    {process.env.NEXT_PUBLIC_THEME === "modern" ? (
      <div className="relative px-4 md:px-8">
        <Image
          src="/images/content/living-room-gray-three-seater-sofa.png"
          width={2880}
          height={1500}
          alt="Cozy cookie collection banner"
          className="w-full max-w-[1440px] mx-auto object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-[32px] md:text-[60px] font-medium mb-4 leading-[1.2]">
              Cozy up with our new<br />
              cookie collection
            </h2>
            <LocalizedButtonLink 
              href="/store"
              className="inline-block text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 bg-primary hover:bg-white hover:text-primary hover:border-2 border-primary"
              size="md"
            >
              Shop now
            </LocalizedButtonLink>
          </div>
        </div>
      </div>
    ) : (
      <Image
        src="/images/content/living-room-gray-three-seater-sofa.png"
        width={2880}
        height={1500}
        alt="Living room with gray armchair and two-seater sofa"
        className="md:h-screen md:object-cover"
      />
    )}
    <AboutSections />
    </>
  )
}
