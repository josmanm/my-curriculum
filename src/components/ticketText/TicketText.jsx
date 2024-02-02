import { TicketTextContainer, TicketTextP } from "./TicketTextStyles"


function TicketText(props) {
  return (
    <TicketTextContainer >
        <TicketTextP title={props.title}>{props.text}</TicketTextP>
    </TicketTextContainer>
  )
}

export default TicketText