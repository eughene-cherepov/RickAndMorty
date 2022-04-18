import React, { useCallback, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FC } from "react";
import { Button, Title } from "components/atoms";
import { Modal } from "components/molecules";
import { useClickOutside } from "utils/hooks";
import { CardModalContent } from "components/molecules";

interface IProps {
  item: any;
  index: number;
}

export const HomeScreenCard: FC<IProps> = ({ item, index }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleShowMoreClick = () => {
    setModalVisible(!modalVisible);
  };
  const wrapperRef = useRef(null);

  const onClickOutside = () => setModalVisible((prev) => !prev);

  useClickOutside(wrapperRef, onClickOutside);

  const renderModal = useCallback(() => {
    return (
      modalVisible && (
        <Modal overlayStyles={styles.modalOverlay}>
          <CardModalContent wrapperRef={wrapperRef} />
        </Modal>
      )
    );
  }, [modalVisible]);

  return (
    <>
      {renderModal()}
      <div className={styles.contentItem} key={index}>
        <Title>{item.name}</Title>
        <img src={item.image} className={styles.img} />
        <Button className={styles.btn} onClick={handleShowMoreClick}>
          show more
        </Button>
      </div>
    </>
  );
};
