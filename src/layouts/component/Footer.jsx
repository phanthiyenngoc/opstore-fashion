/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Container from "../../components/common/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer
      css={css`
        background: #5b5b5b;
        padding: 55px 0;
      `}
    >
      <Container>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > ul {
              max-width: 292px;
              width: 100%;
              padding: 0 15px;
            }
            & > ul > li {
              color: white;
              list-style-type: none;
              margin: 20px 0;
              position: relative;
              & > .title::after {
                content: "";
                width: 50px;
                height: 1px;
                position: absolute;
                background-color: white;
                right: 40px;
                top: 50%;
              }
            }
            & > ul > li > a {
              font-size: 14px;
              line-height: 1.5;

              display: flex;
              justify-content: space-between;
              align-items: center;
              color: white;
              text-decoration: none;
              border-bottom: 1px solid #ccc;
            }
            & > ul > li > a > svg {
              width: 10px;
              height: 10px;
            }
            & > ul > li > h6 {
              font-weight: 600;
              color: white;
            }
          `}
        >
          <ul>
            <li>
              <img src="	https://demo.wpoperation.com/opstore/default/wp-content/uploads/sites/5/2018/09/logo-white.png" alt="logo" />
            </li>
            <li>
              <span>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, magnis dis parturient montes.
              </span>
            </li>
            <li
              css={css`
                display: flex;
                gap: 6px;
                & > button {
                  background: #47008f;
                  color: white;
                }
              `}
            >
              <Button
                css={css`
                  background: #47008f;
                  color: white;
                `}
                variant="secondary"
                endIcon={<FacebookOutlinedIcon />}
              ></Button>
              <Button variant="secondary" endIcon={<InstagramIcon />}></Button>
              <Button variant="secondary" endIcon={<FacebookOutlinedIcon />}></Button>
              <Button variant="secondary" color="secondary" endIcon={<InstagramIcon />}></Button>
            </li>
          </ul>
          <ul>
            <li>
              <Typography variant="h6" className="title">
                Collections
              </Typography>
            </li>
            <li>
              <a href="">
                <span>Latetest Fashion</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Trending Fashion</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Summer Collection</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Weekly Fashion</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Sale Products</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Typography variant="h6" className="title">
                Quick Links
              </Typography>
            </li>
            <li>
              <a href="">
                <span>Home</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Shop</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>My account</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Cart</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="">
                <span>Checkout</span>
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
          </ul>
          <ul
            css={css`
              & > li > p {
                color: white;
              }
            `}
          >
            <li>
              <Typography variant="h6" className="title">
                Payment Methods
              </Typography>
            </li>
            <li>
              <Typography variant="body1" componenet={"p"}>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              </Typography>
            </li>
            <li
              css={css`
                display: flex;
                gap: 6px;
                & > button {
                  background: #47008f;
                  color: white;
                }
              `}
            >
              <Button
                css={css`
                  background: #47008f;
                  color: white;
                `}
                variant="secondary"
                endIcon={<FacebookOutlinedIcon />}
              ></Button>
              <Button variant="secondary" endIcon={<InstagramIcon />}></Button>
              <Button variant="secondary" endIcon={<FacebookOutlinedIcon />}></Button>
              <Button variant="secondary" color="secondary" endIcon={<InstagramIcon />}></Button>
            </li>
          </ul>
        </div>
      </Container>
      <span
        css={css`
          display: block;
          border-bottom: 1px solid #ccc;
          margin-top: 232px;
        `}
      ></span>
      <Container>
        <div
          css={css`
            background: inherit;
            padding: 30px 0;

            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Typography
            variant="body1"
            componenet="p"
            css={css`
              color: white;
            `}
          >
            © All Rights reserved Opstore Opstore Theme By WPoperation
          </Typography>
          <div
            css={css`
              display: flex;
              gap: 6px;
              & > button {
                background: #47008f;
                color: white;
              }
            `}
          >
            <Button
              css={css`
                background: #47008f;
                color: white;
              `}
              variant="secondary"
              endIcon={<FacebookOutlinedIcon />}
            ></Button>
            <Button variant="secondary" endIcon={<InstagramIcon />}></Button>
            <Button variant="secondary" endIcon={<FacebookOutlinedIcon />}></Button>
            <Button variant="secondary" color="secondary" endIcon={<InstagramIcon />}></Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
