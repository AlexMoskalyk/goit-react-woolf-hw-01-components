import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const getItem = () => {
    return stats.map(({ id, label, percentage }) => (
      <li key={id} className={`${styles.item} ${getItemClassNameColor(label)}`}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    ));
  };

  const getItemClassNameColor = label => {
    switch (label) {
      case '.docx':
        return `${styles.docx}`;
      case '.pdf':
        return `${styles.pdf}`;
      case '.mp3':
        return `${styles.mp3}`;
      case '.psd':
        return `${styles.psd}`;

      default:
        break;
    }
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>{getItem()}</ul>
    </section>
  );
};

export default Statistics;
