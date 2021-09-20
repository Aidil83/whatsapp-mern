import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";

interface ISB {
  isSearchbox: boolean;
  searchboxRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Searchbox = ({ isSearchbox, searchboxRef }: ISB) => {
  // const classes = useStyles();
  let containerRef = React.useRef(null);
  const tween: any = React.useRef(null);

  useEffect(() => {
    tween.current = gsap.timeline().to(searchboxRef.current, {
      display: "block",
      opacity: 1,
      width: "28ch",
      duration: 0.4,
    });
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
    <Styledform>
      <input type="text" placeholder="Search..." ref={searchboxRef} />
    </Styledform>
  );
};

export default Searchbox;

const Styledform = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  background-color: rgba(134, 134, 134, 0.25);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    background-color: rgba(135, 134, 134, 0.2);
  }
  input {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 0ch;
    display: none;
    background-color: transparent;
    padding: 1em;
    border: none;
    outline: none;
    min-width: inherit;
    min-height: inherit;
    opacity: 1;
  }
`;
