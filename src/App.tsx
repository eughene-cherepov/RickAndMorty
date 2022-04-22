import { useState, useRef, useEffect } from 'react';

import isEmpty from 'lodash/isEmpty';

import { Loader } from 'components/atoms';
import { HomeScreenCard } from 'components/molecules';
import MainLayout from 'layouts/MainLayout';
import { useActions } from 'utils/hooks';

import styles from './App.module.scss';

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { allCharacters, charactersLoading, loadMoreCharacters } = useActions();

  const ref = useRef<HTMLInputElement>(null);
  const appRef = useRef(null);

  useEffect(() => {
    loadMoreCharacters(currentPage);
  }, [currentPage]);

  const isBottom = () => !!ref.current && ref.current.getBoundingClientRect()?.bottom <= window.innerHeight;

  const trackScrolling = () => {
    isBottom() && setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!charactersLoading) {
      document.addEventListener('scroll', trackScrolling);
    }
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, [charactersLoading]);

  useEffect(() => {
    window.scrollTo(appRef?.current!);
  }, []);

  const renderContent = () => allCharacters.length
    && allCharacters.map((item: any) => (
      <HomeScreenCard item={item} key={item.id} />
    ));

  return (
    <div className={styles.App} ref={appRef}>
      <MainLayout isLoading={!isEmpty(allCharacters)}>
        <div className={styles.contentWrapper} ref={ref}>
          {renderContent()}
        </div>
        {charactersLoading && <Loader />}
      </MainLayout>
    </div>
  );
}

export default App;
