import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
  } from "@heroicons/react/outline";

export const solutions = [
    {
      name: "Analytics",
      description: "Get a better understanding of where your traffic is coming from.",
      href: "#",
      icon: ChartBarIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: CursorClickIcon,
    },
    { name: "Security", description: "Your customers' data will be safe and secure.", href: "#", icon: ShieldCheckIcon },
    {
      name: "Integrations",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      icon: ViewGridIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will drive your customers to convert",
      href: "#",
      icon: RefreshIcon,
    },
  ];

 export  const resources = [
    {
      name: "Help Center",
      description: "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: SupportIcon,
    },
    {
      name: "Guides",
      description: "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: BookmarkAltIcon,
    },
    {
      name: "Events",
      description: "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: CalendarIcon,
    },
    { name: "Security", description: "Understand how we take your privacy seriously.", href: "#", icon: ShieldCheckIcon },
  ];
export  const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    { id: 2, name: "How to use search engine optimization to drive traffic to your site", href: "#" },
    { id: 3, name: "Improve your customer experience", href: "#" },
  ];

export const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
  ];