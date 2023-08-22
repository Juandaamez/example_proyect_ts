import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("ingredients")
export class IngredientEntity extends BaseEntity{
	@PrimaryGeneratedColumn({name:"id"})
	id:number;

	@Column({name:"name",length:150})
	name:string;

	@Column()
	price:number;

	@Column()
	calories:number;

	@Column({length:150})
	description:string;

	@Column()
	stock:number;
	
}
