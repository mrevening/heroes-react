import { Input } from 'reactstrap'
import './heroesList.scss'

export default function HeroesList(){
    return(
        <>
            <Input type="select" name="heroesList" id="heroesList" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
        </>
    )
}
