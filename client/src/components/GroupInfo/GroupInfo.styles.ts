import { ButtonBase } from "@material-ui/core";
import styled from "styled-components";

export const CreateGroupWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  padding-top: 2em;
  & input {
    display: none;
  }
`;
export const StyledUploadWrapper = styled(ButtonBase)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  & label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.uploadColor};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;
