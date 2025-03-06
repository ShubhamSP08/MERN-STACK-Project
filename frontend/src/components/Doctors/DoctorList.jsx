import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  // Debugging
  console.log("Doctors:", doctors);
  console.log("Loading:", loading);
  console.log("Error:", error);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && doctors && Array.isArray(doctors) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[80px] mt-[30px] lg:mt-[25px]">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;