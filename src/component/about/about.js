import { BsFillEmojiLaughingFill } from "react-icons/bs";
import profile  from "../../image/mainimage.gif"
import PortfolioContext from "../../context/context";
import {useContext} from "react";

const About = () => {

    const { about } = useContext(PortfolioContext);
    const { bigText, smallText } = about;
    return(
        <section id='about'>
            <div className='about-title'>
                <BsFillEmojiLaughingFill className='about-icon'/>
                <a className='about-title-text'> About Me</a>
            </div>
            <div className='about-box'>
                <img src={profile} className='about-profile-image'/>
                <span className='about-big-text'> { bigText || '자신의 포부를 적어주세요.' }</span>
                <div className='about-small-text-wrapper'>
                    <span className='about-small-text'> { smallText || '자신의 포부를 적어주세요2적어주세요2적어주세요2적적어주세요2적어주세요2적어주세요2어주세요2적어주세요2적어주세요2적어주세요2' } </span>
                </div>
            </div>
        </section>
    )
}

export default About;