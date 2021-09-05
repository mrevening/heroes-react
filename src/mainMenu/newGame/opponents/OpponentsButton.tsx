import { useDispatch } from 'react-redux';
import { setHuman } from '../features/scenarioSettingsSlice'

interface OpponentsButtonProps {
    id: Number,
    color : String,
    blocked : Boolean | undefined,
    human: Boolean | undefined
}

export default function OpponentsButton({id, color, blocked = false, human = false}: OpponentsButtonProps) {
    const computerIcon = blocked ? "laptop-fill.svg" : "laptop.svg";
    const humanIcon = "person-circle.svg";
    const icon = human ? humanIcon : computerIcon;

    const dispatch = useDispatch();

    return (
        <>
        <div onClick={() => dispatch(setHuman(id))} className={"button d-flex justify-content-center align-items-center scenario-opponents-button " + color}>
            { <img src={icon} alt="icon" width="32" height="32" /> }
        </div>
        </>
    )
}
