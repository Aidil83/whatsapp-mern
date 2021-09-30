import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { StyledSearchIcon } from "../Header.styles";
import { Field, Form, Formik } from "formik";

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
  const tween2: any = React.useRef(null);
  let containerRef: any = React.useRef(null);

  useEffect(() => {
    tween.current = gsap.timeline().to(containerRef.current, {
      opacity: 1,
      minwidth: "20ch",
      height: 35,
      backgroundColor: "rgb(212,212,212, .4)",
      duration: 0.4,
    });
    tween2.current = gsap.timeline().to(searchboxRef.current, {
      opacity: 1,
      width: "20ch",
      height: 35,
      duration: 0.4,
    });

    return () => {
      tween.current.kill();
      tween2.current.kill();
    };
  }, []);

  useEffect(() => {
    if (isSearchbox) {
      searchboxRef?.current?.focus();
      tween.current.play();
      tween2.current.play();
    } else {
      tween.current.reverse();
      tween2.current.reverse();
    }
  }, [isSearchbox]);

  const onSubmit = (data: any) => {
    console.log("submitted: -> ", data);
  };

  const initialValues = {
    search: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <StyledForm ref={containerRef}>
          <StyleSearchIcon onClick={handleClickSearchbox} />
          <StyledField
            name="search..."
            value={values.search}
            onChange={handleChange}
            placeholder="Search..."
            innerRef={searchboxRef}
          />
        </StyledForm>
      )}
    </Formik>
  );
};

export default Searchbox;

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  min-height: 35px;
  max-height: 35px;
  height: 100%;
  background-color: transparent;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledField = styled(Field)`
  width: 0px;
  background-color: #e3e3e3;
  border: none;
  outline: none;
  min-height: inherit;
  opacity: 0;
`;

const StyleSearchIcon = styled(StyledSearchIcon)`
  margin: 0.5em;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
