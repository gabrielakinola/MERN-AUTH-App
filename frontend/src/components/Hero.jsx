import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useSelector } from "react-redux";

const Hero = (props) => {
  const { userInfo } = useSelector((state) => state.auth);

  const ticketFormHandler = () => {
    props.onClickGenerator();
  };

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Etickets Generator</h1>
          <p className="text-center mb-4">
            This is an app that generates e-tickets. Click on generator to
            proceed to fill ticket generator form
          </p>
          <div className="d-flex">
            {userInfo ? (
              <Button
                onClick={ticketFormHandler}
                variant="primary"
                className="me-3"
              >
                Generator
              </Button>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Button variant="primary" className="me-3">
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="primary" className="me-3">
                    Sign Up
                  </Button>
                </LinkContainer>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
