import {DeleteResult} from "typeorm";
import {AppDataSource} from "../config/db";
import {IngredientEntity}  from "../models/ingredientEntity";

export class IngredientRepository{
  private ingredientRepository = AppDataSource.getRepository(IngredientEntity)

	public async findAll():Promise<IngredientEntity[]>{
		const ingredients = await this.ingredientRepository.find();
		return ingredients;
	}

	public async save(ingredient:IngredientEntity):Promise<IngredientEntity>{
		await this.ingredientRepository.save(ingredient);
		return ingredient;
	}

	public async findById(id:number):Promise<IngredientEntity>{
	  return await this.ingredientRepository.findOneOrFail({where:{id:id}});
	}

	public async countAll():Promise<number>{
		return await this.ingredientRepository.countBy({});
	}

	public async delete(id: number): Promise<DeleteResult>{
		return await this.ingredientRepository.delete({id:id})
	}

}
