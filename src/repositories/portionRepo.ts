import {DeleteResult} from "typeorm";
import {AppDataSource} from "../config/db";
import {PortionEntity}  from "../models/portionEntity";

export class PortionRepository{
  private portionRepository = AppDataSource.getRepository(PortionEntity)

	public async findAll():Promise<PortionEntity[]>{
		const portions = await this.portionRepository.find();
		return portions;
	}

	public async save(portion:PortionEntity):Promise<PortionEntity>{
		await this.portionRepository.save(portion);
		return portion;
	}

	public async findById(id:number):Promise<PortionEntity>{
	  return await this.portionRepository.findOneOrFail({where:{id:id}});
	}

	public async countAll():Promise<number>{
		return await this.portionRepository.countBy({});
	}

	public async delete(id: number): Promise<DeleteResult>{
		return await this.portionRepository.delete({id:id})
	}

}
