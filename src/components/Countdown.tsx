import {useState, useEffect} from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    const [time, setTime] = useState(10*60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function notification(){
        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Bip Bip ⏰', {
                body: `Hora de voltar para a aula turma!`
            })
        }
    
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(10*60);
    }

    function pauseCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
    }

    useEffect(()=>{
      if(isActive && time > 0){
        countdownTimeout = setTimeout(()=>{
              setTime(time-1);
          }, 1000)
      } else if (isActive && time === 0){
        notification()
        setHasFinished(true);
        setIsActive(false);
      }
    }, [isActive, time])

    return(
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {isActive ? (
                <>
                    <button type="button"
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick = {pauseCountdown}
                    >Pausar Contagem Regressiva
                    </button>

                    <button type="button"
                    className={`${styles.countdownButton}`}
                    onClick = {resetCountdown}
                    >Reiniciar Contagem Regressiva
                    </button>
                </>
        ) : (
               <>
                    <button type="button"
                    className={styles.countdownButton}
                    onClick = {startCountdown}
                    >Iniciar Contagem Regressiva
                    </button>

                    <button type="button"
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick = {resetCountdown}
                    >Reiniciar Contagem Regressiva
                    </button>
                </>
                )}
        </div>
    )
}