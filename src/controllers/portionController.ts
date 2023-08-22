import {Application, Request, Response} from "express";
import {PortionRepository} from "../repositories/portionRepo";


export class PortionController {

  private portionRepository = new PortionRepository();

  public routes(app: Application):void{

    app.route("/portions").get((req:Request,res:Response)=>{
      this.portionRepository.findAll().then((response)=>{
        res.status(200).json({
          response
        });
      }).catch(err=>{
        res.status(400).json({
          message:err.message
        });
      });
    });


    app.route("/portion/:id")
    .get((req:Request,res:Response)=>{
      const id = parseInt(req.params.id)
      this.portionRepository.findById(id).then((response)=>{
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
      this.portionRepository.delete(id).then((response)=>{
        res.status(200).json({
          response
        });
      }).catch(err=>{
        res.status(400).json({
          message: err.message
        });
      });
    });


    app.route("/portion/save").post((req:Request,res:Response)=>{
      const portion = req.body;
      this.portionRepository.save(portion).then((response)=>{
        res.status(200).json({
          response
        });
      }).catch(err=>{
        res.status(400).json({
          message:err.message
        });
      });
    });


    app.route("/pr/count").get((req:Request,res:Response)=>{
      this.portionRepository.countAll().then((response)=>{
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
