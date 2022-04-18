import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { FC } from "react";
import { Button, Image } from "../../atoms";
import { images } from "../../../utils/constants";
interface IProps {
  wrapperRef: any;
}

export const CardModalContent: FC<IProps> = ({ wrapperRef }) => {
  return (
    <p style={{ color: "red" }} ref={wrapperRef}>
      aststststst
    </p>
  );
};
