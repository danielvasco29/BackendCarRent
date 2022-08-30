import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
  admin: boolean;
}

interface ICategoriesRepository {
  create({ name, description, admin }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
