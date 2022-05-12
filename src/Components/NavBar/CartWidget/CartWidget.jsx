import CartIcon from "./CartIcon.png";

function CartWidget() {
  function holaEnConsola() {
    console.log("Hola en consola");
  }

  return (
    <img
      src={CartIcon}
      className="CartIcon"
      alt="CartIcon"
      onClick={holaEnConsola}
    />
  );
}

export default CartWidget;
