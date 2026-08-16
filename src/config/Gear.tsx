import { Headphones, Keyboard, Laptop, Mouse, Phone } from "lucide-react";

export const devices = [
  {
    name: "MacBook Air M2 13-inch",
    icon: <Laptop className="size-4" />,
  },
  {
    name: "iPhone 14 (128 GB)",
    icon: <Phone className="size-4" />,
  },
  {
    name: "Poco X3 Pro (128 GB)",
    icon: <Phone className="size-4" />,
  },
  {
    name: "Zebronics X1 Wireless",
    icon: <Keyboard className="size-4" />,
  },
  {
    name: "Kreo Harpy Black",
    icon: <Mouse className="size-4" />,
  },
  {
    name: "boAt Nirvana Ivy",
    icon: <Headphones className="size-4" />,
  },
];

export const software = [
  { name: "Brave Browser", href: "https://brave.com/" },
  { name: "Xcode", href: "https://developer.apple.com/xcode/" },
  { name: "Antigravity", href: "https://antigravity.google/" },
  { name: "Cursor", href: "https://cursor.com/" },
  { name: "Proton Workspace", href: "https://proton.me/" },
];
