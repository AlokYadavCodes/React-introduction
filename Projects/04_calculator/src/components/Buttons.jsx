import Button from "./Button";
import style from './buttons.module.css'

function Buttons({handleButtonClick}){
    let btnArr=['C',1,2,'+',3,4,'-',5,6,'*',7,8,'/',9,0,'.',"backspace",'=']
    return (
        <>
        <div className={style.buttons}>
            {btnArr.map((button)=>(
                <Button handleButtonClick={handleButtonClick} button={button}></Button>
            ))}
        </div>
        </>
    )
}

export default Buttons;