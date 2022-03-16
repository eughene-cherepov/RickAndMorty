import styles from './styles.module.scss';
import {Title} from '../../atoms'
import {Search} from "../../molecules/Search";

type PropTypes = {
  logo: JSX.Element | null;
}

export const Header: React.FC<PropTypes> = ({logo}) => {
  return (
    <header className={styles.AppHeader}>
      {logo}
      <Search />
    </header>
  )
}
