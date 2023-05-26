import React from "react";
import {
  DetailsReset,
  FormReset,
  FormWrapper,
  Header,
  ImageWrapper,
  MainWrapper,
  TitleReset,
  Input,
  Box,
  Button,
  Cancel,
  InputBox,
  ButtonBox,
} from "./Reset.styled";
import ResetBG from "../../Assets/images/reset/bg-reset.svg";

const Reset = () => (
  <MainWrapper>
    <FormWrapper>
      <Header>MEALY</Header>
      <FormReset>
        <div>
          <Box>
            <TitleReset>Reset Password</TitleReset>
            <DetailsReset>
              Enter the email associated with your account and we will send you
              a code to reset it.
            </DetailsReset>
          </Box>
          <InputBox>
            <Input type="email" name="" id="" placeholder="email" />
            <Input type="password" name="" id="" placeholder="old password" />
            <Input type="password" name="" id="" placeholder="new password" />
          </InputBox>
          <ButtonBox>
            <Button>Get code</Button>
            <Cancel href="/">Cancel</Cancel>
          </ButtonBox>
        </div>
      </FormReset>
    </FormWrapper>
    <ImageWrapper>
      <img src={ResetBG} alt="" />
    </ImageWrapper>
  </MainWrapper>
);

export default Reset;
