import Alert from "@mui/material/Alert";

const SuccesAlert = ({ text = "Succes product added to cart" }) => {
  return (
    <Alert onClose={() => {}} className="alert" variant="filled">
      {text}
    </Alert>
  );
};

export default SuccesAlert;
