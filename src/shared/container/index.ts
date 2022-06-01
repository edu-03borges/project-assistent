import { container } from "tsyringe";
import { LangEnglishRepository } from "../../modules/accounts/infra/typeorm/repositories/LangEnglishRepository";
import { LangEspanishRepository } from "../../modules/accounts/infra/typeorm/repositories/LangEspanishRepository";
import { LangPortugueseRepository } from "../../modules/accounts/infra/typeorm/repositories/LangPortugueseRepository";
import { ILangEnglishRepository } from "../../modules/accounts/repositories/ILangEnglishRepository";
import { ILangPortugueseRepository } from "../../modules/accounts/repositories/ILangPortugueseRepository";

container.registerSingleton<ILangEnglishRepository>(
    "LangEnglishRepository",
    LangEnglishRepository
)

container.registerSingleton<ILangEnglishRepository>(
    "LangEspanishRepository",
    LangEspanishRepository
)

container.registerSingleton<ILangPortugueseRepository>(
    "LangPortugueseRepository",
    LangPortugueseRepository
)

