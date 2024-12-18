import TrackVisibility from "react-on-screen";

const HomeImpact = () => {
  return (
    <div className="w-full impact text-white" id="how-it-works">
      <div className="container py-24 md:py-28 items-center px-7 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 lg:px-10">
          <h2 className="text-4xl text-center md:text-start mb-8">
            Did you know?
          </h2>
          <p className="text-xl text-center md:text-start font-semibold">
            Over 70% of online reviews are influenced by fake, paid, or
            impersonal sources. Chumcore changes the game by bringing trust back
            into recommendations—straight from your friends."
          </p>
        </div>
        <div className="col-span-1">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__slower animate__animated animate__fadeIn"
                    : ""
                }
              >
                <img src="/assets/images/home/review1.png" alt="" />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};

export default HomeImpact;
