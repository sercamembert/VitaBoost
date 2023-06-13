import Alert from "@mui/material/Alert";

const ErrorAlert = ({ text = "Error" }) => {
  return (
    <Alert
      onClose={() => {}}
      className="alert"
      severity="error"
      variant="filled"
    >
      {text}
    </Alert>
  );
};

export default ErrorAlert;
