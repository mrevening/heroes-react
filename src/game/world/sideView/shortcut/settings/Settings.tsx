import { Button } from 'reactstrap'
import { useAppDispatch } from 'state/hooks'
import { setShowMainManu } from 'app/AppSlice'

export default function Settings(){
    const dispatch = useAppDispatch();

    return(
        <>
            <div>
                <Button color="primary" onClick={() => { dispatch(setShowMainManu())} }>Go Back to main menu</Button>
            </div>
        </>
    )
}
