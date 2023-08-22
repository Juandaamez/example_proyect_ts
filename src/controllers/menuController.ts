import {Application, Request, Response} from "express";
import {MenuRepository} from "../repositories/menuRepo";


export class MenuController {

	private menuRepository = new MenuRepository();

	public routes(app: Application):void{
		app.route("/menus").get((req:Request,res:Response)=>{
			this.menuRepository.findAll().then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

		app.route("/menu/:id")
		.get((req:Request,res:Response)=>{
			const id = parseInt(req.params.id)
			this.menuRepository.findById(id).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message: err.message
				});
			});
		})
		.delete((req:Request,res:Response)=>{
			const id = parseInt(req.params.id)
			this.menuRepository.delete(id).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message: err.message
				});
			});
		});

		app.route("/menu/save").post((req:Request,res:Response)=>{
			const menu = req.body;
			this.menuRepository.save(menu).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

		app.route("/mn/count").get((req:Request,res:Response)=>{
			this.menuRepository.countAll().then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

	}
}
