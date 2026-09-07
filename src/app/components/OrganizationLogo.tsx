import Image from 'next/image';
const assets: Record<string, string> = {
  'Turkish Airlines Technology': 'turkish-technology.svg',
  'SPOT': 'spot.png',
  'TÜBİTAK BİLGEM, B3LAB': 'bilgem.png',
  'Baykar Cezeri AI & Robotics Technologies': 'baykar.svg',
  'Seller Integral': 'seller-integral.png',
  'Maestrozon': 'maestrozon.jpg',
  'Schneider Electric': 'schneider.svg',
  'Overtech Information Technologies Inc.': 'overtech.png',
  'Istanbul Technical University (ITU)': 'itu.png',
};
export default function OrganizationLogo({ name }: { name: string }) {
  const asset = assets[name];
  if (!asset) return null;
  return <div className={`flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl border border-[#004225]/10 shadow-sm ${asset === 'baykar.svg' ? 'bg-[#152b45] p-1.5' : 'bg-white p-2'}`}>
    <Image src={`/logos/${asset}`} alt={`${name} logo`} width={80} height={80} unoptimized className="h-full w-full object-contain" />
  </div>;
}
