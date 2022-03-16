import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import MainLayout from './layouts/MainLayout';
import {client} from './services/contentful'

function App() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    client.getEntries().then(r => {
      console.log(r);
      setData(r);
    }).catch(e => console.log(e))
  }, [])

  return (
    <div className={styles.App}>
      <MainLayout>
        {data?.items.map((item: any) => <p>{item.fields.name}</p>)}
      </MainLayout>
    </div>
  );
}

export default App;
