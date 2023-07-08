import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorPageContainer,
  ErrorPageWrapper,
  ErrorText,
  ImageWrapper,
  Span,
} from "./error404.styled";
import ErrorImage from "./assets/errorImage.svg";
import Button from "../../component/Button";

const ErrorPage = () => (
  <ErrorPageContainer>
    <ErrorPageWrapper>
      <ErrorText>
        Oops! looks like you have a <Span>broken</Span> Link
      </ErrorText>
      <ImageWrapper>
        <img src={ErrorImage} alt=" 404" />
      </ImageWrapper>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </ErrorPageWrapper>
  </ErrorPageContainer>
);

export default ErrorPage;
