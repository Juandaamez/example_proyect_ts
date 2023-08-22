import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("wines")
export class WineEntity extends BaseEntity{
	@PrimaryGeneratedColumn({name:"id"})
	id:number;

	@Column({name:"type"})
	type:number;

	@Column({name:"name",length:100})
	name:string

	@Column({name:"wine_date"})
	wineDate:Date;
}
