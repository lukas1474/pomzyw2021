import React from 'react';
import styles from './Announcement.module.scss';
const Announcement = (announcement) => {
  return (
    <div className={styles.root}>
      <h6 className={styles.announcementTitle}>{announcement.type ? `${announcement.type}: ${announcement.title}` : announcement.title}</h6>
      {
        announcement.content.slice(0).reverse().map((item, index) => (
          <div key={index} className={styles.announcementDetails}>
            <p className={styles.announcementDate}>{item.date}</p>
            <p>{item.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Announcement;
