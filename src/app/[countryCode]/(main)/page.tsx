import { Metadata } from "next"
import Image from "next/image"
import { getRegion } from "@lib/data/regions"
import { getProductTypesList } from "@lib/data/product-types"
import { Layout, LayoutColumn, LocalizedLink, CollectionsSection, LocalizedButtonLink } from "@/components/ThemeComponents"
import { getCollectionsList } from "@lib/data/collections"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const ProductTypesSection: React.FC = async () => {
  const productTypes = await getProductTypesList(0, 20, [
    "id",
    "value",
    "metadata",
  ])

  if (!productTypes) {
    return null
  }

  return (
    <Layout className="mb-26 md:mb-36 max-md:gap-x-2">
      <LayoutColumn>
        <h3 className="text-md md:text-2xl mb-8 md:mb-15">Our products</h3>
      </LayoutColumn>
      {productTypes.productTypes.map((productType, index) => (
        <LayoutColumn
          key={productType.id}
          start={index % 2 === 0 ? 1 : 7}
          end={index % 2 === 0 ? 7 : 13}
        >
          <LocalizedLink href={`/store?type=${productType.value}`}>
            {typeof productType.metadata?.image === "object" &&
              productType.metadata.image &&
              "url" in productType.metadata.image &&
              typeof productType.metadata.image.url === "string" && (
                <Image
                  src={productType.metadata.image.url}
                  width={1200}
                  height={900}
                  alt={productType.value}
                  className="mb-2 md:mb-8"
                />
              )}
            <p className="text-xs md:text-md">{productType.value}</p>
          </LocalizedLink>
        </LayoutColumn>
      ))}
    </Layout>
  )
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const collections = await getCollectionsList(0, 20, [
    "id",
    "title",
    "handle",
    "metadata",
  ])

  return (
    <>
      {process.env.NEXT_PUBLIC_THEME === "modern" ? (
        <div className="relative px-4 md:px-8">
          <Image
            src="/images/content/living-room-gray-armchair-two-seater-sofa.png"
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
          src="/images/content/living-room-gray-armchair-two-seater-sofa.png"
          width={2880}
          height={1500}
          alt="Living room with gray armchair and two-seater sofa"
          className="md:h-screen md:object-cover"
        />
      )}
      <div className="pt-8 pb-26 md:pt-26 md:pb-36">
        {process.env.NEXT_PUBLIC_THEME === "modern" ? (
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 mb-12">
            <h1 className="text-[48px] md:text-[72px] font-family-Instrument font-medium text-primary mb-8 md:mb-12 leading-[1.1]">
              Explore Now
            </h1>
            <div className="border-2 border-primary rounded-md p-8 md:p-12 bg-bg">
              <p className="text-primary text-md md:text-lg leading-relaxed text-center max-w-2xl mx-auto">
                Munchies is a premium Sofa company specializing in crafting high-quality Sofa chips for baking enthusiasts and professionals alike.
              </p>
            </div>
          </div>
        ) : (
          <Layout className="mb-26 md:mb-36">
            <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
              <h3 className="text-md max-md:mb-6 md:text-2xl">
                Elevate Your Living Space with Unmatched Comfort & Style
              </h3>
            </LayoutColumn>
            <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
              <div className="flex items-center h-full">
                <div className="md:text-md">
                  <p>Discover Your Perfect Sofa Today</p>
                  <LocalizedLink href="/store" variant="underline">
                    Explore Now
                  </LocalizedLink>
                </div>
              </div>
            </LayoutColumn>
          </Layout>
        )}
        <ProductTypesSection />
        <CollectionsSection className="mb-12 md:mb-16 px-4 md:px-8 max-w-[1440px] mx-auto" collections={collections.collections} />
        {process.env.NEXT_PUBLIC_THEME === "modern" ? (
          <Layout>
            <LayoutColumn className="col-span-full">
              <div className="md:p-12 bg-bg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="border p-8 border-primary/30 rounded-md h-full">
                    <h2 className="text-primary font-bold uppercase tracking-wider mb-4 text-sm md:text-base">
                      About Sofa Society
                    </h2>
                    <div className="md:text-md">
                      <p className="mb-5 md:mb-9">
                        We are dedicated to delivering high-quality, thoughtfully
                        designed sofas that merge comfort and style effortlessly.
                      </p>
                      <p className="mb-5 md:mb-3">
                        Our mission is to transform your living space into a sanctuary
                        of relaxation and beauty, with products built to last.
                      </p>
                      <LocalizedLink href="/about" variant="underline">
                        Read more about Sofa Society
                      </LocalizedLink>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <Image
                      src="/images/content/gray-sofa-against-concrete-wall.png"
                      width={2496}
                      height={1400}
                      alt="Gray sofa against concrete wall"
                      className="max-md:aspect-[3/2] max-md:object-cover"
                    />
                  </div>
                </div>
              </div>
            </LayoutColumn>
          </Layout>
        ) : (
          <Layout>
            <LayoutColumn className="col-span-full">
              <h3 className="text-md md:text-2xl mb-8 md:mb-16">
                About Sofa Society
              </h3>
              <Image
                src="/images/content/gray-sofa-against-concrete-wall.png"
                width={2496}
                height={1400}
                alt="Gray sofa against concrete wall"
                className="mb-8 md:mb-16 max-md:aspect-[3/2] max-md:object-cover"
              />
            </LayoutColumn>
            <LayoutColumn start={1} end={{ base: 13, md: 7 }}>
              <h2 className="text-md md:text-2xl">
                At Sofa Society, we believe that a sofa is the heart of every
                home.
              </h2>
            </LayoutColumn>
            <LayoutColumn
              start={{ base: 1, md: 8 }}
              end={13}
              className="mt-6 md:mt-19"
            >
              <div className="md:text-md">
                <p className="mb-5 md:mb-9">
                  We are dedicated to delivering high-quality, thoughtfully
                  designed sofas that merge comfort and style effortlessly.
                </p>
                <p className="mb-5 md:mb-3">
                  Our mission is to transform your living space into a sanctuary
                  of relaxation and beauty, with products built to last.
                </p>
                <LocalizedLink href="/about" variant="underline">
                  Read more about Sofa Society
                </LocalizedLink>
              </div>
            </LayoutColumn>
          </Layout>
        )}
      </div>
    </>
  )
}
