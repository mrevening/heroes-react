import { setFraction } from '../features/scenarioSettingsSlice'
import { currentFraction } from '../features/fractionsSlice'
import { useAppSelector, useAppDispatch } from 'state/hooks'

interface HeroClassButtonProps {
    slot: Number,
    fractionId: Number,
    classBlocked: Boolean | undefined
}

export default function HeroClassButton({slot, fractionId, classBlocked = false}: HeroClassButtonProps) {
    const dispatch = useAppDispatch();
    const fracton = useAppSelector(state => currentFraction(state, fractionId))

    return (
        <>
        <div onClick={() => dispatch(setFraction({ slot: slot, id: fracton.id, classBlocked: classBlocked}))} className={"button d-flex justify-content-center align-items-center scenario-opponents-button "}>
            { <img src={fracton.path} alt="icon" width="32" height="32" className={classBlocked ? "blocked": undefined}/> }
        </div>
        <div>{fracton.text}</div>
        </>
    )
}
