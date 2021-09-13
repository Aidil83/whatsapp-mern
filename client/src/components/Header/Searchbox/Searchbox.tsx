import React, { useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import gsap from "gsap";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "rgba(218, 218, 218, 0.85)",
      "&:hover": {
        backgroundColor: "#e2e2e2",
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "0ch",
        opacity: 0,
      },
    },
  })
);

interface ISB {
  searchboxRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Searchbox = ({ searchboxRef }: ISB) => {
  const classes = useStyles();
  let containerRef = React.useRef(null);

  useEffect(() => {
    searchboxRef?.current?.focus();

    gsap.fromTo(
      searchboxRef?.current,
      { opacity: 0, width: "0ch" },
      {
        opacity: 1,
        width: "20ch",
        duration: 0.4,
      }
    );
  }, []);

  return (
    <Toolbar>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          inputRef={searchboxRef}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Toolbar>
  );
};

export default Searchbox;
