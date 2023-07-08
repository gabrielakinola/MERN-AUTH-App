import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearFormState } from "../slices/ticketSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { isTicketPage } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const returnToFormHandler = () => {
    dispatch(clearFormState());
    navigate("/");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container style={{ justifyContent: `space-between`, color: `white` }}>
          {userInfo && (
            <>
              <XLg onClick={returnToFormHandler} />
              <div style={{ fontWeight: `light` }}>My Tickets</div>
              <div style={{ fontWeight: `light` }}>Help</div>
            </>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
