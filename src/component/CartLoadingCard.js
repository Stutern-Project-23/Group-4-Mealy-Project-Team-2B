import React from "react";
import styled from "styled-components";

const CartLoadingCard = () => (
  <CardLoadingStyle>
    <ul className="o-vertical-spacing o-vertical-spacing--l">
      <li className="blog-post o-media">
        <div className="o-media__figure">
          <span
            className="skeleton-box"
            style={{ width: "100px", height: "80px" }}
          />
        </div>
        <div className="o-media__body">
          <div className="o-vertical-spacing">
            <h3 className="blog-post__headline">
              <span className="skeleton-box" style={{ width: "55%" }} />
            </h3>
            <p>
              <span className="skeleton-box" style={{ width: "80%" }} />
              <span className="skeleton-box" style={{ width: "90%" }} />
              <span className="skeleton-box" style={{ width: "83%" }} />
              <span className="skeleton-box" style={{ width: "80%" }} />
            </p>
            <div className="blog-post__meta">
              <span className="skeleton-box" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </li>

      <li className="blog-post o-media">
        <div className="o-media__figure">
          <span
            className="skeleton-box"
            style={{ width: "100px", height: "80px" }}
          />
        </div>
        <div className="o-media__body">
          <div className="o-vertical-spacing">
            <h3 className="blog-post__headline">
              <span className="skeleton-box" style={{ width: "55%" }} />
            </h3>
            <p>
              <span className="skeleton-box" style={{ width: "80%" }} />
              <span className="skeleton-box" style={{ width: "90%" }} />
              <span className="skeleton-box" style={{ width: "83%" }} />
              <span className="skeleton-box" style={{ width: "80%" }} />
            </p>
            <div className="blog-post__meta">
              <span className="skeleton-box" style={{ width: "70px" }} />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </CardLoadingStyle>
);
const CardLoadingStyle = styled.div`
  .skeleton-box {
    display: inline-block;
    height: 1em;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
      );
      animation: shimmer 5s infinite;
      content: "";
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }

  .blog-post {
    &__headline {
      font-size: 1.25em;
      font-weight: bold;
    }

    &__meta {
      font-size: 0.85em;
      color: #6b6b6b;
    }
  }

  // OBJECTS

  .o-media {
    display: flex;

    &__body {
      flex-grow: 1;
      margin-left: 1em;
    }
  }

  .o-vertical-spacing {
    > * + * {
      margin-top: 0.75em;
    }

    &--l {
      > * + * {
        margin-top: 2em;
      }
    }
  }
`;

export default CartLoadingCard;
