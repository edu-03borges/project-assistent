import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../../../dtos/ILangDTO";

import { getRepository, Repository } from "typeorm";
import { ILangEspanishRepository } from "../../../repositories/ILangEspanishRepository";
import { LangEspanish } from "../entities/LangEspanish";

class LangEspanishRepository implements ILangEspanishRepository{
    
    private repository: Repository<LangEspanish>;
    
    constructor() {
        this.repository = getRepository(LangEspanish);
    }

    async create({ question, answer }: IRequestLangDTO): Promise<void> {
        const phrase = this.repository.create({
            question, 
            answer
        });

        await this.repository.save(phrase);
    }

    async findPhrase({ id, question, answer }: IFindPhraseDTO): Promise<LangEspanish> {
        
        if(id != undefined) 
            return await this.repository.findOne({ id });
        else if(question != undefined) 
            return await this.repository.findOne({ question });
        else if(answer != undefined) 
            return await this.repository.findOne({ answer });
    }

    async updatePhrase({ id, question, answer }: IRequestLangUpdateDTO): Promise<void> {
        
        const phrase = await this.findPhrase({ id, question, answer });

        if(question != undefined) phrase.question = question;
        if(answer != undefined) phrase.answer = answer;

        phrase.updated_at = new Date();

        await this.repository.save(phrase);
    }   
}

export { LangEspanishRepository };