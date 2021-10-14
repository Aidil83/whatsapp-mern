import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";
import ButtonBase from "@material-ui/core/ButtonBase";
import { HiUser, HiUserGroup } from "react-icons/hi";

type LabelType = {
  bgImage: string | Blob; // Passing Optional Props
};

const profileLayerCSS = css`
  width: 100px;
  position: absolute;
  left: auto;
  right: auto;
  z-index: 1000;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 10px;
`;

export const CreateGroupWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2em;
`;
export const StyledUploadWrapper = styled(ButtonBase)`
  width: 200px;
  height: 200px;
  &.MuiButtonBase-root {
    border-radius: 50%;
  }
  & input {
    display: none;
  }
`;
export const StyledLabel = styled.label<LabelType>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bgImage }: any) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.uploadColor};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  ${({ bgImage }: LabelType) =>
    bgImage &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.medium};
        background-blend-mode: overlay;
        opacity: 0.7;
        transition: 0.2s;
        .profile-layer {
          opacity: 1;
        }
      }
    `};
  & .profile-layer {
    ${profileLayerCSS};
    opacity: ${({ bgImage }: LabelType) => (!bgImage ? 1 : 0)};
    transition: 0.2s;
  }
`;

const UserGroupIconCSS = css`
  position: absolute;
  z-index: 0;
  top: -43px;
  left: 0;
  font-size: 9em;
  color: ${({ theme }) => theme.gray500};
  opacity: 0.1;
  width: 100px;
  height: 110px;
`;

export const GroupIcon = styled(HiUserGroup)`
  ${UserGroupIconCSS};
`;

export const UserIcon = styled(HiUser)`
  ${UserGroupIconCSS};
  width: 150px;
  height: 160px;
  top: -70px;
  left: -25px;
`;
export const StyledTextField = styled(TextField)`
  width: 100%;
  .MuiInput-underline:before,
  .MuiInput-underline:after,
  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid ${({ theme }) => theme.greenChat};
  }
  label.Mui-focused {
    color: #838383;
  }
`;
