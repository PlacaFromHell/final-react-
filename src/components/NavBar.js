import { CartWidget } from './CartWidget.js';

export const NavBar = () => {
    return <div className="nav">
      <div className="item"><img src="https://media.discordapp.net/attachments/452721227094818849/1143383115616755823/200px-Infernape.png" className="logo"/></div>
      <div className="item">Contacto</div>
      <div className="item">Nosotros</div>
      <div className="item">Productos</div>
      <div className="item">
      <CartWidget />
      </div>
    </div>
  }

  