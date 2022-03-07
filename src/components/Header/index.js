import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { PATHS } from "routePaths";

import Button from "components/Button";

import { getImageUrl } from "utils/utils";

import { userLogoutRequest } from "actions/auth";

const LOGO_ICON = getImageUrl("/images/docsumo-logo.png");

function Header(props) {
  const { userLogoutRequest } = props;

  const handleLogout = () => {
    userLogoutRequest();
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to={PATHS.HOME} title="Docsumo" className="header__logo">
          <img src={LOGO_ICON} alt="Docsumo" />
        </Link>
        <Button
          variant="text"
          className="header__button"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userLogoutRequest: () => dispatch(userLogoutRequest()),
});

export default connect(null, mapDispatchToProps)(Header);
