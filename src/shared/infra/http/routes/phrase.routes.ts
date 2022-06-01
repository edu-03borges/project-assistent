import { Router } from "express";
import { CreatePhraseController } from "../../../../modules/accounts/useCases/createPhrase/CreatePhraseController";
import { GetPhraseController } from "../../../../modules/accounts/useCases/getPhrase/GetPhraseController";
import { UpdatePhraseController } from "../../../../modules/accounts/useCases/updatePhrase/UpdatePhraseController";

const phraseRoutes = Router();

const createPhraseController = new CreatePhraseController();
const getPhraseController = new GetPhraseController();
const updatePhraseController = new UpdatePhraseController();

phraseRoutes.post("/phrase/create", createPhraseController.handle);

phraseRoutes.get("/phrase/get", getPhraseController.handle);

phraseRoutes.patch("/phrase/update/:id", updatePhraseController.handle);

export { phraseRoutes };