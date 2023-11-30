/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";

Header.propTypes = {};

function Header(props) {
  return (
    <div css={css``}>
      <div
        className="Top-bar"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #3f4198;
          height: auto;
        `}
      >
        <div
          css={css`
            display: flex;

            align-items: center;
            & > div {
              display: flex;
              padding: 2px 30px;
              align-items: center;
            }
            & > div > a {
              text-decoration: none;
              color: #fff;
            }
          `}
        >
          <div css={css``}>
            <img src="" alt="" />
            <Link variant="subtitle2" component={"a"} href="mailto:info@wpoperation.com">
              info@wpoperation.com
            </Link>
          </div>
          <div>
            <img src="" alt="" />
            <Link variant="subtitle2" component={"a"} href="tel:+974-9845-55698">
              <i class="fa fa-phone"></i>+974-9845-55698
            </Link>
          </div>
        </div>
        <ul
          css={css`
            display: flex;

            align-items: center;
            & > li {
              display: flex;
              padding: 2px 30px;
              align-items: center;
            }
            & > li > a {
              text-decoration: none;
              color: #fff;
            }
          `}
        >
          <li>
            <Link variant="subtitle2" component={"a"} href="   `">
              My account
            </Link>
          </li>
          <li>
            <Link variant="subtitle2" component={"a"} href="">
              Wishlist
            </Link>
          </li>
          <li>
            <Link variant="subtitle2" component={"a"} href="">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="Home-header"
        css={css`
          /*  */
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 30px;

          & > ul {
            display: flex;
          }
          & > ul > li {
            list-style: none;
            padding: 10px 20px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 30px;
            & > ul {
              display: flex;
            }
            & ul > li {
              list-style: none;
              display: block;
              padding: 2px 30px;
            }
            & ul > .home {
              position: relative;
            }
            & > ul > li > a {
              text-decoration: none;
              color: #333;
              text-transform: uppercase;
            }
            & > ul > li:hover a {
              color: #3f4198;
            }
            & > ul > li:hover ul {
              display: block;
            }
          `}
        >
          <div
            css={css`
              width: 230px;
              height: 40px;
            `}
          >
            <a
              href="!#"
              css={css`
                display: inline-block;
                width: inherit;
                height: inherit;
              `}
            >
              <img
                css={css`
                  width: inherit;
                  height: inherit;
                  object-fit: cover;
                `}
                src="https://demo.wpoperation.com/opstore/default/wp-content/uploads/sites/5/2018/09/new-lg.png"
                alt="logo"
              />
            </a>
          </div>
          <ul
            css={css`
              position: relative;
              & > .home::after {
                content: "";
                display: none;
                width: 6px;
                height: 6px;

                border: 1px solid;
                border-color: transparent #333 #333 transparent;
                rotate: 45deg;
                position: absolute;
                top: -4px;
                left: 6px;
              }
              & > .home::before {
                display: inline-block;
                content: "";
                width: 100px;
                height: 30px;
                background: transparent;
                z-index: 4;
                position: absolute;
                top: 22px;
                left: 12px;
                cursor: pointer;
              }
              &.home::after:hover .home::after {
                display: block;
                cursor: pointer;
              }
            `}
          >
            <li className="home" css={css``}>
              <a className="header-nav" href="">
                Home
              </a>

              <ul
                css={css`
                  position: absolute;
                  top: 48px;
                  left: 0;
                  display: none;
                  width: 250px;

                  z-index: 1;
                  padding: 0;
                  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
                  background: white;

                  transition: all 400ms ease-in-out;
                  margin: 0;
                  cursor: pointer & > li {
                    list-style-type: style none;
                    border-bottom: 1px solid #efefef;
                    padding: 10px 6px;
                  }
                  & > li:hover {
                    color: rgba(63, 65, 152, 0.8);
                  }
                  & > li {
                    text-transform: uppercase;
                    cursor: pointer;
                    border-bottom: 1px solid #ddd;
                  }
                  & > li > a {
                    text-decoration: none;
                    display: inline-block;
                    padding: 10px 0;
                  }
                `}
              >
                <li>
                  <a className="link" href="">
                    electronics
                  </a>
                </li>
                <li>
                  <a className="link" href=""></a>clothing
                </li>
                <li>
                  <a className="link" href=""></a>fashion
                </li>
              </ul>
            </li>
            <li>
              <Link variant="subtitle2" componenet="a" className="header-nav" href="">
                about us
              </Link>
            </li>
            <li>
              <Link variant="subtitle2" componenet="a" className="header-nav" href="">
                shop
              </Link>
            </li>
            <li>
              <Link variant="subtitle2" componenet="a" className="header-nav" href="">
                clothing
              </Link>
            </li>
            <li>
              <Link variant="subtitle2" componenet="a" className="header-nav" href="">
                blog
              </Link>
            </li>
            <li>
              <Link variant="subtitle2" componenet="a" className="header-nav" href="">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <ul
          css={css`
            margin: 0;
            & > li {
              padding: 10px 22px;
            }
            & > li > a {
              color: #333;
            }
          `}
        >
          <li>
            <Link variant="subtitle2" componenet="a" href="">
              <SearchOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link variant="subtitle2" componenet="a" href="">
              <PersonOutlineOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link variant="subtitle2" componenet="a" href="">
              <FavoriteBorderOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link variant="subtitle2" componenet="a" href="">
              <ShoppingCartOutlinedIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div
        css={css`
          width: 100%;
          height: 100vh;
          position: relative;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          src="https://demo.wpoperation.com/opstore/default/wp-content/uploads/sites/5/2018/09/slider-bg4.jpg"
          alt=""
        />
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
            /* min-height: 100%; */
            box-sizing: border-box;
            /* flex: 0 0 auto; */
            visibility: visible;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 230px;
              left: 150px;
            `}
          >
            <Typography
              css={css`
                font-family: Mulish;
                text-transform: uppercase;
                font-size: 74px;
                font-weight: 600;
                color: #464aa1;
                line-height: 1.5;
              `}
              variant="h1"
              component={"h1"}
            >
              get 50% off
            </Typography>
            <Typography
              css={css`
                font-size: 55px;
                text-transform: capitalize;
                margin-bottom: 40px;
              `}
              variant="body1"
              component={"p"}
            >
              on all ladies items
            </Typography>
            <Button
              css={css`
                font-size: 22px;
                text-transform: capitalize;
                min-width: 160px;
                margin-left: 20px;
              `}
              variant="contained"
              color="secondary"
            >
              Show Now
            </Button>
            {/* <Button variant="outlined" color="secondary">
              Text
            </Button> */}
          </div>
          {/* <Button
            css={css`
              text-transform: capitalize;
              background: #000;
              color: white;
              &:hover {
                cursor: pointer;
              }
            `}
            accountNumber={"123-123-1234444"}
          >
            shop now
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
