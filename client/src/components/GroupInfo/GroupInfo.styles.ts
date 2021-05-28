import styled from "styled-components";
import { ButtonBase } from "@material-ui/core";
import { HiUserGroup } from "react-icons/hi";

type LabelType = {
  bgImage: string | null; ///Passing Optional Props
};

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
`;
export const StyledLabel = styled.label<LabelType>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bgImage }: LabelType) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.uploadColor};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  & .profile-layer {
    width: 100px;
    position: absolute;
    left: auto;
    right: auto;
    z-index: 1000;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 10px;
  }
`;
export const GroupIcon = styled(HiUserGroup)`
  position: absolute;
  z-index: 0;
  top: 23px;
  font-size: 9em;
  color: ${({ theme }) => theme.gray500};
  opacity: 0.1;
`;
