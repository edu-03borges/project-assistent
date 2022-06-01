import { inject, injectable } from "tsyringe";
import { ILangEnglishRepository } from "../../repositories/ILangEnglishRepository";
import { ILangEspanishRepository } from "../../repositories/ILangEspanishRepository";
import { ILangPortugueseRepository } from "../../repositories/ILangPortugueseRepository";

interface IRequest {
    language: number;
    id?: string;
    question?: string;
    answer?: string;
}

@injectable()
class UpdatePhraseUseCase {
    constructor(
        @inject("LangEnglishRepository")
        private langEnglishRepository: ILangEnglishRepository,
        @inject("LangEspanishRepository")
        private langEspanishRepository: ILangEspanishRepository,
        @inject("LangPortugueseRepository")
        private langPortugueseRepository: ILangPortugueseRepository
    ) {}

    async execute({ language, id, question, answer }: IRequest) {

        switch(language) {
            case 0:
                await this.langPortugueseRepository.updatePhrase({ id, question, answer });
                break;
            case 1:
                await this.langEnglishRepository.updatePhrase({ id, question, answer });
                break;
            case 2:
                await this.langEspanishRepository.updatePhrase({ id, question, answer });
                break;
            default:
                throw new Error("Value Invalid!");
        }

    }
}

export { UpdatePhraseUseCase };