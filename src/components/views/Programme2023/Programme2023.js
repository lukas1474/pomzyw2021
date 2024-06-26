import React from 'react';
import styles from './Programme2023.module.scss';
import departments from '../../../data/departments2023.json';

const Schedules = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h2 className={styles.schedulesTitle}>Program fundusze europejskie na pomoc żywnościową 2021-2027 (FEPŻ)</h2>
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <p className={styles.schedulesSubtitle}>O projekcie:</p>
            <br />
            <br />
            <br />
            <p>Celem projektu jest przeciwdziałanie deprywacji materialnej przez udzielanie pomocy żywnościowej osobom najbardziej potrzebującym oraz zapewnienie działań towarzyszących, mających na celu wspieranie ich włączenia społecznego.</p>
            <br />
            <p>Z&nbsp;pomocy żywnościowej mogą skorzystać osoby i&nbsp;rodziny znajdujące się w&nbsp;trudnej sytuacji życiowej, spełniające kryteria określone w&nbsp;art.&nbsp;7&nbsp;ustawy z&nbsp;dnia 12&nbsp;marca&nbsp;2004&nbsp;r. o&nbsp;pomocy społecznej (Dz. U. z&nbsp;2023&nbsp;poz.&nbsp;901 i&nbsp;1693) i&nbsp;których dochód nie przekracza kryterium dochodowego wskazanego przez Instytucję Zarządzającą.</p>
            <br />
            <br />
            <ul className={styles.schedulesList}>
              <p className={styles.schedulesSubtitle}>Działania realizowane w&nbsp;ramach projektu:</p>
              <li>Organizacja i&nbsp;koordynacja sieci dystrybucji pomocy żywnościowej składającej się z&nbsp;organizacji partnerskich regionalnych i&nbsp;lokalnych;</li>
              <li>Racjonalne zagospodarowanie artykułów spożywczych otrzymanych z&nbsp;OPR oraz z&nbsp;innych źródeł, na potrzeby udzielania pomocy żywnościowej osobom najbardziej potrzebującym;</li>
              <li>Bezpłatne przekazanie artykułów spożywczych osobom potrzebującym (ubogim, rodzinom wielodzietnym, osobom w&nbsp;kryzysie bezdomności, migrantom – zgodnie z&nbsp;art. 7&nbsp;Ustawy o&nbsp;pomocy społecznej), zakwalifikowanym do otrzymania pomocy żywnościowej przez Ośrodek Pomocy Społecznej;</li>
              <li>Prowadzenie działań w&nbsp;ramach środków towarzyszących wśród osób najbardziej potrzebujących, zakwalifikowanych do objęcia pomocą żywnościową, mających na celu ich włączenie społeczne;</li>
              <li>Przeciwdziałanie marnowaniu żywności poprzez udostępnianie osobom zakwalifikowanym do otrzymania pomocy żywnościowej zgodnie z&nbsp;zasadami Programu dodatkowej żywności pochodzącej z&nbsp;darowizn.</li>
              <br />
            </ul>

            <div className={`container ${styles.container}`}>
              <ul className={`row ${styles.departmentsList}`}>
                {departments.department.map((department, index) => {
                  return(
                    <li className={`col-12 col-md-8 ${styles.departmentContainer}`} key={index}>
                      <p className={styles.departmentTitle}>{department.title}</p>
                      <p className={styles.departmentDetails}>{department.address}</p>
                      {department.correspondence ?  <p className={styles.departmentDetails}> <b>Adres do korespondecji: </b>{department.correspondence}</p> : null}
                      <p className={styles.departmentDetails}><b>{department.warehouse}</b></p>
                      <p className={styles.departmentDetails}>{department.warehouseAddress}</p>
                      <p className={styles.departmentDetails}>Kontakt do magazyniera:</p>
                      {department.storekeepers.map((storekeeper, index) => (
                        <div key={index} className={styles.departmentsList}>
                          <p className={styles.departmentDetails}>{storekeeper.name}</p>
                          <a className={styles.departmentDetails} href={`tel:${storekeeper.tel}`}>{storekeeper.tel}</a>


                        </div>
                      ))}

                      <p className={styles.departmentDetails}>Kontakt do spraw dostaw:</p>
                      {department.coordinators.map((coordinator, index) => (
                        <div key={index} className={styles.departmentsList}>
                          <p className={styles.departmentDetails}>{coordinator.name}</p>
                          <a className={styles.departmentDetails} href={`tel:${coordinator.tel}`}>{coordinator.tel}</a>


                        </div>
                      ))}

                    </li>
                  );
                })}
              </ul>
            </div>

            <br />
            <img className={styles.image} src="/images/dofinansowanie.png" alt="Dofinansowanie" />
            <br />
            <p>Łączna wartość projektu - 2224381,74 PLN (słownie: dwa miliony dwieście dwadzieścia cztery tysiące trzysta osiemdziesiąt jeden złotych 74/100) w&nbsp;tym: płatność z&nbsp;tytułu środków europejskich: 2&nbsp;001&nbsp;943,56 PLN (słownie: dwa miliony jeden tysiąc dziewięćset czterdzieści trzy złote 56/100) dotacja celowa z&nbsp;budżetu krajowego: 222&nbsp;438,18 PLN (słownie: dwieście dwadzieścia dwa tysiące czterysta trzydzieści osiem złotych 18/100).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
