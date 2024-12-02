import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <RotatingLines
      strokeColor="#3ae3d9"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);

export default LoadingSpinner;
