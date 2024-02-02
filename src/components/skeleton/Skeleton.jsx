import { Div, TitleH1 } from '../../styles/general/styles'

function Skeleton(props) {
  return (
    <Div>
        <TitleH1>{props.title}</TitleH1>
    </Div>
  )
}

export default Skeleton