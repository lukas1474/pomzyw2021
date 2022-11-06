import React from 'react';
import styles from './Gdpr.module.scss';

import gdprData from '../../../data/gdpr.json';

const Gdpr = () => {
  return (
    <div className={styles.root} id="rodo">
      <div className={styles.section}>
        <h2 className={styles.rodoTitle}>Klauzula informacyjna dotycząca przetwarzania danych osobowych</h2>
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            {gdprData.data &&
          Array.isArray(gdprData.data) &&
          gdprData.data.map((item) => (
            <div key={item.id} className={styles.aboutUsItem}>
              {item.type === `title` ? (
                <p className={styles.rodoDetailsTitle} key={item.id}>
                  {item.value}
                </p>
              ) : null}
              {item.type === `paragraph` ? (
                <p className={styles.rodoDetails} key={item.id}>
                  {item.value}
                </p>
              ) : null}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gdpr;
