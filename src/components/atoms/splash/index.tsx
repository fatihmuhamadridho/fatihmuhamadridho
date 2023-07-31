import { Loader } from "@mantine/core";

const Splash = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Loader color="gray" size={"xl"} variant="dots" />
    </div>
  );
};

export default Splash;
