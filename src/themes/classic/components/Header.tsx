import * as React from "react"
import dynamic from "next/dynamic"
import { Layout, LayoutColumn, LocalizedLink, SearchField, HeaderDrawer, RegionSwitcher, HeaderWrapper } from "./index"

const LoginLink = dynamic(
  () => import("../modules/header/components/LoginLink"),
  { loading: () => <></> }
)

const CartDrawer = dynamic(
  () => import("./CartDrawer").then((mod) => mod.CartDrawer),
  { loading: () => <></> }
)

export const Header: React.FC<{ regions: any[] }> = ({ regions }) => {
  const countryOptions = regions
    .map((r) => {
      return (r.countries ?? []).map((c: any) => ({
        country: c.iso_2,
        region: r.id,
        label: c.display_name,
      }))
    })
    .flat()
    .sort((a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""))

  return (
    <>
      <HeaderWrapper>
        <Layout>
          <LayoutColumn>
            <div className="flex justify-between items-center h-18 md:h-21">
              <h1 className="font-medium text-md">
                <LocalizedLink href="/">SofaSociety.</LocalizedLink>
              </h1>
              <div className="flex items-center gap-8 max-md:hidden">
                <LocalizedLink href="/about">About</LocalizedLink>
                <LocalizedLink href="/inspiration">Inspiration</LocalizedLink>
                <LocalizedLink href="/store">Shop</LocalizedLink>
              </div>
              <div className="flex items-center gap-3 lg:gap-6 max-md:hidden">
                <RegionSwitcher
                  countryOptions={countryOptions}
                  className="w-16"
                  selectButtonClassName="h-auto !gap-0 !p-1 transition-none"
                  selectIconClassName="text-current"
                />
                <React.Suspense>
                  <SearchField countryOptions={countryOptions} />
                </React.Suspense>
                <LoginLink className="p-1 group-data-[light=true]:md:text-white group-data-[sticky=true]:md:text-black" />
                <CartDrawer />
              </div>
              <div className="flex items-center gap-4 md:hidden">
                <LoginLink className="p-1 group-data-[light=true]:md:text-white" />
                <CartDrawer />
                <React.Suspense>
                  <HeaderDrawer countryOptions={countryOptions} />
                </React.Suspense>
              </div>
            </div>
          </LayoutColumn>
        </Layout>
      </HeaderWrapper>
    </>
  )
}
