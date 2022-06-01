import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("ap_parameters")
class ap_parameters {

    @PrimaryColumn()
    id?: string;

    @Column()
    language: number;

    @Column()
    select_ai: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { ap_parameters };