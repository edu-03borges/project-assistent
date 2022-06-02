import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class FirstCommit1654027064772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ap_users",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "is_admin",
                    type: "number",
                    default: 0
                },
                {
                    name: "created_at",
                    type: "date",
                    default: "sysdate"
                }]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "ap_informations",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "age",
                    type: "number",
                    isNullable: true
                },
                {
                    name: "father",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "mother",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "live",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "date",
                    default: "sysdate"
                }]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "ap_parameters",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "language",
                    type: "number"
                },
                {
                    name: "select_ai",
                    type: "number"
                },
                {
                    name: "updated_at",
                    type: "date",
                    default: "sysdate"
                },
                {
                    name: "created_at",
                    type: "date",
                    default: "sysdate"
                }]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "ap_lang_espanish",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "question",
                    type: "varchar"
                },
                {
                    name: "answer",
                    type: "varchar"
                },
                {
                    name: "updated_at",
                    type: "date",
                    default: "sysdate"
                },
                {
                    name: "created_at",
                    type: "date",
                    default: "sysdate"
                }]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "ap_lang_english",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "question",
                    type: "varchar"
                },
                {
                    name: "answer",
                    type: "varchar"
                },
                {
                    name: "updated_at",
                    type: "date",
                    default: "sysdate"
                },
                {
                    name: "created_at",
                    type: "date",
                    default: "sysdate"
                }]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "ap_lang_portuguese",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "question",
                    type: "varchar"
                },
                {
                    name: "answer",
                    type: "varchar"
                },
                {
                    name: "updated_at",
                    type: "date",
                    default: "sysdate"
                },
                {
                    name: "created_at",
                    type: "date",
                    default: "sysdate"
                }]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ap_users");
        await queryRunner.dropTable("ap_informations");
        await queryRunner.dropTable("ap_parameters");
        await queryRunner.dropTable("ap_lang_espanish");
        await queryRunner.dropTable("ap_lang_english");
        await queryRunner.dropTable("ap_lang_portuguese");
    }

}
