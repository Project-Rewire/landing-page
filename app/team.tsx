import * as Avatar from '@radix-ui/react-avatar';
import { FaGithub } from 'react-icons/fa';

export default function Team() {

  interface Member {
    name: string;
    profileImage: string;
    profileUrl: string;
    showProfileImage: boolean;
    displayProfileUrl: boolean;
  }

  const members: Member[] = [
    {
      name: "Isuru Karunaratna",
      profileImage: "https://avatars.githubusercontent.com/u/93091809?s=400&u=ba8b68d26f8bbc0538605ab245ccf455441151fe&v=4",
      profileUrl: "https://github.com/isuruK2003",
      showProfileImage: false,
      displayProfileUrl: true,
    },
    {
      name: "Yasith Gunawardhana",
      profileImage: "https://avatars.githubusercontent.com/u/151343853?v=4",
      profileUrl: "https://github.com/yasithS",
      showProfileImage: false, // set to true if you like to show the profile image
      displayProfileUrl: true,
    },
    {
      name: "Randul Arampola",
      profileImage: "https://avatars.githubusercontent.com/u/192011898?v=4",
      profileUrl: "https://github.com/RandulArampola",
      showProfileImage: false,
      displayProfileUrl: true,
    },
    {
      name: "Shakeel Gadhafi",
      profileImage: "https://avatars.githubusercontent.com/u/169989295?v=4",
      profileUrl: "https://github.com/ShakeelGadafi",
      showProfileImage: false,
      displayProfileUrl: true,
    },
    {
      name: "Harshana Chamod",
      profileImage: "https://avatars.githubusercontent.com/u/190680889?v=4",
      profileUrl: "https://github.com/Harshana-003",
      showProfileImage: false,
      displayProfileUrl: true,
    },
    {
      name: "Nidarsa Ragunathan",
      profileImage: "https://avatars.githubusercontent.com/u/191441956?v=4",
      profileUrl: "https://github.com/Nidarsa13",
      showProfileImage: false,
      displayProfileUrl: true,
    },
  ]

  return (
    <section>
      <div className="container py-24">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Meet Our Team</h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            Meet the dedicated team behind Rewire, committed to creating innovative solutions for addiction recovery
            and mental wellness.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((p) => (
            <div key={p.name} className="flex items-center gap-4 rounded-lg border bg-card p-6 text-center shadow-sm">
              <Avatar.Root className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-opacity-40 shadow-md">
                <Avatar.Image className="h-full w-full object-cover" src={p.showProfileImage ? p.profileImage : ""} alt={p.name} />
                <Avatar.Fallback className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-600 bg-gray-300">
                  {p.name.split("")[0][0]}
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.displayProfileUrl &&
                  <a
                    href={p.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
                  >
                    <FaGithub />{p.profileUrl.split("/").pop()}
                  </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}