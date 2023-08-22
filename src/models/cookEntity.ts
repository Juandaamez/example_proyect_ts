import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {PortionEntity} from "./portionEntity";

@Entity({name: "cooks"})
export class CookEntity extends BaseEntity{
	@PrimaryGeneratedColumn({name: "id"})
	id: number;

	@Column({name:"cook_identifier",length:150})
	cookIdentifier: string;

	@Column({name:"names",length:150})
	names: string;

	@Column({name:"first_lastname",length:100})
	firstLastname: string;

	@Column({name:"second_lastname",length:100})
	secondLastname: string;

	@Column({name:"birth_date"})
	birthDate: Date;

	@ManyToMany(() => PortionEntity,(portion)=>portion.cooks,{
		cascade:true,
	})
	@JoinTable({name:"portions_cooks",
						 joinColumn:{name:"cook_id"},
						 inverseJoinColumn:{name:"portion_id"}})
	portions: PortionEntity[];
}
