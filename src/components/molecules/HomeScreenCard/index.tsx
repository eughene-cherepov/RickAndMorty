import {
  useCallback, useRef, useState, FC,
} from 'react';

import { Button, Title } from 'components/atoms';
import { Modal, CardModalContent } from 'components/molecules';
import { useClickOutside } from 'utils/hooks';

import styles from './styles.module.scss';

interface IProps {
  item: any;
}

export const HomeScreenCard: FC<IProps> = ({ item }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleShowMoreClick = () => {
    setModalVisible(!modalVisible);
  };
  const wrapperRef = useRef(null);

  const onClickOutside = () => setModalVisible((prev) => !prev);

  useClickOutside(wrapperRef, onClickOutside);

  const renderModal = useCallback((modalContent) => (
    modalVisible && (
      <Modal overlayStyles={styles.modalOverlay}>
        <CardModalContent wrapperRef={wrapperRef} content={modalContent} />
      </Modal>
    )
  ), [modalVisible]);

  return (
    <>
      {renderModal(item)}
      <div className={styles.contentItem}>
        <Title>{item.name}</Title>
        <img src={item.image} className={styles.img} alt={`${item.name} character`} />
        <Button className={styles.btn} onClick={handleShowMoreClick}>
          show more
        </Button>
      </div>
    </>
  );
};
