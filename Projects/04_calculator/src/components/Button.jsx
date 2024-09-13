import style from "./button.module.css";

function Button({ button, handleButtonClick }) {
  if (button === "backspace") {
    return (
      <>
        <div
          onClick={(e) => {
            handleButtonClick(e);
          }}
          className={style.button}
        >
          <span class="material-symbols-outlined">backspace</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        onClick={(e) => {
          handleButtonClick(e);
        }}
        className={style.button}
      >
        {button}
      </div>
    </>
  );
}

export default Button;
