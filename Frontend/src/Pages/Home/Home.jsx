import React from 'react'
import './Home.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import HeroBelow from '../../Components/HeroBelow/HeroBelow'
import AboutUsSection from '../../Components/AboutUsSection/AboutUsSection'
import LawyerJustice from '../../Components/LawyerJustice/LawyerJustice'
import ClientSaysPage from '../../Components/ClientSaysPage/ClientSaysPage'
import ManageTeamMember from '../../Components/ManageTeamMember/ManageTeamMember'
import OfficeandBrand from '../../Components/OfficeandBrand/OfficeandBrand'
import HomePlanPricing from '../../Components/HomePlanPricing/HomePlanPricing'
import FreeConsult from '../../Components/FreeConsult/FreeConsult'
import Rotation from '../../Components/Rotation/Rotation'
import LatestNews from '../../Components/LatestNews/LatestNews'
import MiddleSponser from '../../Components/MiddleSponser/MiddleSponser'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutUsSection />
        <HeroBelow />
        <LawyerJustice />
        <ClientSaysPage />
        <ManageTeamMember />
        <OfficeandBrand />
        <Rotation />
        <HomePlanPricing />
        <MiddleSponser />
        <LatestNews />
        <FreeConsult />
    </div>
  )
}

export default Home