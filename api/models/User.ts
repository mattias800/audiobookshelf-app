import {MediaProgress} from "@/api/models/MediaProgress";

export interface User {
  id: string;
  username: string;
  type: "root" | "guest" | "user" | "admin";
  token: string;
  mediaProgress: Array<MediaProgress>;
}
