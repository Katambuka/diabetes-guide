import Image from 'next/image';

export default function TeamCard({ member }: { member: { name: string; role: string; bio: string; image: string } }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-60">
        <Image 
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-blue-600 mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
}