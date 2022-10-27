import { Controller, Get, Param, Post, Put, Req, Res } from "routing-controllers";
import { colaboradorService } from "../services/colaborador.service";

@Controller("/colaborador")
export class Colaborador{

    @Get()
    getColaborador(@Req() req: any, @Res() res: any){
        return colaboradorService.listarColaborador()
        .then(response => {
            return res.status(200).send(response);
        }).catch(error => {
            return res.status(400).send(error);
        })
    }

    @Post()
    postColaborador(@Req() req: any, @Res() res: any){
        let param = req.body;
        return colaboradorService.salvarColaborador(param)
        .then(response => {
            return res.status(200).send(response);
        }).catch(error => {
            return res.status(400).send(error);
        })
    }

    @Get("/:id")
    colaboradorId(@Param('id') id: number, @Req() req: any, @Res() res: any){
        return colaboradorService.buscarPorId(id)
        .then(response => {
            return res.status(200).send(response);
        }).catch(error => {
            return res.status(error.status).send(error);
        })
    }

    // @Put("/alterar/:id")
    // alterarColaborador(@Param('id') id: number, @Req() req: any, @Res() res: any){
    //     return colaboradorService.alteraColaborador(id)
    //     .then(response => {
    //         return res.status(200).send(response);
    //     }).catch(error => {
    //         return res.status(400).send(error);
    //     })
    // }
}