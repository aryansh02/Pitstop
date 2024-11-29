import Image from 'next/image';


export default function BannerHP() {
  return (
    <div className="w-full h-[483px] bg-white p-6">
      <Image
        src="/images/BannerImage.jpg"
        alt="Promotional Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
