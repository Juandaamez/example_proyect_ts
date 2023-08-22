import {Application, Request, Response} from "express";
import {WineRepository} from "../repositories/wineRepo";


export class WineController {

	private wineRepository = new WineRepository();

	public routes(app: Application):void{
		app.route("/wines").get((req:Request,res:Response)=>{
			this.wineRepository.findAll().then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

		app.route("/wine/:id")
		.get((req:Request,res:Response)=>{
			const id = parseInt(req.params.id)
			this.wineRepository.findById(id).then((response)=>{
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
			this.wineRepository.delete(id).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message: err.message
				});
			});
		});

		app.route("/wine/save").post((req:Request,res:Response)=>{
			const wine = req.body;
			this.wineRepository.save(wine).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

		app.route("/wn/count").get((req:Request,res:Response)=>{
			this.wineRepository.countAll().then((response)=>{
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
