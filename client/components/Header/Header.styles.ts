import styled from "styled-components";

export const Container = styled.header`
  height: 59px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ededed;
  padding: 0.3em;
`;
export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
`;
export const NameWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75em;
  font-family: "segoe UI", Helvetica;
`;
export const TitleName = styled.h3`
  font-weight: 400;
  color: #262626;
`;
export const DescriptionName = styled.span`
  color: #868686;
`;
export const IconWrapper = styled.div``;
