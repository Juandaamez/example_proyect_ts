import {DeleteResult} from "typeorm";
import {AppDataSource} from "../config/db";
import {WineEntity}  from "../models/winesEntity";

export class WineRepository{
  private wineRepository = AppDataSource.getRepository(WineEntity)

	public async findAll():Promise<WineEntity[]>{
		const wines = await this.wineRepository.find();
		return wines;
	}

	public async save(wine:WineEntity):Promise<WineEntity>{
		await this.wineRepository.save(wine);
		return wine;
	}

	public async findById(id:number):Promise<WineEntity>{
	  return await this.wineRepository.findOneOrFail({where:{id:id}});
	}

	public async countAll():Promise<number>{
		return await this.wineRepository.countBy({});
	}

	public async delete(id: number): Promise<DeleteResult>{
		return await this.wineRepository.delete({id:id})
	}

}
