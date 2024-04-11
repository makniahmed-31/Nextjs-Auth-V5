import SidePart from "@/components/custom/SidePart";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <SidePart />
      <div className="w-full h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
