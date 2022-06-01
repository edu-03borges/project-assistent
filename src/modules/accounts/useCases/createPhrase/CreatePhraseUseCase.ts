import { inject, injectable } from "tsyringe";
import { ILangEnglishRepository } from "../../repositories/ILangEnglishRepository";
import { ILangEspanishRepository } from "../../repositories/ILangEspanishRepository";
import { ILangPortugueseRepository } from "../../repositories/ILangPortugueseRepository";

interface IRequest {
    language: number;
    question: string;
    answer: string;
}

@injectable()
class CreatePhraseUseCase {

    constructor(
        @inject("LangEnglishRepository")
        private langEnglishRepository: ILangEnglishRepository,
        @inject("LangEspanishRepository")
        private langEspanishRepository: ILangEspanishRepository,
        @inject("LangPortugueseRepository")
        private langPortugueseRepository: ILangPortugueseRepository
    ) {}

    async execute({ language, question, answer }: IRequest): Promise<void> {

        switch(language) {
            case 0:
                await this.langPortugueseRepository.create({ question, answer });
                break;
            case 1:
                await this.langEnglishRepository.create({ question, answer });
                break;
            case 2:
                await this.langEspanishRepository.create({ question, answer });
                break;
            default:
                throw new Error("Value Invalid!");
        }
    }
}

export { CreatePhraseUseCase };