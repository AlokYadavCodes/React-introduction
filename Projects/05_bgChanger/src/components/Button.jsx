function Button({buttonColor,handleButtonClick}){
    return(
        <>
            <button onClick={()=>{handleButtonClick(buttonColor)}} className='px-4 py-1 border mx-4 rounded-full text-white font-semibold capitalize' style={{backgroundColor:buttonColor}}>{buttonColor}
                
            </button>
        </>
    )
}

export default Button;