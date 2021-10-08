import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { StyledSearchIcon } from "../Header.styles";
import { Field, Form, Formik, FormikHelpers as FormikActions } from "formik";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useQuery } from "react-query";
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
      minwidth: "30ch",
      height: 35,
      backgroundColor: "rgb(212,212,212, .4)",
      duration: 0.5,
    });
    tween2.current = gsap.timeline().to(searchboxRef.current, {
      opacity: 1,
      width: "30ch",
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
          {/* <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack> */}
          <StyledField
            name="search"
            value={values.search}
            onChange={handleChange}
            placeholder="Search..."
            innerRef={searchboxRef}
          />
          <section></section>
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

  & section {
    position: absolute;
    z-index: 100;
    top: 20px;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: red;
    border-radius: 5px;
    overflow: hidden;
  }
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
  position: relative;
  margin: 0.5em;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
