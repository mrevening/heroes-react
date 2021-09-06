import './sideView.scss'
import { Row, Col} from 'reactstrap';
import Activities from './shortcut/Shortcut'
import Holdings from './holdings/Holdings'
import MiniMap from './miniMap/MiniMap'

export default function SideView(){
    return(
        <Col id="side">
            <Row id="miniMap"><MiniMap /></Row>
            <Row id="holdings"><Holdings /></Row>
            <Row id="activities"><Activities /></Row>
        </Col>
    )
}
