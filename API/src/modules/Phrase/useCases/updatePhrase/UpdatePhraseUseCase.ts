import { inject, injectable } from "tsyringe";
import languages from "../../../../config/languages/languages";
import { ServerError } from "../../../../shared/errors/ServerError";
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

    private langPhrase: any;

    constructor(
        @inject("LangEnglishRepository")
        private langEnglishRepository: ILangEnglishRepository,
        @inject("LangEspanishRepository")
        private langEspanishRepository: ILangEspanishRepository,
        @inject("LangPortugueseRepository")
        private langPortugueseRepository: ILangPortugueseRepository
    ) {}

    async execute({ language, id, question, answer }: IRequest) {

        if(question!=undefined) question = question.toLowerCase();
        if(answer!=undefined) answer = answer.toLowerCase();

        switch(Number(language)) {
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

        const phraseAlredyExists = await this.langPhrase.findPhrase({ id });

        if(!phraseAlredyExists) {
            throw new ServerError("This phrase not exists!");
        }

        await this.langPhrase.updatePhrase({ id, question, answer });

    }
}

export { UpdatePhraseUseCase };