import { Connection, getConnectionOptions, createConnection } from "typeorm";

export default async (): Promise<Connection> => {

    const getOptions = await getConnectionOptions();

    return await createConnection(getOptions);

}