import Banner from "@/components/Homepage/Banner"
import Services from "@/components/Homepage/Services"

export const dynamic = 'force-dynamic'


export default function Home() {
  return (
    <>
      <div className="pt-16">
        <Banner />
      </div>
      <Services/>

    </>
  )
}