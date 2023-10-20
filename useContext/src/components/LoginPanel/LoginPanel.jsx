import "./LoginPanel.css";
import LoginButton from "./LoginButton/LoginButton";
import Panel from "./Panel/Panel";

function LoginPanel() {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

export default LoginPanel;
