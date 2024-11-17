import {useDispatch, useSelector} from "react-redux";

function Counter() {
    const count = useSelector(state => state.count);
    const countIsPrivate=useSelector(state => state.countIsPrivate);
    const dispatch = useDispatch();
    function handlePrivacyToggleClick(){
        dispatch({type: 'TOGGLE_PRIVACY'})
    }
    return (
        <>
            <div className="alert alert-light counter-div" role="alert">
                {countIsPrivate? 'Access Denied': `Count: ${count}`}

                <button
                    onClick={handlePrivacyToggleClick}
                    type="button" className="btn btn-secondary btn-sm">Privacy Toggle</button>
            </div>

        </>
    )
}

export default Counter;