import { Url } from "url";

export interface Course {
  id: string;
  title: string;
  author: string;
  content: string;
  picture: Url;
}
