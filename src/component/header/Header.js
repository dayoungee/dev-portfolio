import PortfolioContext from "../../context/context";
import {useContext} from "react";

const Header = () => {
    const { header } = useContext(PortfolioContext);
    const { title, menu } = header;

    return(
        <section id="header">
            <nav className="header-wrapper">
                <a className="header-wrapper-title">{ title || 'YDY portfolio' }</a>
                <ul className="header-wrapper_ul">
                    {menu && menu.map( item => (
                        <li className="header-wrapper_li">{item}</li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Header;