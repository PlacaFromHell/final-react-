import { NavLink, Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="contenedorCategorias">
        <NavLink to={`/category/switches`}>
            <button className="botoneta">
                {" "}
                Switches
                <div className="a">
                </div>
            </button>
        </NavLink>
        <NavLink to={`/category/keycaps`}>
            <button className="botoneta">
                {" "}
                Keycaps
                <div className="a">
                </div>
            </button>
         </NavLink>
         <NavLink to={`/category/micros`}>
            <button className="botoneta">
                {" "}
                Microcontroladores
                <div className="a">
                </div>
            </button>
          </NavLink>
    </div>
  );
};

export default Category;