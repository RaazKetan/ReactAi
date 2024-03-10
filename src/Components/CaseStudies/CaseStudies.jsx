import classes from './Casestudies.module.css';
const CaseStudies = () => {
    // const caseStudies = [
    //     {
    //         id: 1,
    //         title: 'Case Study 1',
    //         description: 'Case Study 1 description',
    //         link: 'https://www.example.com/case-study-1'
    //     },
    //     {
    //         id: 2,
    //         title: 'Case Study 2',
    //         description: 'Case Study 2 description',
    //         link: 'https://www.example.com/case-study-2'
    //     },
    //     {
    //         id: 3,
    //         title: 'Case Study 3',
    //         description: 'Case Study 3 description',
    //         link: 'https://www.example.com/case-study-3'
    //     }
    // ]
    return (
        <section className={classes.cases}>
            <h2>Case Studies</h2>
            <div className={classes["case-study"]}>
                <div className={classes.studies}>
                <span>
                <h5>Technology</h5>
                <h5>Dashboard</h5>
                </span>
                    <h3>Case Study 1</h3>
                    <p>Case Study 1 description</p>
                    <button>View Case Study</button>
                </div>
                <div className={classes.studies}>
                    <h3>Case Study 2</h3>
                    <p>Case Study 2 description</p>
                </div>
                <div className={classes.studies}>
                    <h3>Case Study 3</h3>
                    <p>Case Study 3 description</p>
                </div>
            </div>
        </section>       
    )
} 
export default CaseStudies;