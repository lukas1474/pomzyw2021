import React from 'react';
import styles from './Schedules.module.scss';

const Schedules = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h2 className={styles.schedulesTitle}>Plany/Harmonogramy</h2>
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <p className={styles.schedulesSubtitle}>Plan/harmonogram  działań towarzyszących - Zachodniopomorski Oddział Pomocy Regionalnej z siedzibą w Świdwinie, ul. Słowackiego 12A w ujęciu miesięcznym.</p>
            <br />
            <br />
            <br />
            <p>Na terenie województwa zachodniopomorskiego planowane są następujące działania towarzyszące w ramach programu POPŻ 2014 - 2020 Podprogram 2021 w ujęciu miesięcznym:</p>
            <br />
            <br />
            <ul className={styles.schedulesList}>
              <p className={styles.schedulesBoldText}>Luty, marzec 2022</p>
              <p className={styles.schedulesBoldText}>8  działań – Gmina Rymań, Rąbino, Białogard, Barwice</p>
              <li>
                <p className={styles.schedulesPlaces}>Gmina Rymań – 2  działania</p>
                <p>Indywidualne/ w formie ulotek/ stacjonarne działania ekonomiczne - Efektywne gospodarowanie pieniędzmi.</p>
                <p>Indywidualne/ w formie ulotek/ stacjonarne działania kulinarne - Wykorzystanie produktów POPŻ w gospodarstwie domowym (sałatka z makrelą oraz kotleciki drobiowe).</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina Rąbino – 2 działania</p>
                <p>Indywidualne/ w formie ulotek/ telefoniczne działania aktywizujące w zakresie dietetyki i ekonomii (zdrowe odżywianie).</p>
                <p>Indywidualne/ w formie ulotek/ telefoniczne działania aktywizujące w zakresie ekonomii - Efektywne gospodarowanie pieniędzmi.</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina Białogard – 2 działania</p>
                <p>Indywidualne/ w formie ulotek/ telefoniczne działania aktywizujące w zakresie dietetyki i ekonomii (zdrowe odżywianie).</p>
                <p>Działanie  towarzyszące kulinarne - Wykorzystanie produktów POPŻ w gospodarstwie domowym (sałatka z makreli, pasta z filet z pomidorami).</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina Barwice – 2 działania</p>
                <p>Indywidualne/ w formie ulotek/ telefoniczne działania aktywizujące w zakresie ekonomii - Efektywne gospodarowanie pieniędzmi.</p>
                <p>Indywidualne/ w formie ulotek/ działania dietetyczne - Zdrowy styl życia.</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesExtraText}>Dodatkowo planowane są działania w zakresie wydawania paczek Dino, ubrań, zabawek, spotkania świetlicowe, cotygodniowa pomoc bezdomnym i inne dodatkowe formy aktywizacji przez OPR zachodniopomorskie.</p>
              </li>
            </ul>
            <ul className={styles.schedulesList}>
              <p className={styles.schedulesBoldText}>Kwiecień, maj  2022</p>
              <p className={styles.schedulesBoldText}>4 działania  – Gmina Sławoborze, Białogard</p>
              <li>
                <p className={styles.schedulesPlaces}>Gmina Sławoborze – 2 działania</p>
                <p>Działanie kulinarne - pożyteczne wykorzystanie produktów żywnościowych POPŻ w domowych posiłkach rodzinnych - kotleciki drobiowe oraz sałatka z makreli, groszku i makaronu.</p>
                <p>Działanie ekonomiczne: efektywne gospodarowanie pieniędzmi. Zasady zdrowego żywienia + dietetyka.</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina Białogard – 2 działania</p>
                <p>Działania sportowe - rodzinny piknik strzelecki. Zdrowa i aktywna forma spędzania czasu na świeżym powietrzu.</p>
                <p>Działanie ekonomiczne: efektywne gospodarowanie pieniędzmi. Zasady zdrowego żywienia + dietetyka.</p>
              </li>
            </ul>
            <ul className={styles.schedulesList}>
              <p className={styles.schedulesBoldText}>Czerwiec, lipiec, sierpień, wrzesień   2022</p>
              <p className={styles.schedulesBoldText}>8  działań  – Gmina Czaplinek, Szczecin, Karlino, Koszalin</p>
              <li>
                <p className={styles.schedulesPlaces}>Gmina Czaplinek  - 2 działania</p>
                <p>Działanie ekonomiczne, dietetyczne : efektywne gospodarowanie pieniędzmi. Zasady zdrowego żywienia + dietetyka.</p>
                <p>Działanie kulinarne - pożyteczne wykorzystanie produktów żywnościowych POPŻ w domowych posiłkach rodzinnych - kotleciki drobiowe oraz sałatka z makreli, groszku i makaronu.</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina Karlino – 2 działania</p>
                <p>Działanie ekonomiczne: efektywne gospodarowanie pieniędzmi. Zasady zdrowego żywienia + dietetyka.</p>
                <p>Działanie kulinarne - pożyteczne wykorzystanie produktów żywnościowych POPŻ w domowych posiłkach rodzinnych - kotleciki drobiowe oraz sałatka z makreli, groszku i makaronu.</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina Koszalin – 2 działania</p>
                <p>Działanie ekonomiczne: efektywne gospodarowanie pieniędzmi. Zasady zdrowego żywienia, przepisy kulinarne + dietetyka.</p>
                <p>Działanie dietetyczne - Zdrowy styl życia.</p>
              </li>
              <br />
              <li>
                <p className={styles.schedulesPlaces}>Gmina / Miasto Szczecin  – 2 działania</p>
                <p>Działanie ekonomiczne: efektywne gospodarowanie pieniędzmi. Zasady zdrowego żywienia + dietetyka.</p>
                <p>Działanie kulinarne - pożyteczne wykorzystanie produktów żywnościowych POPŻ w domowych posiłkach rodzinnych - kotleciki drobiowe oraz sałatka z makreli, groszku i makaronu.</p>
              </li>
              <br />
              <li>
                <p  className={styles.schedulesExtraText}>Dodatkowo planowane są działania w zakresie wydawania paczek Dino, ubrań, zabawek, spotkania świetlicowe, cotygodniowa pomoc bezdomnym i inne dodatkowe formy aktywizacji przez OPR zachodniopomorskie.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
