import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  background: #f8f8f8;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  width: 50%;
  padding: 3rem;
`;
export const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    flex: 1 1 50%;
    width: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;
  color: #000000;
`;

export const FormReset = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 75%;
  @media (min-width: 769px) {
    width: 400px;
  }
  @media (min-width: 1100px) {
    width: 500px;
  }
`;

export const Box = styled.div`
  margin-bottom: 3rem;
`;

export const TitleReset = styled.h2`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 1.2;
  color: #32324d;
  margin-bottom: 1.5rem;
`;

export const DetailsReset = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  color: #32324d;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  border: 1px solid #bbbbc4;
  border-radius: 16px;
  margin-bottom: 1rem;
  text-indent: 1rem;
  width: 80%;

  &::placeholder {
    font-family: "Roboto";
    font-size: 0.75rem;
    line-height: 1.2;
    color: #54546b;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 2rem;
`;

export const Button = styled.button`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  width: 100%;
  display: block;
  padding: 1rem;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: #fa5a00;
  border-radius: 16px;
`;

export const Cancel = styled.a`
  display: block;
  font-family: "Inter";
  font-size: 1rem;
  line-height: 1.2;
  color: #000000;
  align-self: center;
`;
