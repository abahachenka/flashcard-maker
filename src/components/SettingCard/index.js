import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.scss';

export default function SettingCard({
  isActive,
  isHorizontal,
  onClick,
  icon,
  label,
}) {
  return (
    <span
      className={cn(styles.settingCard, {
        [styles.settingCardActive]: isActive,
        [styles.settingCardHorizontal]: isHorizontal,
      })}
      onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label && <span className={styles.settingCardLabel}>{label}</span>}
    </span>
  );
}
