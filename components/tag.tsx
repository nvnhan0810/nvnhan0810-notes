import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";
import { titleCase } from "@/lib/utils";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={`/tags/${slug(tag)}`}
    >
      {titleCase(tag)} {count ? `(${count})` : null}
    </Link>
  );
}
