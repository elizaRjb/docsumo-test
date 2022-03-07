import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";

function LoginPageForm(props) {
  const {
    email,
    password,
    formErrorMsg,
    error,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = props;

  return (
    <div className="login-page__form">
      <form onSubmit={handleSubmit}>
        <TextInput
          key="email"
          name="email"
          value={email}
          label="Work email"
          errorMsg={formErrorMsg.email}
          onChange={handleInputChange}
        />
        <TextInput
          key="password"
          type="password"
          name="password"
          value={password}
          label="Password"
          errorMsg={formErrorMsg.password}
          onChange={handleInputChange}
        />
        <p className="login-page__error">{error}</p>
        <Button
          type="submit"
          size="lg"
          variant="primary"
          disabled={isLoading}
          loading={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default LoginPageForm;
