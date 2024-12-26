import { Div, Section, TitleH1 } from "../../styles/general/styles";

const pdfUrl = "https://github.com/josmanm/my-curriculum/blob/main/public/Josman.pdf"

function Resumen() {
  return (
    <Section>
      <Div>
        <TitleH1>Resumen</TitleH1>
        <iframe
            src={pdfUrl}
            title="PDF Viewer"
            style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      </Div>
    </Section>
  )
}

export default Resumen