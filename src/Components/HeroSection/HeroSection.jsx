import classes from './HeroSection.module.css';


const HeroSection = () => {
    return (
        <section className={classes["main-section"]}>
          <h1>Combining  
           <span> Open-AI </span>
            and the simplicity of <span> React </span></h1>
          <p>Generate professional and consistent names for your <br/> web projects with the power of AI and the ease of React development.</p>
          <button className={classes["get-started-btn"]}>Get Started</button>
        </section>
      );
}
export default HeroSection;