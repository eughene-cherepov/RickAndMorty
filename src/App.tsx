import React, { useState, useRef, useEffect } from "react";
import styles from "./App.module.scss";
import MainLayout from "./layouts/MainLayout";
import isEmpty from "lodash/isEmpty";
import { HomeScreenCard } from "components/molecules";
import { Button } from "./components/atoms";
import { useActions } from "utils/hooks";
import { texts } from "./static";

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { allCharacters, charactersLoading, loadMoreCharacters } = useActions();

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadMoreCharacters(currentPage);
  }, [currentPage]);

  const isBottom = () =>
    // @ts-ignore
    ref?.current?.getBoundingClientRect()?.bottom <= window.innerHeight;

  const trackScrolling = () => {
    isBottom() && setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!charactersLoading) {
      document.addEventListener("scroll", trackScrolling);
    }
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [charactersLoading]);

  const renderContent = () =>
    allCharacters.length > 0 &&
    allCharacters.map((item: any, index: number) => (
      <HomeScreenCard item={item} index={index} key={index} />
    ));

  return (
    <div className={styles.App}>
      <MainLayout isLoading={!isEmpty(allCharacters)}>
        {/*{console.log("1 -> ", charactersLoading)}*/}
        <div className={styles.contentWrapper} ref={ref}>
          {renderContent()}
        </div>
        <Button className={styles.loadMoreButton}>{texts["Load more"]}</Button>
      </MainLayout>
    </div>
  );
}

export default App;
