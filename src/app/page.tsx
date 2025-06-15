import Banner from "@/components/Homepage/Banner"
import FAQ from "@/components/Homepage/FAQ"
import MeetTheTeam from "@/components/Homepage/MeetTheTeam"
import Services from "@/components/Homepage/Services"
import TrustedClients from "@/components/Homepage/TrustedClients"

export const dynamic = 'force-dynamic'


export default function Home() {
  return (
    <>
      <div className="pt-16">
        <Banner />
      </div>
      <Services/>
      <FAQ/>
      <TrustedClients/>
      <MeetTheTeam/>

    </>
  )
}