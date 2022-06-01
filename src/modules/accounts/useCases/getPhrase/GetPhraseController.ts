import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPhraseUseCase } from "./GetPhraseUseCase";

class GetPhraseController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { language, question } = request.body;

        const getPhraseUseCase = container.resolve(GetPhraseUseCase);

       const phrase = await getPhraseUseCase.execute({ language, question });

        return response.json(phrase);
    }
}

export { GetPhraseController };