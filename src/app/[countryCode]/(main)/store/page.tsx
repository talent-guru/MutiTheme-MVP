import { Metadata } from "next"

import { StoreTemplate } from "@modules/ThemeModules"
import { getCollectionsList } from "@lib/data/collections"
import { getCategoriesList } from "@lib/data/categories"
import { getProductTypesList } from "@lib/data/product-types"
import { getRegion } from "@lib/data/regions"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    collection?: string | string[]
    category?: string | string[]
    type?: string | string[]
    page?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage({ searchParams, params }: Params) {
  const { countryCode } = await params
  const { sortBy, page, collection, category, type } = await searchParams

  const [collections, categories, types, region] = await Promise.all([
    getCollectionsList(0, 100, ["id", "title", "handle"]),
    getCategoriesList(0, 100, ["id", "name", "handle"]),
    getProductTypesList(0, 100, ["id", "value"]),
    getRegion(countryCode),
  ])

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={countryCode}
      collection={
        !collection
          ? undefined
          : Array.isArray(collection)
            ? collection
            : [collection]
      }
      category={
        !category ? undefined : Array.isArray(category) ? category : [category]
      }
      type={!type ? undefined : Array.isArray(type) ? type : [type]}
      collections={collections}
      categories={categories}
      types={types}
      region={region}
    />
  )
}
