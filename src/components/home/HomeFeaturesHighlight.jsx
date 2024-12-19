import { FaLightbulb } from "react-icons/fa";

const HomeFeaturesHighlight = () => {
  return (
    <div className="w-full banner-section text-white">
      <div className="container py-28 items-center px-8 md:px-0">
        <div className="flex flex-col items-center gap-8 md:gap-16 px-5 md:px-0">
          <div className="flex items-center gap-2 px-6 py-2 title-box uppercase">
            <span>Features Highlight</span>
            <FaLightbulb />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
            <div className="flex gap-7 items-center">
              <img
                src="/assets/images/home/Recommendation.webp"
                alt=""
                className="w-[80px] h-[80px] rounded-full border-2 updown"
              />
              <span className="text-lg font-semibold">
                Friend Recommendations
              </span>
            </div>
            <div className="flex gap-7 items-center leftRight">
              <img
                src="/assets/images/home/audio.webp"
                alt=""
                className="w-[80px] h-[80px] rounded-full border-2"
              />
              <span className="text-lg font-semibold">Audio Reviews</span>
            </div>
            <div className="flex gap-7 items-center">
              <img
                src="/assets/images/home/emoji.png"
                alt=""
                className="w-[80px] h-[80px] rounded-full border-2"
              />
              <span className="text-lg font-semibold">Emoji-based Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturesHighlight;
