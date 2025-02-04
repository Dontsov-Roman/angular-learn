import { ID } from "../services/rest/base-service.types";

export type Product = ID & {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
