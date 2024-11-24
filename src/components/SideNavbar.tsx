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
  IconAddressBook,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import App from "./App";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#home",
      icon: <IconHome className='icon-style' />,
    },
    {
      label: "About Me",
      href: "#about",
      icon: <IconUserBolt className='icon-style' />,
    },
    {
      label: "Service",
      href: "#service",
      icon: <IconCodeDots className='icon-style' />,
    },
    {
      label: "Skills",
      href: "#skill",
      icon: <IconDeviceDesktopAnalytics className='icon-style' />,
    },
    {
      label: "Experience",
      href: "#experience",
      icon: <IconCertificate className='icon-style' />,
    },
    {
      label: "Projects",
      href: "#projects",
      icon: <IconBriefcase className='icon-style' />,
    },
    {
      label: "Blog",
      href: "#blog",
      icon: <IconBallpen className='icon-style' />,
    },
    {
      label: "Contact",
      href: "#contact",
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
        </SidebarBody>
      </Sidebar>
      <App />
    </div>
  );
}

export const Logo = () => (
  <Link href='/' className='logo-style'>
    <div className='logo-box' />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='logo-text'
    >
      Great Dev
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href='#' className='logo-style'>
    <div className='logo-box' />
  </Link>
);
