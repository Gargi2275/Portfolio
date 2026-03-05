"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function EyeCursorDemo() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
         <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 mb-12 px-5 py-2 rounded-full border border-border bg-background hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        {/* Project Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Flux Project Demo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A role-based dashboard system featuring secure demo login,
            hierarchical access control, and structured administrative workflows.
          </p>
        </div>

        {/* Demo Login Page */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Demo Login Page
          </h2>
          <img
            src="/projects/flux/login.png"
            alt="Flux Login Page"
            className="w-[70%] mx-auto rounded-2xl border border-border shadow-xl hover:scale-[1.01] transition duration-300"
          />
        </section>

        {/* Role Based Dashboards */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 border-b pb-2">
            Role-Based Dashboards (4 Levels)
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Tech Admin Dashboard", img: "techadmin.jpeg" },
              { title: "Super Admin Dashboard", img: "superadmin.jpeg" },
              { title: "Admin Dashboard", img: "admin.jpeg" },
              { title: "User Dashboard", img: "user.jpeg" },
            ].map((role, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <img
                  src={`/projects/flux/${role.img}`}
                  alt={role.title}
                  className="w-full rounded-2xl border border-border shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Pages */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 border-b pb-2">
            Pages
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Permissions Management",
                imgs: ["permissions1.jpeg", "permissions2.jpeg"],
              },
              {
                title: "User Management",
                imgs: ["users1.png", "users2.jpeg"],
              },
              {
                title: "Analytics Overview",
                imgs: ["analytics1.png", "analytics2.png"],
              },
              {
                title: "Stock Management",
                imgs: ["stocks1.png", "stocks2.png"],
              },
            ].map((page, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium">{page.title}</h3>

                <div className="grid gap-4">
                  {page.imgs.map((image, i) => (
                    <img
                      key={i}
                      src={`/projects/flux/${image}`}
                      alt={`${page.title} ${i + 1}`}
                      className="w-full rounded-xl border border-border shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}