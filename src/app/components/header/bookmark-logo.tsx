import Image from "next/image";

export function BookmarkLogo() {
  return (
    <Image
      src={"/logo-bookmark.svg"}
      alt="logo bookmark"
      width={200}
      height={200}
    />
  );
}
