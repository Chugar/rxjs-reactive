import { Url } from "url";

export interface Course {
    id: number;
  title: string;
  author: string;
  content: string;
  picture: Url;
}
