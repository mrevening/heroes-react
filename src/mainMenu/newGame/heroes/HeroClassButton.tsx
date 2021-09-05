import { useDispatch, useSelector } from 'react-redux';
import { setFraction } from '../features/scenarioSettings/scenarioSettingsSlice'
import { currentFraction } from '../features/fractions/fractionsSlice'
import { useAppSelector, useAppDispatch } from 'hooks'

interface HeroClassButtonProps {
    slot: Number,
    fractionId: Number,
    classBlocked: Boolean | undefined
}

export default function HeroClassButton({slot, fractionId, classBlocked = false}: HeroClassButtonProps) {
    const dispatch = useAppDispatch();
    const fracton = useAppSelector(state => state.fractions.list.filter(f => f.id === fractionId)[0])

    return (
        <>
        <div onClick={() => dispatch(setFraction({ slot: slot, id: fracton.id, classBlocked: classBlocked}))} className={"button d-flex justify-content-center align-items-center scenario-opponents-button "}>
            { <img src={fracton.path} alt="icon" width="32" height="32" className={classBlocked ? "blocked": undefined}/> }
        </div>
        <div>{fracton.text}</div>
        </>
    )
}
