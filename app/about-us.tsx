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
              { name: "Shakeel Gadhafi", role: "Team Leader" },
              { name: "Isuru Karunaratna", role: "Team Member" },
              { name: "Yasith Gunawardhana", role: "Team Member" },
              { name: "Nidarsa Ragunathan", role: "Team Member" },
              { name: "Harshana Chamod", role: "Team Member" },
              { name: "Randul Arampola", role: "Team Member" },
            ].map((p) => (
              <div key={p.name} className="rounded-lg border bg-card p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}