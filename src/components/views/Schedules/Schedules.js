import React from 'react';
import styles from './Schedules.module.scss';

const Schedules = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h2 className={styles.schedulesTitle}>Dokumenty do pobrania</h2>
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <ul>
              <li>
                <p>Opis działań realizowanych przez Organizację Partnerską o zasięgu ogólnopolskim Kościołem Starokatolickim w Rzeczypospolitej Polskiej (OPO) w ramach Programu Operacyjnego Pomoc Żywnościowa 2014-2020 Europejskiego Funduszu Pomocy Najbardziej Potrzebującym realizowanego w Podprogramie 2021.</p>
                <p>Wykaz magazynów organizacji partnerskich regionalnych w ramach Programu Operacyjnego Pomoc Żywnościowa 2014-2020 współfinansowanego z Europejskiego Funduszu Pomocy Najbardziej Potrzebującym Podprogram 2021.</p>
                <a href="/documents/opisDzialan.pdf" download="Pomoc_zywnosciowa_opis_dzialan.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z przebiegu działań w ramach środków towarzyszących</p>
                <a href="/documents/Załącznik nr 12_2021.pdf" download="Sprawozdanie końcowe z przebiegu działań w ramach środków towarzyszących - załącznik nr 12_2021.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z dystrybucji artykułów spożywczych - strona 1</p>
                <a href="/documents/Załącznik nr 11_2021-str1.pdf" download="Sprawozdanie końcowe z dystrybucji artykułów spożywczych - Załącznik nr 11_2021 - strona 1.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z dystrybucji artykułów spożywczych - strona 2</p>
                <a href="/documents/Załącznik nr 11_2021-str2.pdf" download="Sprawozdanie końcowe z dystrybucji artykułów spożywczych - Załącznik nr 11_2021 - strona 2.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z dystrybucji artykułów spożywczych - strona 3 i 4</p>
                <a href="/documents/Załącznik nr 11_2021-str 3 i 4.pdf" download="Sprawozdanie końcowe z dystrybucji artykułów spożywczych - Załącznik nr 11_2021 - strona 3 i 4.pdf">Pobierz</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
