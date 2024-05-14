import Image from "next/image";


export default function Activity() {
  return (
    <div className="text-light-1">
      <h2 className="justify-center">No Activities are happening near you</h2>
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