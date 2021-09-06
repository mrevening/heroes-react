import './Holdings.scss'
import Heroes from "./heroes/Heroes"
import Castles from "./castles/Castles"
import { Row, Col } from "reactstrap"

export default function Holdings(){
    return(
        <>

            <Col id='heroes'><Heroes /></Col>
            <Col id='castles'><Castles /></Col>
  
        </>
    )
}
