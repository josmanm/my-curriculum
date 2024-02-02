import { TicketIconContainer, TicketIconImg, } from "./ticketIconStyles"

function TicketIcon(props) {
  return (
    <TicketIconContainer name={props.name}>
      <TicketIconImg src={props.Link} />
    </TicketIconContainer>
  )
}

export default TicketIcon