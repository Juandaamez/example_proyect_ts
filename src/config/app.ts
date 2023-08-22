import express from 'express';
import cors from "cors";
import morgan from 'morgan';
import { CookController } from '../controllers/cookController';
import { IngredientController } from '../controllers/ingredientController';
import { PortionController } from '../controllers/portionController';
import { MenuController } from '../controllers/menuController';
import { WineController } from '../controllers/wineController';

class App{
	public app:express.Application;
	private cookController = new CookController();
	private wineController = new WineController();
	private portionController = new PortionController();
	private ingredientController = new IngredientController();
	private menuController = new MenuController();

	constructor(){
		this.app = express();
		this.initConf();
		this.activateRoutes();
	}

	public initConf():void{
		this.app.set("PORT", 8082);
		this.app.use(cors());
		this.app.use(morgan("dev"));
		this.app.use(express.json({limit:"100mb"}));
		this.app.use(express.urlencoded({extended:true}));
	}

	public activateRoutes():void{
		this.menuController.routes(this.app);
		this.ingredientController.routes(this.app);
		this.portionController.routes(this.app);
		this.wineController.routes(this.app);
		this.cookController.routes(this.app);
	}

	public initializer():void{
		const port = this.app.get("PORT");
		this.app.listen(port,()=>{
			console.log("funcionando en:",port);
		});
	}

}
export default App;
