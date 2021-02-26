import Head from 'next/head';
import { Countdown } from '../components/Countdown';
import { Course } from '../components/Course';
import styles from '../styles/pages/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Player } from '../components/Player';



export default function Home() {
    return (
  <div className={styles.container}>
    <Head>
      <title>Timer DH</title>
    </Head>
    <section>
      <div>
        <Course/>
        <Countdown/>
      </div>
      <div>
        <Player/>
      </div>
    </section>
  </div>
  )
}

// var iframe = document.getElementsByTagName('iframe')[0];

// iframe.contentWindow.postMessage('{"method":"setVolume", "value":0}','*');
