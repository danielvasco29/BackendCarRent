import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICreateCategoryDTO } from '../../repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute({
    name,
    description,
    admin,
  }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!', 401);
    }

    this.categoriesRepository.create({ name, description, admin });
  }
}

export { CreateCategoryUseCase };
