import * as Avatar from '@radix-ui/react-avatar';

export default function AboutUs() {
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
          {[
            { name: "Shakeel Gadhafi", role: "Team Leader", img: "" },
            { name: "Isuru Karunaratna", role: "Team Member", img: "" },
            { name: "Yasith Gunawardhana", role: "Team Member", img: "" },
            { name: "Nidarsa Ragunathan", role: "Team Member", img: "" },
            { name: "Harshana Chamod", role: "Team Member", img: "" },
            { name: "Randul Arampola", role: "Team Member", img: "" },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-4 rounded-lg border bg-card p-6 text-center shadow-sm"
            >
              <Avatar.Root className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 bg-gray-200 shadow-md">
                <Avatar.Image
                  className="h-full w-full object-cover"
                  src={p.img}
                  alt={p.name}
                />
                <Avatar.Fallback className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-600 bg-gray-300">
                  {p.name.split(" ")[0][0]}
                </Avatar.Fallback>
              </Avatar.Root>

              <div className="text-left">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}