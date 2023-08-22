import {BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CookEntity} from "./cookEntity";
import {IngredientEntity} from "./ingredientEntity";
import {WineEntity} from "./winesEntity";

@Entity("portions")
export class PortionEntity extends BaseEntity{
	@PrimaryGeneratedColumn({name:"id"})
	id:number;


	@Column({name:"portion_name",length:150})
	portionName: string;

	@Column({name:"portion_calories"})
	portionCalories: number;

	@ManyToMany(()=>CookEntity,(cook)=>cook.portions)
	cooks: CookEntity[];

	@ManyToOne(()=>IngredientEntity,{onDelete:"SET NULL"})
	@JoinColumn({name:"ingredient_id",referencedColumnName:"id"})
	ingredient: IngredientEntity;

	@ManyToOne(()=>WineEntity,{onDelete:"SET NULL"})
	@JoinColumn({name:"wine_id",referencedColumnName:"id"})
	wine:WineEntity;

}
