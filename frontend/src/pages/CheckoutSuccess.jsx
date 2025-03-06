import { CheckCircleIcon } from "@heroicons/react/solid"; // Importing the icon
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home"); // Navigate to the homepage
  };

  return (
    <div className="flex flex-col items-center justify-center m-14 ">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your payment. Your transaction has been completed.
        </p>
        <p className="pb-3">Have a great day.</p>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleGoHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
