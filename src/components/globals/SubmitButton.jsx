import { useFormikContext } from "formik";

const SubmitButton = ({ title, className }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="button"
      onClick={handleSubmit}
      // className={isSubmitting ? "issubmitting-button" : "submit-button"}
      className={className}
      disabled={isSubmitting ? true : false}
      style={{
        background: isSubmitting ? "#777" : "#000",
        color: "#fff",
        border: isSubmitting && "1px solid #fff",
      }}
    >
      {label}
    </button>
  );
};

export default SubmitButton;