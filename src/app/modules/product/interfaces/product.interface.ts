import { CategoryInterface } from "../../category/interfaces/category.interface";

export interface ProductInterface {
  id: number;
  description: string;
  price: number;
  enable: number;
  created_at: string;
  updated_at: string;
  idcategory:number;
  category:CategoryInterface|null;
}
