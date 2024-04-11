import Image from "next/image";

const BgImg = () => {
  return (
    <Image
      className="w-auto h-auto"
      alt="bg-img"
      src="/top-graphic.png"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
      priority
    />
  );
};
export default BgImg;
