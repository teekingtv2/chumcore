import { FaArrowUp } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

const HowCard = ({ title, description, image }) => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible ? "animate__slower animate__animated animate__fadeIn" : ""
          }
        >
          <div className="col-span-1 flex flex-col gap-5 md:gap-7 card-box1 text-black">
            <div className="text-2xl md:text-3xl font-bold ">{title}</div>
            <div className="text-gray-700 text-[17px] mb-2">{description}</div>
            <div className="flex justify-between items-center">
              <img
                src={`/assets/images/icons/${image}`}
                alt=""
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px",
                }}
                className="w-[60px] h-[60px]"
              />
              <div className="w-12 h-12 p-3 border-[#33333359] border-[1px] rounded-full flex justify-center items-center">
                <FaArrowUp className="text-chumOrange" />
              </div>
            </div>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};

export default HowCard;
