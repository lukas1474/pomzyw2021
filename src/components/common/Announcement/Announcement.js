import React from 'react';
import styles from './Announcement.module.scss';

const Announcement = (announcement) => {
  return (
    <div className={`col-12 col-md-8 ${styles.departmentName}`}>
      <p className={styles.announcementTitle}>{announcement.type ? `${announcement.type}: ${announcement.title}` : announcement.title}</p>
      <p className={styles.announcementDetails}>{announcement.date}</p>
      {
        announcement.content.map((item, index) => (
          <p key={index} className={styles.announcementDetails}>{item.text}</p>))
      }
    </div>
  );
};

export default Announcement;
