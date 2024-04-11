import Image from "next/image";

const SidePart = () => {
  return (
    <div className="hidden lg:flex lg:justify-center lg:items-center bg-[#EEEEEE]">
      <Image
        className="w-auto h-auto"
        alt="bg-img"
        src="/authgraphic.png"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default SidePart;
