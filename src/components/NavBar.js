import { Component } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
class Navbar extends Component {
    state = {clicked: false}
    handleClick =() =>{
        this.setState({clicked:
        !this.state.clicked})
    }
    render(){
    return (
        <>
        <nav>

            <a href="/">
            <div><img src="https://media.discordapp.net/attachments/452721227094818849/1160085938463068230/stephen-young-infernape.jpg?ex=65336139&is=6520ec39&hm=d8db77ebf1bed09ed12196f1dae8fe9e1d5db9914b6f6b39cc245fb5ede36c39&=&width=955&height=675" alt="Logo" className="logo"/></div>
            </a>
            <div>
                <ul id= "navbar" className="nav">
                <li><a href="/" className="item">Catálogo</a></li>
                <li><Link className="menu-link item" to="/category/switches">Switches</Link></li>
                <li><Link className="menu-link item" to="/category/micros">Micros</Link></li>
                <li><Link className="menu-link item" to="category/keycaps">Keycaps</Link></li>
                <li><CartWidget/></li>

                

                </ul>
            </div>

            <div id= "mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
        </>
    )
}
}

export default Navbar;