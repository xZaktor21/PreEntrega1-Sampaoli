import './CartWidget.css'
import carrito from './carrito.png'

const CartWidget = () => {

    return (
        <div class="carrito">
            <img className='imgcarrito' src={carrito} alt="carrito" />
            <strong> 7 </strong>
        </div>
    )
}

export default CartWidget