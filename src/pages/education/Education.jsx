import CardEducation from "../../components/cardEducation/CardEducation"
import Skeleton from "../../components/skeleton/Skeleton"
import { Section } from "../../styles/general/styles"


function Education() {
  return (
    <Section>
      <Skeleton title='Education'/>
      <CardEducation/>
    </Section>
  )
}

export default Education