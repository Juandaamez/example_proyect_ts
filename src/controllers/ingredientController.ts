import {Application, Request, Response} from "express";
import {IngredientRepository} from "../repositories/ingredientRepo";


export class IngredientController {

	private ingredientRepository = new IngredientRepository();

	public routes(app: Application):void{
		app.route("/ingredients").get((req:Request,res:Response)=>{
			this.ingredientRepository.findAll().then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});


		app.route("/ingredient/:id")
		.get((req:Request,res:Response)=>{
			const id = parseInt(req.params.id)
			this.ingredientRepository.findById(id).then((response)=>{
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
			this.ingredientRepository.delete(id).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message: err.message
				});
			});
		});


		app.route("/ingredient/save").post((req:Request,res:Response)=>{
			const ingredient = req.body;
			this.ingredientRepository.save(ingredient).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});


		app.route("/in/count").get((req:Request,res:Response)=>{
			this.ingredientRepository.countAll().then((response)=>{
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
