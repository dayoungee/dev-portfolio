import mainImage from '../../image/mainimage.gif';
import PortfolioContext from "../../context/context";
import {useContext} from "react";
const Main = () => {
    const { main } = useContext(PortfolioContext);
    return(
        <section>
            <div className='main-wrapper'>
                <img className='main-image' src={mainImage}></img>
                <span className='main-text'>{ main.title || 'hello!'}</span>
            </div>
        </section>
    )

}

export default Main;