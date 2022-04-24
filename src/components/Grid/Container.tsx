import React, { FC } from "react";
import clx from "classnames";
import type { ContainerProps } from "./Container.types";

import styles from "./Grid.module.scss";

const Container: FC<ContainerProps> = ({
  children,
  size = "",
  className = "",
  ...divProps
}) => {
  const containerSize = size ? `-${size}` : "";
  return (
    <div
      className={clx(styles[`container${containerSize}`], className)}
      {...divProps}
    >
      {children}
    </div>
  );
};

export default Container;
