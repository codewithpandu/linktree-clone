import { PiBagSimple } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { CgShutterstock } from "react-icons/cg";

export const icons = {
  bag: PiBagSimple,
  github: FaGithub,
  linkedin: FaLinkedin,
  shutterstock: CgShutterstock,
} satisfies Record<string, IconType>;
