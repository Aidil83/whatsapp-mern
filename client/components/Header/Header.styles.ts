import styled from "styled-components";
import Image from "next/image";

export const Container = styled.header`
  height: 59px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ededed;
  padding: 0.5em;
`;
export const ProfilePic = styled(Image)`
  border-radius: 50%;
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
  color: ${({ theme }) => theme.primary};
`;
export const DescriptionName = styled.span`
  color: ${({ theme }) => theme.light};
`;
export const IconWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  color: ${({ theme }) => theme.light};
`;
