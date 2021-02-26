import styles from '../styles/components/Course.module.css'
export function Course(){
    return(
        <div className={styles.courseContainer}>
            <img src="https://media.glassdoor.com/sqll/1983459/digital-house-argentina-squarelogo-1585913637229.png" alt="logo"/>
            <div>
                <strong>Curso Fullstack NodeJS</strong>
                <p>Aula do dia {today}</p>
            </div>
       </div>
    );
}

let today = new Date().toLocaleDateString();

