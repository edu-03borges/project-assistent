import { inject, injectable } from "tsyringe";
import { ILangEnglishRepository } from "../../repositories/ILangEnglishRepository";
import { ILangEspanishRepository } from "../../repositories/ILangEspanishRepository";
import { ILangPortugueseRepository } from "../../repositories/ILangPortugueseRepository";

interface IRequest {
    language: number;
    question: string;
}

@injectable()
class GetPhraseUseCase {
    constructor(
        @inject("LangEnglishRepository")
        private langEnglishRepository: ILangEnglishRepository,
        @inject("LangEspanishRepository")
        private langEspanishRepository: ILangEspanishRepository,
        @inject("LangPortugueseRepository")
        private langPortugueseRepository: ILangPortugueseRepository
    ) {}

    async execute({ language, question }: IRequest) {    

        switch(language) {
            case 0:
                return await this.langPortugueseRepository.findPhrase({ question });
            case 1:
                return await this.langEnglishRepository.findPhrase({ question });
            case 2:
                return await this.langEspanishRepository.findPhrase({ question });
            default:
                throw new Error("Value Invalid!");
        }
    }
}

export { GetPhraseUseCase };