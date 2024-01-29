import { ObjectId } from "mongodb";
import { collections } from "../services/databaseService.js";

interface address {
    street: string,
    phone: string,
    postalCode: string
}

export class User {
    public _id?: ObjectId

    constructor(
        public dni: string,
        public name: string,
        public mail: string,
        public contact: address,
        id?: string
    ) {
        if (id) this._id = new ObjectId(id);
    }
    async save() {

        const result1 = await collections.users?.findOne({ dni: this.dni });
        if (result1) {
            this._id = result1._id;
            console.log("El usuario ya existe");
            return this;
        }
        const result = await collections.users?.insertOne(this);
        console.log(result);
        result
            ? console.log(`Usuario creado ${result.insertedId}`)
            : console.log("Error al crear el usuario");
        return this;
    }
    static async fetchById(id: string) {
        return await collections.users?.findOne({ _id: new ObjectId(id) });
    }


}