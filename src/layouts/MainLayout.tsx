import React from "react";
import { Header } from "../components/organizms";
import { Image, Loader } from "../components/atoms";
import styles from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  isLoading: boolean;
}

const MainLayout: React.FC<Props> = ({ children, isLoading }) => {
  return (
    <>
      <Header
        logo={
          <div className={styles.logoWrapper}>
            <Image type="logo" className={styles.logo} />
          </div>
        }
      />
      <main>{!isLoading ? <Loader /> : children}</main>
      <footer />
    </>
  );
};

export default MainLayout;
