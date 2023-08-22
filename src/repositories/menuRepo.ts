import {DeleteResult} from "typeorm";
import {AppDataSource} from "../config/db";
import {MenuEntity}  from "../models/menuEntity";

export class MenuRepository{
  private menuRepository = AppDataSource.getRepository(MenuEntity)

	public async findAll():Promise<MenuEntity[]>{
		const menus = await this.menuRepository.find();
		return menus;
	}

	public async save(menu:MenuEntity):Promise<MenuEntity>{
		await this.menuRepository.save(menu);
		return menu;
	}

	public async findById(id:number):Promise<MenuEntity>{
	  return await this.menuRepository.findOneOrFail({where:{id:id}});
	}

	public async countAll():Promise<number>{
		return await this.menuRepository.countBy({});
	}

	public async delete(id: number): Promise<DeleteResult>{
		return await this.menuRepository.delete({id:id})
	}

}
