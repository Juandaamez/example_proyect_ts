import {DeleteResult} from "typeorm";
import {AppDataSource} from "../config/db";
import {CookEntity}  from "../models/cookEntity";

export class CookRepository{
  private cookRepository = AppDataSource.getRepository(CookEntity)

	public async findAll():Promise<CookEntity[]>{
		const cooks = await this.cookRepository.find({relations:['portions']});
		return cooks;
	}

	public async save(cook:CookEntity):Promise<CookEntity>{
		await this.cookRepository.save(cook);
		return cook;
	}

	public async findById(id:number):Promise<CookEntity>{
	  return await this.cookRepository.findOneOrFail({where:{id:id}});
	}

	public async countAll():Promise<number>{
		return await this.cookRepository.countBy({});
	}

	public async delete(id: number): Promise<DeleteResult>{
		return await this.cookRepository.delete({id:id})
	}
}
