import {Application, Request, Response} from "express";
import {CookRepository} from "../repositories/cookRepo";


export class CookController {

	private cookRepository = new CookRepository();

	public routes(app: Application):void{
		app.route("/cooks").get((req:Request,res:Response)=>{
			this.cookRepository.findAll().then((response)=>{
				res.status(200).json({
          response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

		app.route("/cook/:id")
		.get((req:Request,res:Response)=>{
			const id = parseInt(req.params.id)
			this.cookRepository.findById(id).then((response)=>{
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
			this.cookRepository.delete(id).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message: err.message
				});
			});
		});

		app.route("/cook/save").post((req:Request,res:Response)=>{
			if (!isNaN(req.body.id)){
				return res.status(405).json({
					message:"not allowed"
				})
			}
			const cook = req.body;
			this.cookRepository.save(cook).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		}).put((req:Request,res:Response)=>{
			const cook = req.body;
			this.cookRepository.save(cook).then((response)=>{
				res.status(200).json({
					response
				});
			}).catch(err=>{
				res.status(400).json({
					message:err.message
				});
			});
		});

		app.route("/ck/count").get((req:Request,res:Response)=>{
			this.cookRepository.countAll().then((response)=>{
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
