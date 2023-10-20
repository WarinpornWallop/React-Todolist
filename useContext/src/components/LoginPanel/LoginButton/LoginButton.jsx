import { useContext } from "react";
import Button from "./Button/Button";
import { UserContext } from "../../../contexts/user-context";

function LoginButton() {
  const ctx = useContext(UserContext);

  if (ctx.currentUser !== null) {
    return (
      <div>
        <p>You logged in as {ctx.currentUser.name}.</p>
        <Button
          onClick={() => {
            ctx.setCurrentUser(null);
          }}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => {
        ctx.setCurrentUser({ name: "FutureSkills" });
      }}
    >
      Log in as FutureSkills
    </Button>
  );
}

export default LoginButton;
