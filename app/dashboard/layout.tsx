import BgImg from "@/components/custom/BgImg";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <BgImg />
      <div className="w-full h-screen"> {children}</div>
    </div>
  );
};

export default DashboardLayout;
