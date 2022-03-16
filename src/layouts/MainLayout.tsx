import React from 'react';
import {Header} from '../components/organizms'
import {Image} from '../components/atoms'
import styles from './styles.module.scss'

interface Props {}

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header logo={<Image type='logo' className={styles.logo}/>}/>
        <main>
          {children}
        </main>
      <footer />
    </>
  )
}

export default MainLayout;
