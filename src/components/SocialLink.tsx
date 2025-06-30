import { FloatingDock } from "@/components/ui/floating-dock";

import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandFacebook
  } from "@tabler/icons-react";
  
export default function FloatingDockDemo() {
    const socialLinks = [
        {
          title: "Home",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.linkedin.com/in/hrmrakib/",
        },
        {
            title: "GitHub",
            icon: (
              <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/hrmrakib",
        },
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://x.com/hrm_rakib",
        },
        {
          title: "Facebook",
          icon: (
            <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.facebook.com/hrmrakib/",
        },
      ];
  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={socialLinks}
      />
    </div>
  );
}
