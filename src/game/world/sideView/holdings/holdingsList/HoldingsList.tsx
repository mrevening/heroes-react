import { Input } from 'reactstrap'
import './holdingsList.scss'

export default function HoldingsList(){
    return(
        <>
            <Input type="select" name="heroesList" className="holdingList" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
        </>
    )
}
