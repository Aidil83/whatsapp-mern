import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { StyledSearchIcon } from "../Header.styles";

interface ISB {
  isSearchbox: boolean;
  searchboxRef: React.MutableRefObject<HTMLInputElement | null>;
  handleClickSearchbox: () => void;
}

const Searchbox = ({
  isSearchbox,
  searchboxRef,
  handleClickSearchbox,
}: ISB) => {
  const tween: any = React.useRef(null);

  useEffect(() => {
    tween.current = gsap.timeline().to(searchboxRef.current, {
      opacity: 1,
      width: "28ch",
      height: 25,
      backgroundColor: "rgba(134, 134, 134, 0.25)",
      duration: 0.4,
    });

    return () => {
      tween.current.kill();
    };
  }, []);

  useEffect(() => {
    if (isSearchbox) {
      searchboxRef?.current?.focus();
      tween.current.play();
    } else {
      tween.current.reverse();
    }
  }, [isSearchbox]);

  return (
    <Styledform isSearchbox={isSearchbox}>
      <IconButton onClick={handleClickSearchbox}>
        <StyledSearchIcon />
      </IconButton>
      <input type="text" placeholder="Search..." ref={searchboxRef} />
    </Styledform>
  );
};

export default Searchbox;

const Styledform = styled.form<{ isSearchbox: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  background-color: ${({ isSearchbox }) =>
    isSearchbox ? "rgba(134, 134, 134, 0.25)" : "transparent"};
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    /* background-color: rgba(135, 134, 134, 0.2); */
  }
  input {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 0ch;
    /* display: none; */
    background-color: transparent;
    padding: 0em;
    border: none;
    outline: none;
    min-width: inherit;
    min-height: inherit;
    opacity: 1;
  }
`;
