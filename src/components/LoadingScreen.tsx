import Lottie from "lottie-react";
import animationData from "../assets/animations/codeleap-loading.json";

function LoadingScreen() {
  return (
    <div className="pointer-events-none mx-auto h-96 w-96">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

export default LoadingScreen;
