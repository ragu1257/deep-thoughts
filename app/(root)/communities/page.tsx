import Image from "next/image";


export default function Loading() {
  return (
    <div className="text-light-1">
      <h2 className="justify-center">We are building it...</h2>
      <Image 
      alt="building..."
      width={0}
  height={0}
  sizes="100vw"
  style={{ width: '70%', height: 'auto', margin: '0 auto' }}
      
      src="/assets/file_result.png"  />
    </div>
  );
}