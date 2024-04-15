import classes from './HeroSection.module.css';
import { NavLink } from 'react-router-dom';
import CaseStudies from '../CaseStudies/CaseStudies';

const HeroSection = () => {
    return (
        <section className={classes["main-section"]}>
          <h1>Combining  
           <span> Gemini-Ai </span>
            and the simplicity of <span> React </span></h1>
          <p>Generate professional and consistent names for your <br/> web projects with the power of AI and the ease of React development.</p>
          <NavLink to="/reactai">
          <button className={classes["get-started-btn"]}>Get Started</button>
          </NavLink>
          <CaseStudies />
        </section>
      );
}
export default HeroSection;