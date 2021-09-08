import React, { useState } from "react";
import GlobalStyle from "../styles/globalstyles";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/slices/username.slice";
import { storedContactsSelector } from "../redux/slices/storedContacts.slice";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import { clickChatSelector } from "../redux/slices/clickChat.slice";

function Login() {
  const { members } = useSelector(clickChatSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

  const handleSignIn = (e: React.SyntheticEvent, name: string) => {
    e.preventDefault();
    dispatch(setUsername(name));
    router.push("/");
  };

  const handleGuest = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setUsername("You"));
    router.push("/");
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <StyledFormControl>
            <InputLabel id="demo-simple-select-helper-label">Name</InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={name}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {members.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>

            <Button
              onClick={(e) => handleSignIn(e, name)}
              variant="contained"
              style={{ margin: "1em" }}
            >
              Sign In
            </Button>
          </StyledFormControl>
          <h3>Or</h3>
          <Button
            onClick={handleGuest}
            variant="contained"
            style={{ marginTop: "1em" }}
          >
            Sign In As Guest
          </Button>
        </LoginWrapper>
      </LoginContainer>
      <GlobalStyle />
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
`;

const LoginWrapper = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  /* padding: 6em; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fbfbfb;
`;
const StyledFormControl = styled(FormControl)`
  width: 120px;
`;
