import DashboardTop from "../../components/dashboard/DashboardTop";
import useFetchCredential from "../../api/useFetchCredential";
import { updateProfileValues } from "../../utils/initialValues";
import { validateUpdateProfile } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import CustomFormik from "../../utils/CustomFormik";
import InputField from "../../components/globals/InputField";
import SubmitButton from "../../components/globals/SubmitButton";
import axios from "axios";
axios.defaults.withCredentials = true;

const UpdateLoginPage = () => {
  const { data, loading } = useFetchCredential(`admin-auth/get-admin`);
  console.log({ data });

  const initialValues = updateProfileValues(data ? data.data : null);
  const validationSchema = validateUpdateProfile();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);

    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/admin-auth/edit-profile`,
      values,
      { withCredentials: true }
    );
    console.log(response);
    try {
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        history("/dashboard");
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <div className="w-screen h-[65vh]">
      <div className="max-w-[700px] h-full m-auto px-5 md:px-0 flex flex-col justify-center">
        <div className="flex justify-between items-end mb-5">
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl">Welcome, Admin</h2>
            <p className="">You can update the login credentials below</p>
          </div>

          <DashboardTop />
        </div>
        <div className="w-full overflow-y-scroll">
          {data && (
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
                <div className="">
                  <label className="text-sm font-semibold">Username</label>
                  <InputField
                    name="username"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="">
                  <label className="text-sm font-semibold">Email</label>
                  <InputField name="email" placeholder="Enter your email" />
                </div>
                <div className="">
                  <label className="text-sm font-semibold">
                    Account password
                  </label>
                  <InputField
                    name="password"
                    placeholder="Account password"
                    type="password"
                  />
                </div>
              </div>
              <SubmitButton
                title="Update Login Data"
                className="mt-6 w-[100%]"
              />
            </CustomFormik>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateLoginPage;
