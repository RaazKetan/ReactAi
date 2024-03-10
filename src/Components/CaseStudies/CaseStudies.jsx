import classes from "./Casestudies.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const CaseStudies = () => {
  const caseStudies = [
      {
          id: 1,
          title: 'Brewnation',
          description: 'Coffee Lovers Rejoice! A Place to Share Your Love for Coffee and Connect with Other Coffee Lovers. Build Your Coffee Profile and Share Your Coffee Experiences with the World.',
          link: 'https://www.example.com/case-study-1'
      },
      {
          id: 2,
          title: 'BudgetBud',
          description: 'BudgetBud is a budgeting app that helps you track your expenses and manage your budget. It is a simple and easy-to-use app that helps you keep track of your spending and stay on top of your finances.',
          link: 'https://www.example.com/case-study-2'
      },
      {
          id: 3,
          title: 'Portfolio Ketan Raj',
          description: 'Portfolio Ketan Raj is a personal portfolio website that showcases the work of Ketan Raj. It is a simple and clean website that highlights Ketan Raj’s skills and experience. The website is designed to be user-friendly and easy to navigate.',
          link: 'https://www.example.com/case-study-3'
      }
  ]
  return (
    <section className={classes.cases}>
      <h3>Case Studies</h3>
      <div className={classes["case-study"]}>
      {caseStudies.map((caseStudy) => (
            <div className={classes.studies} key={caseStudy.id}>
                <span>
                <h5>Technology</h5>
                <h5>Dashboard</h5>
                </span>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
                <button>View Case Study 
                <FontAwesomeIcon className={classes["right-arrow"]} icon={faArrowRight} />
                </button>
            </div>
      ))}
       
      </div>
    </section>
  );
};
export default CaseStudies;
