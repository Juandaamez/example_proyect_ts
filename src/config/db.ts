import { DataSource } from "typeorm";
import { CookEntity } from "../models/cookEntity";
import { IngredientEntity } from "../models/ingredientEntity";
import { MenuEntity } from "../models/menuEntity";
import { PortionEntity } from "../models/portionEntity";
import { WineEntity } from "../models/winesEntity";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME_DB,
    password: String(process.env.PASSWORD),
    database: process.env.DATABASE,
    entities: [
      CookEntity,
      IngredientEntity,
      MenuEntity,
      PortionEntity,
      WineEntity
    ],
    synchronize: true,
});

export const connectDB = (): Promise<DataSource> => {
    return AppDataSource.initialize();
};
