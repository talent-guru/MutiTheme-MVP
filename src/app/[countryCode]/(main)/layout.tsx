import { Metadata } from "next"
import { getBaseURL } from "@lib/util/env"
import { Header, Footer, RightIcons } from "@/components/ThemeComponents"
import { listRegions } from "@lib/data/regions"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {

  const regions = await listRegions()
  return (
    <>
      <Header regions={regions} />
      {props.children}
      <Footer />
      <RightIcons />
    </>
  )
}
