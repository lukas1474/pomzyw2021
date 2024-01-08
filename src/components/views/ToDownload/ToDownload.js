import React from 'react';
import styles from './ToDownload.module.scss';

const ToDownload = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h2 className={styles.toDownloadTitle}>Dokumenty do pobrania</h2>
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <h4 className={styles.announcementsSubtitle}>2022</h4>
            <ul>
              <li>
                <p>Opis działań realizowanych przez Organizację Partnerską o zasięgu ogólnopolskim Kościołem Starokatolickim w Rzeczypospolitej Polskiej (OPO) w ramach Programu Operacyjnego Pomoc Żywnościowa 2014-2020 Europejskiego Funduszu Pomocy Najbardziej Potrzebującym realizowanego w Podprogramie 2021.</p>
                <p>Wykaz magazynów organizacji partnerskich regionalnych w ramach Programu Operacyjnego Pomoc Żywnościowa 2014-2020 współfinansowanego z Europejskiego Funduszu Pomocy Najbardziej Potrzebującym Podprogram 2021.</p>
                <a href="/documents/opisDzialan.pdf" download="Pomoc_zywnosciowa_opis_dzialan.pdf">Pobierz</a>
              </li>
              <div className={styles.fileToDowloadBottomLine}></div>
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
              <div className={styles.fileToDowloadBottomLine}></div>
            </ul>
            <h4 className={styles.announcementsSubtitle}>2023</h4>
            <ul className={styles.fileContainer}>
              <li>
                <p>Plan/harmonogram działań towarzyszących - Zachodniopomorski Oddział Pomocy Regionalnej z siedzibą w Świdwinie, ul. Słowackiego 12A w ujęciu miesięcznym.</p>
                <a href="/documents/Harmonogram Zachodniopomorski OPR.pdf" download="Plan/harmonogram działań towarzyszących - Zachodniopomorski Oddział Pomocy Regionalnej.pdf">Pobierz</a>
              </li>
              <div className={styles.fileToDowloadBottomLine}></div>
              <br />
              <li>
                <p>Realizacja Podprogramu 2021 Plus w ramach Programu Operacyjnego Pomoc Żywnościowa 2014-2020.</p>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z przebiegu działań w ramach środków towarzyszących</p>
                <a href="/documents/Załącznik nr 12_2021 Plus.pdf" download="Sprawozdanie końcowe z przebiegu działań w ramach środków towarzyszących - Załącznik nr 12_2021 Plus.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z dystrybucji artykułów spożywczych - strona 1</p>
                <a href="/documents/Załącznik nr 11_2021 Plus 1.pdf" download="Sprawozdanie końcowe z dystrybucji artykułów spożywczych - Załącznik nr 11_2021 Plus 1.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z dystrybucji artykułów spożywczych - strona 2</p>
                <a href="/documents/Załącznik nr 11_2021 Plus 2.pdf" download="Sprawozdanie końcowe z dystrybucji artykułów spożywczych - Załącznik nr 11_2021 Plus 2.pdf">Pobierz</a>
              </li>
              <br />
              <li>
                <p>Sprawozdanie końcowe z dystrybucji artykułów spożywczych - strona 3 i 4</p>
                <a href="/documents/Załącznik nr 11_2021 Plus 3.pdf" download="Sprawozdanie końcowe z dystrybucji artykułów spożywczych - Załącznik nr 11_2021 Plus 3.pdf">Pobierz</a>
              </li>
              <div className={styles.fileToDowloadBottomLine}></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDownload;
