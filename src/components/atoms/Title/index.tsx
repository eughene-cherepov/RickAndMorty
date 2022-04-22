import React from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export const Title = ({ customStyle, children }: any) =>
// const cx = cn.bind(styles.title);
  <p className={cn([styles.title, customStyle])}>{children}</p>;
