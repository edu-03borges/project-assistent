import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../dtos/ILangDTO";

import { LangEspanish } from "../infra/typeorm/entities/LangEspanish";

interface ILangEspanishRepository {
    create({ question, answer }: IRequestLangDTO): Promise<void>;
    findPhrase({ id, question, answer }: IFindPhraseDTO): Promise<LangEspanish>;
    updatePhrase({ id, question, answer }: IRequestLangUpdateDTO): Promise<void>;
}

export { ILangEspanishRepository };