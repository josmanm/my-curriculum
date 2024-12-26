import CardExperiences from "../../components/cardExperiences/CardExperiences"
import Skeleton from "../../components/skeleton/Skeleton"
import { Section } from "../../styles/general/styles"

function Experiences() {
  return (
    <Section>
        <Skeleton title='Experiences'/>
        <CardExperiences/>
    </Section>
  )
}

export default Experiences