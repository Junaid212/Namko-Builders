import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Services from "@/components/sections/home2/Services"
import Pricing from "@/components/sections/home2/Pricing"
import Projects from "@/components/sections/home2/Projects"
import Features from "@/components/sections/home2/Features"
import News from "@/components/sections/home2/News"
import Action from "@/components/sections/home2/Action"
import Contact from "@/components/sections/home2/Contact"
import Brand from "@/components/sections/home2/Brand"
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs"
import StatsSection from "@/components/sections/home2/StatsSection"
import RunningText from "@/components/sections/home3/RunningText"
import FloorPlansSection from "@/components/sections/home2/FloorPlansSection"
import SpecificationsSection from "@/components/sections/home2/SpecificationsSection"
import StatsPage from "@/components/sections/home3/StatsPage"
export default function Home() {

    return (

        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                {/* <Features /> */}
                
                <About />
                <RunningText/>
                {/* <StatsSection/> */}
                <StatsPage/>
                <FloorPlansSection/>

                <Services />
                <SpecificationsSection/>
                <Projects />
                <News />
                <Action />
                
            </Layout>
        </>
    )
}