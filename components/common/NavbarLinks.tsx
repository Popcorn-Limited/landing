import { useRouter } from "next/router";
import NavbarLink from "@/components/common/NavbarLink";
import { useAccount } from "wagmi";

const links: { label: string; url: string; onClick?: Function }[] = [
  {
    label: "Smart Vaults",
    url: "/vaults",
  },
  {
    label: "Boost Vaults",
    url: "/boost",
  },
  {
    label: "Lock Vaults",
    url: "/vaults/lock",
  },
  {
    label: "Stats",
    url: "/stats",
  },
  {
    label: "Archive",
    url: "https://archive.pop.network/",
  },
  {
    label: "Buy VCX",
    url: "https://swap.cow.fi/#/1/swap/WETH/VCX",
  }
];

export default function NavbarLinks(): JSX.Element {
  const router = useRouter();

  return (
    <>
      {
        links.map((link) => (
          <NavbarLink
            key={link.label}
            label={link.label}
            url={`${link.url}`}
            isActive={router.pathname === link.url}
          />
        ))
      }
    </>
  );
}
