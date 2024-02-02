import Skeleton from "../../components/skeleton/Skeleton"
import { Input, Section } from "../../styles/general/styles"

function Contact() {
  return (
    <Section>
      <Skeleton title="Contact" />
      <div>
        <Input type="text" placeholder="Nombre" />
        <Input type="text" placeholder="Apellido" />
        <Input type="text" placeholder="Correo Electronico"/>
        <Input type="text" placeholder="Asunto"/>
        <button>Enviar</button>
      </div>  
    </Section>
  )
}

export default Contact