import { Fade } from "react-awesome-reveal";

const LoginComponent = ({ loginToAccount }) => {
  return (
    <div className="welcome-box-main d-flex flex-col j-c-c a-i-c">
      <Fade direction="up" triggerOnce duration={950}>
        <div className="welcome-box text-center rounded border-gray bg-dark">
          <Fade direction="up" triggerOnce duration={900} delay={900}>
            <h3 className="text-uppercase">Welcome</h3>
          </Fade>
          <Fade direction="up" triggerOnce duration={950} delay={930}>
            <p>Welcome to Azura login to access the full platform</p>
          </Fade>
          <Fade direction="up" triggerOnce duration={1000} delay={960}>
            <button
              onClick={() => loginToAccount()}
              className="btn btn-primary mx-auto"
            >
              Login
            </button>
          </Fade>
          <Fade direction="up" triggerOnce duration={1100} delay={1000}>
            <span className="text-muted light-w">
              Note that you will need to hold one or more DGL NFT to access the
              platform
            </span>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default LoginComponent;
