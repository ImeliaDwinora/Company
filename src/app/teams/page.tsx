import Image from "next/image";

interface Team {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
}

export default async function Teams() {
  const response = await fetch("https://randomuser.me/api/?results=8", {
    cache: "no-store",
  });
  const data = await response.json();
  const teams: Team[] = data.results;

  return (
    <section className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl text-[#A5B68D] font-semibold text-center">
        Our Team
      </h2>
      <p className="mt-2 text-gray-600 text-center">
        Meet the awesome people behind our company.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {teams.map((member, index) => (
          <article
            key={index}
            className="p-4 bg-white rounded-xl shadow border flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold mt-4">
              {member.name.first} {member.name.last}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{member.email}</p>
            <p className="text-xs italic text-gray-600">
              {member.location.city}, {member.location.country}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
