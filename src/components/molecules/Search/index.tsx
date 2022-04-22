import React, { FC } from 'react';

import { images } from '../../../utils/constants';
import { Button, Image } from '../../atoms';
import styles from './styles.module.scss';

interface IProps {}

export const Search: FC<IProps> = ({}) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <Image type={images.loop} className={styles.searchIcon} />
      <input className={styles.input} onChange={(e) => e} />
    </div>

    <Button
      className={styles.button}
      onClick={() => {
        console.log('search button click');
      }}
    >
      Submit
    </Button>
  </div>
);
