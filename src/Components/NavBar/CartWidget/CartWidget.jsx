import CartIcon from "./CartIcon.png";

export default function CartWidget() {
  const HolaEnConsole = () => console.log("Hola");

  return (
    <img src={CartIcon} className="f" alt="CartIcon" onClick={HolaEnConsole} />
  );
}
