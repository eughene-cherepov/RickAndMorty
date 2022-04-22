import { FC } from 'react';

// import { images } from '../../../utils/constants';
// import { Button, Image } from '../../atoms';
import styles from './styles.module.scss';

interface IProps {
  wrapperRef: any;
  content: any;
}

export const CardModalContent: FC<IProps> = ({ wrapperRef, content }) => {
  const {
    image, created, gender, location, name, origin, species, status,
  } = content;

  const renderSimpleStrings = (items: any) => {
    console.log(items);
    return Object.values(items).map((item: any, index: any) => <p>{`${Object.keys(items)[index]} -> ${item}`}</p>);
  };

  return (
    <div className={styles.container} ref={wrapperRef}>
      <img src={image} alt="character face" />
      {console.log(1, content)}
      {renderSimpleStrings({
        created, gender, name, species, status,
      })}
      <p>{location.name}</p>
      <p>{origin.name}</p>
    </div>
  );
};
