import {useDispatch, useSelector} from "react-redux";
import {togglePrivacy} from "../store/privacy.js";

function Counter() {
    const count = useSelector(state => state.counter.value);
    const isPrivacy=useSelector(state=>state.isPrivacy);
    const dispatch = useDispatch();
    function handlePrivacyToggleClick(){
        dispatch(togglePrivacy())
    }

    return (
        <>
            <div className="alert alert-light counter-div" role="alert">
                {isPrivacy? 'Access Denied': `Count: ${count}`}

                <button
                    onClick={handlePrivacyToggleClick}
                    type="button" className="btn btn-secondary btn-sm">Privacy Toggle</button>
            </div>

        </>
    )
}

export default Counter;