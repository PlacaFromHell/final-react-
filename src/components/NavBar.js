import { CartWidget } from './CartWidget.js';
import { NavLink, Link } from 'react-router-dom';
import Category from './Category.js';

export const NavBar = () => {
    return <div className="nav">
      <Link to='/'><img className="logo" src="https://media.discordapp.net/attachments/452721227094818849/1143383115616755823/200px-Infernape.png" alt="Infernape"/></Link>
      <Category/>
      <CartWidget />
    </div>
  }

  