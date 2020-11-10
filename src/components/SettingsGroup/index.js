import React from 'react';
import styles from './SettingsGroup.module.scss';

export default function SettingsGroup({ title, children }) {
  return (
    <div className={styles.settingsGroup}>
      <h3 className={styles.settingsGroupTitle}>{title}</h3>
      <div className={styles.settingsPreview}>{children}</div>
    </div>
  );
}
