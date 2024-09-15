"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  
  IconHome,
  IconUserBolt,
  IconCodeDots,
  IconDeviceDesktopAnalytics,
  IconCertificate,
  IconBriefcase,
  IconBallpen,
  IconAddressBook
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import App from "./App";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#",
      icon: <IconHome className='icon-style' />,
    },
    {
      label: "About Me",
      href: "#",
      icon: <IconUserBolt className='icon-style' />,
    },
    {
      label: "Service",
      href: "#",
      icon: <IconCodeDots className='icon-style' />,
    },
    {
      label: "Skills",
      href: "#",
      icon: <IconDeviceDesktopAnalytics className='icon-style' />,
    },
    {
      label: "Experience",
      href: "#",
      icon: <IconCertificate className='icon-style' />,
    },
    {
      label: "Portfolio",
      href: "#",
      icon: <IconBriefcase className='icon-style' />,
    },
    {
      label: "Blog",
      href: "#",
      icon: <IconBallpen className='icon-style' />,
    },
    {
      label: "Contact",
      href: "#",
      icon: <IconAddressBook className='icon-style' />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={cn("container-style")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='sidebar-body-style'>
          <div className='sidebar-content'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='links-style'>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* <SidebarLink
            link={{
              label: "Manu Arora",
              href: "#",
              icon: (
                <Image
                  src=''
                  className='avatar-style'
                  width={50}
                  height={50}
                  alt='Avatar'
                />
              ),
            }}
          /> */}
          div
        </SidebarBody>
      </Sidebar>
      <App />
    </div>
  );
}

export const Logo = () => (
  <Link href='#' className='logo-style'>
    <div className='logo-box' />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='logo-text'
    >
      Acet Labs
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href='#' className='logo-style'>
    <div className='logo-box' />
  </Link>
);

const Dashboard = () => <div className='overflow-y-scroll'></div>;
