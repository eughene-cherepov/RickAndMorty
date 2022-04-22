import React, { FC } from 'react';

import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

export const Loader: FC<IProps> = ({}) => (
  <div className={styles.container}>
    <div className={styles.dot} />
    <div className={styles.dot} />
    <div className={styles.dot} />
  </div>
);
