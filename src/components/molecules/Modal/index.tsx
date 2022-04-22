import { FC } from 'react';

import styles from './styles.module.scss';

interface IProps {
  children: any;
  overlayStyles?: any;
}

export const Modal: FC<IProps> = ({ children, overlayStyles }) => (
  <div
    className={[overlayStyles, styles.overlay].join(',').replaceAll(',', ' ')}
  >
    {console.log(123, 'render')}
    {children}
  </div>
);
