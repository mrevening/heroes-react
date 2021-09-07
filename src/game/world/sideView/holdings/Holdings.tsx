import './holdings.scss'
import HeroesList from "./heroesList/HeroesList"
import CastlesList from "./castlesList/CastlesList"
import HoldingsList from "./holdingsList/HoldingsList"
import { Col } from "reactstrap"

export default function Holdings(){
    return(
        <>
            <Col className='holdingList'><HoldingsList /></Col>
            <Col className='holdingList'><HoldingsList /></Col>
        </>
    )
}
