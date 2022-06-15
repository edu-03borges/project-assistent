import { inject, injectable } from "tsyringe";
import { ILangEnglishRepository } from "../../repositories/ILangEnglishRepository";
import { ILangEspanishRepository } from "../../repositories/ILangEspanishRepository";
import { ILangPortugueseRepository } from "../../repositories/ILangPortugueseRepository";
import { IParametersRepository } from "../../../Parameters/repositories/IParametersRepository";
import languages from "../../../../config/languages/languages";
import { ServerError } from "../../../../shared/errors/ServerError";

interface IRequest {
    question: string;
}

@injectable()
class GetPhraseUseCase {

    private langPhrase:any;

    constructor(
        @inject("LangEnglishRepository")
        private langEnglishRepository: ILangEnglishRepository,
        @inject("LangEspanishRepository")
        private langEspanishRepository: ILangEspanishRepository,
        @inject("LangPortugueseRepository")
        private langPortugueseRepository: ILangPortugueseRepository,
        @inject("ParametersRepository")
        private parametersRepository: IParametersRepository
    ) {}

    async execute({ question }: IRequest) {    

        if(question!=undefined) question = question.toLowerCase();

        const { language } = await this.parametersRepository.findParameters();

        switch(language) {
            case languages.portuguese:
                this.langPhrase = this.langPortugueseRepository;
                break;
            case languages.english:
                this.langPhrase = this.langEnglishRepository;
                break;
            case languages.espanish:
                this.langPhrase = this.langEspanishRepository;
                break;
            default:
                throw new ServerError("Value Invalid!");
        }

        const phraseAlredyExists = await this.langPhrase.findPhrase({ question });

        if(!phraseAlredyExists) {
            throw new ServerError("This phrase not exists!");
        }

        return phraseAlredyExists;
    }
}

export { GetPhraseUseCase };