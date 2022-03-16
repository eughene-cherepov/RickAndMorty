import styles from './styles.module.scss';
import {Title} from '../../atoms'

type PropTypes = {
  logo: JSX.Element | null;
}

export const Header: React.FC<PropTypes> = ({logo}) => {
  return (
    <header className={styles.AppHeader}>
      {logo}
      <Title customStyle={styles.customTitle}>
        ty pidor
      </Title>
    </header>
  )
}
