import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { FC } from "react";
import { Button, Image } from "../../atoms";
import { images } from "../../../utils/constants";
interface IProps {
  children: any;
  overlayStyles?: any;
}

export const Modal: FC<IProps> = ({ children, overlayStyles }) => {
  return (
    <div
      className={[overlayStyles, styles.overlay].join(",").replaceAll(",", " ")}
    >
      {children}
    </div>
  );
};
