import queryRunner from "../index";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

async function users(): Promise<void> {

    const normaluserId = uuidv4();
    const normalUserPassword = await hash("batman", 8);

    const adminUserId = uuidv4();
    const adminUserPassword = await hash("stark", 8);

    const normalUser = {
        id: normaluserId,
        name: "normal_user",
        email: "normal_user@gmail.com",
        password: normalUserPassword
    }

    const adminUser = {
        id: adminUserId,
        name: "admin_user",
        email: "admin_user@gmail.com",
        is_admin: 1,
        password: adminUserPassword
    }
    
    const connection = await queryRunner();

    await connection.query(`
        INSERT INTO "ap_users" ("id", "name", "email", "password") VALUES (
            '${normalUser.id}', 
            '${normalUser.name}',
            '${normalUser.email}',
            '${normalUser.password}'
    )`);

    await connection.query(`
    INSERT INTO "ap_users" ("id", "name", "email", "is_admin", "password") VALUES (
        '${adminUser.id}',
        '${adminUser.name}',
        '${adminUser.email}',
         ${adminUser.is_admin}, 
        '${adminUser.password}'
)`);
}

users().then(() => console.log("Create users sucess!\n")).catch((err) => console.log("Create users failed!\n", err))