/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

function Container(props) {
  const { children } = props;
  return (
    <div
      css={css`
        width: 1170px;
        max-width: calc(100% - 24px);
        margin: 0 auto;
        height: 100px;
        background: green;
      `}
    >
      {children}
    </div>
  );
}

export default Container;
