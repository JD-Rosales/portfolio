import { AppRoute } from "~/data/data";

type ActiveSection = (typeof AppRoute)[number]["href"];

export { type ActiveSection };
