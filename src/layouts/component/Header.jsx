/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <div
        className="Top-bar"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;

            align-items: center;
            & > div {
              display: flex;
              padding: 20px;
              align-items: center;
            }
            & > div > a {
              text-decoration: none;
            }
          `}
        >
          <div css={css``}>
            <img src="" alt="" />
            <a href="mailto:info@wpoperation.com">info@wpoperation.com</a>
          </div>
          <div>
            <img src="" alt="" />
            <a href="tel:+974-9845-55698">
              <i class="fa fa-phone"></i>+974-9845-55698
            </a>
          </div>
        </div>
        <ul
          css={css`
            display: flex;

            align-items: center;
            & > li {
              display: flex;
              padding: 20px;
              align-items: center;
            }
            & > li > a {
              text-decoration: none;
            }
          `}
        >
          <li>
            <a href="   `">My account</a>
          </li>
          <li>
            <a href="">Wishlist</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      <div className="Home-header"></div>
    </div>
  );
}

export default Header;
