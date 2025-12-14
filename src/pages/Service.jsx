import Card from "../components/Card/Card"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section"
import UpperImg from "../components/UpperImg/UpperImg"
import UpperText from "../components/UpperText/UpperText"


const Service = () => {
      const cards=[
{
img:'/assets/img/3.jpg',
title:"Trip in Indonesia",
description:"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
},
{
img:'/assets/img/2.jpg',
title:"Trip in Malaysia",
description:"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
},
{
img:'/assets/img/7.jpg',
title:"Trip in France",
description:"France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
},
]
  return (
    <div>
             <UpperImg image='/trippy/assets/img/servicebg.jpg' title='Services'/>

    <Section>
      <UpperText title="Recent Trips" suptitle="You can discover unique destination using Google Maps."/>
      <Card cards={cards}/>
    </Section>  
    </div>
  )
}

export default Service
