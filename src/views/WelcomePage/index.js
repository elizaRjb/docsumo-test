import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { PATHS } from "../../routePaths";

import Header from "../../components/Header";

function WelcomePage(props) {
  const { isLoggedIn, fullName } = props;

  if (!isLoggedIn) {
    return <Navigate to={PATHS.HOME} />;
  }

  return (
    <div className="welcome-page">
      <Header />
      <div className="welcome-page__container">
        <p className="welcome-page__text">
          Welcome to Docsumo,&nbsp;
          <span className="text--capitalize">{fullName}</span>!
        </p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  fullName: state.account.fullName,
});

export default connect(mapStateToProps, null)(WelcomePage);
