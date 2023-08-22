import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {PortionEntity} from "./portionEntity";

@Entity("menus")
export class MenuEntity extends BaseEntity{
	@PrimaryGeneratedColumn({name:"id"})
	id:number;

	@Column({name:"menu_code"})
	menu_code: number;

	@Column({name:"name",length:150})
	name:string;

	@Column({name:"price"})
	price: number;

	@ManyToMany(()=>PortionEntity)
	@JoinTable({name:"portions_menu",
						 joinColumn:{name:"menu_id"},
						 inverseJoinColumn:{name:"portion_id"}})
	portions: PortionEntity[];

}
