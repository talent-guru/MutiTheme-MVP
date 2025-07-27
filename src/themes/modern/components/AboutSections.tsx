import { Metadata } from "next"
import Image from "next/image"
import { StoreRegion } from "@medusajs/types"
import { listRegions } from "@lib/data/regions"
import { Layout, LayoutColumn } from "./Layout"
import { Carousel } from "./Carousel"

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

export const AboutSections = () => {
  return (
    <div className="pt-8 md:pt-16 pb-26 md:pb-36">
    <Layout>
      <LayoutColumn className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Who we are?
        </h1>
      </LayoutColumn>
      <LayoutColumn start={{ base: 3, lg: 1 }} end={{ base: 11, lg: 5 }} className="mb-4">
        <h3 className="font-bold text-lg text-center mb-2">
          Our mission
        </h3>
        <p className="text-md md:text-md text-center">
          We believe that great design should be environmentally
          conscious, our environmental footprint through responsible sourcing.
        </p>
      </LayoutColumn>
      <LayoutColumn start={{ base: 3, lg: 5 }} end={{ base: 11, lg: 9 }} className="mb-4">
        <h3 className="font-bold text-lg text-center mb-2">
          Our commitment
        </h3>
        <p className="text-md md:text-md text-center">
          Our commitment to sustainability ensures that our products are 
          not only beautiful but also kind to the planet.
        </p>
      </LayoutColumn>      
      <LayoutColumn start={{ base: 3, lg: 9 }} end={{ base: 11, lg: 13 }} className="mb-4">
        <h3 className="font-bold text-lg text-center mb-2">
          Every piece
        </h3>
        <p className="text-md md:text-md text-center">
          Every piece in our collection is designed with care, 
          blending timeless craftsmanship with modern aesthetics 
          to offer you the perfect balance.
        </p>
      </LayoutColumn>
      <LayoutColumn className="mb-8 md:mb-16 mt-8 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="border p-8 border-primary/30 rounded-md h-full">
            <h2 className="text-primary font-bold uppercase tracking-wider mb-4 text-md md:text-xl">
              At Sofa Society.
            </h2>
            <div className="md:text-md">
              <p className="mb-2 md:mb-3">
                We are dedicated to delivering high-quality, thoughtfully
                designed sofas that merge comfort and style effortlessly.
              </p>
              <p className="mb-2 md:mb-3">
                Our mission is to transform your living space into a sanctuary
                of relaxation and beauty, with products built to last.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/content/gray-sofa-against-concrete-wall.png"
              width={2496}
              height={1400}
              alt="Gray sofa against concrete wall"
              className="max-md:aspect-[3/2] max-md:object-cover rounded-md"
            />
          </div>
        </div>
      </LayoutColumn>
      <LayoutColumn className="mb-4">
        <Carousel
          heading={<h3 className="text-lg md:text-2xl font-bold">Our Service</h3>}
          className="mb-8 md:mb-16 mt-4 md:mt-8"
        >
        <div className="w-[20%] sm:w-[30%] lg:w-full max-w-80 flex-shrink-0 border p-8 border-primary rounded-md cursor-pointer">
          <p className="text-md">
            Welcome to Sofa Society, where we believe that comfort and style
            should be effortlessly intertwined. Our mission is to help you
            create beautiful, functional spaces that bring warmth and
            relaxation into your home.
          </p>
        </div>
          <div className="w-[40%] sm:w-[20%] lg:w-full max-w-80 flex-shrink-0 border p-8 border-primary rounded-md cursor-pointer">
            <p className="text-md">
            Every piece in our collection is designed with care, blending
            timeless craftsmanship with modern aesthetics to offer you the
            perfect balance between form and function.
            </p>
          </div>
          <div className="w-[40%] sm:w-[20%] lg:w-full max-w-80 flex-shrink-0 border p-8 border-primary rounded-md cursor-pointer">
            <p className="text-md">
            At the heart of our brand is a deep commitment to quality. We
            understand that a sofa isn&apos;t just another piece of
            furniture; it&apos;s where you unwind, gather with loved ones,
            and make memories. That&apos;s why we source only the finest
            materials and fabrics, ensuring that every sofa we offer is
            built to last.
            </p>
          </div>
          <div className="w-[40%] sm:w-[20%] lg:w-full max-w-80 flex-shrink-0 border p-8 border-primary rounded-md cursor-pointer">
            <p className="text-md">
            From luxurious leathers and soft linens to high-performance
            textiles, each fabric is carefully selected for its durability
            and beauty. Our attention to detail extends to every stitch and
            seam, guaranteeing that your sofa will not only look stunning
            but will also withstand the test of time.
            </p>
          </div>
          <div className="w-[40%] sm:w-[20%] lg:w-full max-w-80 flex-shrink-0 border p-8 border-primary rounded-md cursor-pointer">
            <p className="text-md">
            Our design philosophy revolves around creating pieces that are
            both beautiful and practical. We understand that every home is different, so we
            offer a diverse range of styles, colors, and textures to help
            you find the perfect fit. Whether you prefer sleek modern lines
            or soft, inviting silhouettes.
            </p>
          </div>
          <div className="w-[40%] sm:w-[20%] lg:w-full max-w-80 flex-shrink-0 border p-8 border-primary rounded-md cursor-pointer">
            <p className="text-md">
            We believe that great design should be environmentally
            conscious, which is why we strive to minimise our environmental
            footprint through responsible sourcing and production practices.
            Our commitment to sustainability ensures that our products are
            not only beautiful but also kind to the planet.
            </p>
          </div>
        </Carousel>
      </LayoutColumn>
    </Layout>
    </div>
  )
}
