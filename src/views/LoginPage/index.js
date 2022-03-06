import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

function LoginPage(props) {
  return (
    <div className="login-page">
      <div className="login-page__card">
        <div className="login-page__icon">
          <svg viewBox="0 0 294 294">
            <g fill="currentColor" fill-rule="evenodd">
              <path
                fill-rule="nonzero"
                d="M62.874 225.046c-3.73 6.134-11.727 8.084-17.862 4.354-6.135-3.73-8.084-11.726-4.355-17.861l87.427-143.805c3.73-6.135 11.727-8.085 17.862-4.355 6.135 3.73 8.084 11.727 4.355 17.862L62.874 225.046zm82.798-143.85c-3.73-6.135-1.78-14.132 4.355-17.862 6.135-3.73 14.132-1.78 17.862 4.355l89.28 146.854c3.73 6.135 1.78 14.132-4.355 17.862-6.135 3.73-14.132 1.78-17.861-4.355l-89.28-146.854z"
              ></path>
              <path
                fill-rule="nonzero"
                d="M42.5 264c6.904 0 12.5-5.596 12.5-12.5S49.404 239 42.5 239 30 244.596 30 251.5 35.596 264 42.5 264zm0 30C19.028 294 0 274.972 0 251.5S19.028 209 42.5 209 85 228.028 85 251.5 65.972 294 42.5 294zm105-239c6.904 0 12.5-5.596 12.5-12.5S154.404 30 147.5 30 135 35.596 135 42.5 140.596 55 147.5 55zm0 30C124.028 85 105 65.972 105 42.5S124.028 0 147.5 0 190 19.028 190 42.5 170.972 85 147.5 85zm104 179c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5zm0 30c-23.472 0-42.5-19.028-42.5-42.5s19.028-42.5 42.5-42.5 42.5 19.028 42.5 42.5-19.028 42.5-42.5 42.5z"
              ></path>
              <path d="M66.065 216.892c22.808-34.622 49.448-51.933 79.92-51.933 30.473 0 58.302 16.978 83.485 50.933l18.537-4.312C231.273 168.527 197.267 147 145.986 147s-85.23 21.527-101.845 64.58l21.924 5.312z"></path>
            </g>
          </svg>
        </div>
        <h1 className="login-page__heading">Login to Docsumo</h1>
        <div className="login-page__form">
          <form>
            <TextInput key="email" name="email" value="" label="Work email" />
            <TextInput
              key="password"
              name="password"
              value=""
              label="Password"
            />
            <Button type="submit" size="lg" variant="primary">
              Login
            </Button>
          </form>
        </div>
        <div className="login-page__footer">
          <p>Don't have an account?</p>
          <a
            href="#"
            title="Click here to create account"
            className="button button--md button--secondary"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
