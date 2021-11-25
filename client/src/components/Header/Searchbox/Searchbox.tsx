import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { StyledSearchIcon } from "../Header.styles";
import { Field, Form, Formik, FormikHelpers as FormikActions } from "formik";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import SearchAutoSuggestions from "./SearchAutoSuggestions";
import { TextField } from "@mui/material";
gsap.registerPlugin(ScrollToPlugin);

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
  const [searchValue, setSearchValue] = useState("");
  const tween: any = React.useRef(null);
  const tween2: any = React.useRef(null);
  let containerRef: any = React.useRef(null);

  useEffect(() => {
    tween.current = gsap.timeline().to(containerRef.current, {
      opacity: 1,
      height: 35,
      minWidth: "30ch",
      backgroundColor: "rgb(212,212,212, .4)",
      duration: 0.5,
    });
    tween2.current = gsap.timeline().to(searchboxRef.current, {
      opacity: 1,
      minWidth: "30ch",
      height: 35,
      duration: 0.5,
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

  // useEffect(() => {
  //   const scrollTop = () => {
  //     gsap.to(window, {
  //       duration: 0.7,
  //       scrollTo: {
  //         y: "top",
  //         offsetY: 70,
  //       },
  //     });
  //   };
  // }, []);

  type FormValues = {
    search: string;
  };

  interface IResetForm<FormValues> {
    resetForm: FormikActions<FormValues>["resetForm"];
  }

  const onSubmit = (
    data: FormValues,
    { resetForm }: IResetForm<FormValues>
  ) => {
    console.log(data);
    resetForm();
  };

  return (
    <Formik initialValues={{ search: "" }} onSubmit={onSubmit}>
      {({ values, handleChange }) => (
        <StyledForm ref={containerRef}>
          <StyleSearchIcon onClick={handleClickSearchbox} />
          {/* <SearchAutoSuggestions
            values={values}
            handleChange={handleChange}
            searchboxRef={searchboxRef}
            isSearchbox={isSearchbox}
          /> */}
          <StyledField
            name="search"
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
  width: 0ch;
  min-width: 42px;
  min-height: 35px;
  max-height: 35px;
  height: 100%;
  background-color: transparent;
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledField = styled(Field)`
  width: 100%;
  min-width: 0ch;
  background-color: #e3e3e3;
  border: none;
  outline: none;
  min-height: inherit;
  opacity: 0;
`;

const StyleSearchIcon = styled(StyledSearchIcon)`
  position: relative;
  margin: 0.5em;
  cursor: pointer;
  color: ${({ theme }) => theme.medium};
  &:hover {
    color: #000000;
  }
`;
