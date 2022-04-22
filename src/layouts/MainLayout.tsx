import { Image, Loader } from 'components/atoms';
import { Header } from 'components/organizms';

import styles from './styles.module.scss';

interface Props {
  children: any;
  isLoading: boolean;
}

const MainLayout: React.FC<Props> = ({ children, isLoading }) => (
  <>
    <Header
      logo={(
        <div className={styles.logoWrapper}>
          <Image type="logo" className={styles.logo} />
        </div>
      )}
    />
    <main>{!isLoading ? <Loader /> : children}</main>
    <footer />
  </>
);

export default MainLayout;
