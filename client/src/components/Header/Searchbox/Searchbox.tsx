import React, { useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import gsap from "gsap";
import styled from "styled-components";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       display: "none",
//       [theme.breakpoints.up("sm")]: {
//         display: "block",
//       },
//     },
//     search: {
//       position: "relative",
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: "rgba(218, 218, 218, 0.85)",
//       overflow: "hidden",
//       "&:hover": {
//         backgroundColor: "#e2e2e2",
//       },
//       marginLeft: 0,
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(1),
//         width: "0ch",
//         opacity: 0,
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: "100%",
//       position: "absolute",
//       pointerEvents: "none",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     inputRoot: {
//       color: "inherit",
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         opacity: 0,
//         width: "0ch",
//       },
//     },
//   })
// );

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

    // return () => {
    //   tween.kill();
    // };
  }, []);

  useEffect(() => {
    searchboxRef?.current?.focus();

    if (isSearchbox) {
      tween.current.play();
    } else {
      tween.current.reverse();
    }
  }, [isSearchbox]);

  return (
    // <Toolbar>
    //   <div className={classes.search} ref={containerRef}>
    //     <div className={classes.searchIcon}>
    //       <SearchIcon />
    //     </div>
    //     <InputBase
    //       inputRef={searchboxRef}
    //       placeholder="Search…"
    //       classes={{
    //         root: classes.inputRoot,
    //         input: classes.inputInput,
    //       }}
    //       inputProps={{ "aria-label": "search" }}
    //     />
    //   </div>
    // </Toolbar>
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
