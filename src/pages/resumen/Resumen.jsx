import { Div, Section, TitleH1 } from "../../styles/general/styles"

function Resumen() {
  return (
    <Section>
      <Div>
        <TitleH1>Resumen</TitleH1>
        <embed src="../../../public/Josman.pdf" type="application/pdf" width="100%" height="600px" />
      </Div>
    </Section>
  )
}

export default Resumen