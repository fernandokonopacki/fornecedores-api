import { Colaborador } from "../db/entity/colaborador.entity";
import { AppDataSource } from "../db/data-source";
import { CustomError } from "../model/customError.model";
import { listarColaborador } from "../DTO/listarColaboradores.DTO";

export class colaboradorService{

    public static async listarColaborador(): Promise<listarColaborador[]>{
        const colaboradorRepository = AppDataSource.getRepository(Colaborador);
        return await colaboradorRepository.find();
    }

    public static async salvarColaborador(param: Colaborador){
        const colaboradorRepository = AppDataSource.getRepository(Colaborador);
        await colaboradorRepository.save(param);
    }

    public static async buscarPorId(id: number){
        const colaboradorRepository = AppDataSource.getRepository(Colaborador);
        const colaborador = await colaboradorRepository.findOne({where: {
            idColaborador: id
        }});

        if(!colaborador){
            throw new CustomError('Colaborador não encontrado', 404);
        }
        return colaborador;
    }

}