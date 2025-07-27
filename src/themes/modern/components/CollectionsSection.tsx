import Image from "next/image"
import { LocalizedButtonLink, LocalizedLink } from "./LocalizedLink"

export const CollectionsSection: React.FC<{ className?: string, collections: any[] }> = ({
  className,
  collections,
}) => {
  if (!collections) {
    return null
  }

  return (
    <div className={className}>
      <h1 className="text-primary font-bold tracking-wider mb-4 text-xl md:text-2xl">
        Our Collections
      </h1>
      <div className="grid md:grid-cols-4 gap-1 grid-cols-2">
        {collections.slice(0, 4).map((collection: any) => (
          <div
            className="relative bg-bg rounded-xl flex-shrink-0"
            key={collection.id}
          >
            <LocalizedLink href={`/collections/${collection.handle}`} className="block">
              {typeof collection.metadata?.image === "object" &&
                collection.metadata.image &&
                "url" in collection.metadata.image &&
                typeof collection.metadata.image.url === "string" && (
                  <div className="relative w-full">
                    <Image
                      src={collection.metadata.image.url}
                      alt={collection.title}
                      width={1200}
                      height={900}
                    />
                  </div>
                )}
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 md:px-6 px-3 py-2 bg-bg border border-primary text-primary rounded-full text-xs md:text-sm lg:text-md font-serif font-normal whitespace-nowrap shadow-md hover:bg-primary hover:text-white transition-all duration-300"
              >
                {collection.title}
              </span>
            </LocalizedLink>
          </div>
        ))}
      </div>
    </div>
  )
}
