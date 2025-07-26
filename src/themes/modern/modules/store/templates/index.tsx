import { Suspense } from "react"

import SkeletonProductGrid from "../../skeletons/templates/skeleton-product-grid"
import RefinementList from "../components/refinement-list"
import { SortOptions } from "../components/refinement-list/sort-products"
import { CollectionsSlider } from "../components/collections-slider"
import PaginatedProducts from "../templates/paginated-products"

const StoreTemplate = ({
  sortBy,
  collection,
  category,
  type,
  page,
  countryCode,
  collections,
  categories,
  types,
  region,
}: {
  sortBy?: SortOptions
  collection?: string[]
  category?: string[]
  type?: string[]
  page?: string
  countryCode: string
  collections: any
  categories: any
  types: any
  region: any
}) => {
  const pageNumber = page ? parseInt(page, 10) : 1


  return (
    <div className="md:pt-47 py-26 md:pb-36">
      <CollectionsSlider />
      <RefinementList
        collections={Object.fromEntries(
          collections.collections.map((c: any) => [c.handle, c.title])
        )}
        collection={collection}
        categories={Object.fromEntries(
          categories.product_categories.map((c: any) => [c.handle, c.name])
        )}
        category={category}
        types={Object.fromEntries(
          types.productTypes.map((t: any) => [t.value, t.value])
        )}
        type={type}
        sortBy={sortBy}
      />
      <Suspense fallback={<SkeletonProductGrid />}>
        {region && (
          <PaginatedProducts
            sortBy={sortBy}
            page={pageNumber}
            countryCode={countryCode}
            collectionId={
              !collection
                ? undefined
                : collections.collections
                    .filter((c: any) => collection.includes(c.handle))
                    .map((c: any) => c.id)
            }
            categoryId={
              !category
                ? undefined
                : categories.product_categories
                    .filter((c: any) => category.includes(c.handle))
                    .map((c: any) => c.id)
            }
            typeId={
              !type
                ? undefined
                : types.productTypes
                    .filter((t: any) => type.includes(t.value))
                    .map((t: any) => t.id)
            }
          />
        )}
      </Suspense>
    </div>
  )
}

export default StoreTemplate
