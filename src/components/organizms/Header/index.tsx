import React from "react";
import styles from "./styles.module.scss";
import { Search } from "../../molecules/Search";

interface PropTypes {
  logo: JSX.Element | null;
}

export const Header: React.FC<PropTypes> = ({ logo }) => {
  return (
    <header className={styles.AppHeader}>
      {logo}
      <Search />
    </header>
  );
};
