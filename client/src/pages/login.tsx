import { useRouter } from "next/dist/client/router";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import GlobalStyle from "../styles/globalstyles";

function Login() {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <Button onClick={handleClick} variant="contained">
            Sign In
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
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fbfbfb;
`;
