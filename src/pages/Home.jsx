
import Hero from './../components/Hero/Hero'
import Section from './../components/Section/Section'
import UpperText from './../components/UpperText/UpperText'
import Container from './../components/Container/Container'
import Card from './../components/Card/Card'


const Home = () => {
    const cards=[
{
img:'/trippy/assets/img/3.jpg',
title:"Trip in Indonesia",
description:"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
},
{
img:'/trippy/assets/img/2.jpg',
title:"Trip in Malaysia",
description:"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
},
{
img:'/trippy/assets/img/7.jpg',
title:"Trip in France",
description:"France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
},
]
  return (
    <div>
        <Hero image='/trippy/assets/img/home.jpg' title='Your Journey Your Story' btn="Travel Now" link="auth/login" suptitle="Choose Your Favourite Destination."/>
    <Section>
      <UpperText title='Popular Destinations' suptitle="Tours dive you the opportunity to see a lot, within a time frame."/>
      <Container title="Mt. Daguldul, Batangas" description="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
      img1="/trippy/assets/img/2.jpg" img2="/trippy/assets/img/3.jpg"/>
            <Container title="Mt. Daguldul, Batangas" description="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
      img1="/trippy/assets/img/5jpg.jpg" img2="/trippy/assets/img/6jpg.jpg" reverse={true}/>
    </Section> 
    <Section>
      <UpperText title="Recent Trips" suptitle="You can discover unique destination using Google Maps."/>
      <Card cards={cards}/>
    </Section> 
    </div>
  )
}

export default Home
