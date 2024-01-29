import { ObjectId } from "mongodb";
import { collections } from "../services/databaseService.js";
export class User {
    constructor(dni, name, mail, contact, id) {
        this.dni = dni;
        this.name = name;
        this.mail = mail;
        this.contact = contact;
        if (id)
            this._id = new ObjectId(id);
    }
    async save() {
        var _a, _b;
        const result1 = await ((_a = collections.users) === null || _a === void 0 ? void 0 : _a.findOne({ dni: this.dni }));
        if (result1) {
            this._id = result1._id;
            console.log("El usuario ya existe");
            return this;
        }
        const result = await ((_b = collections.users) === null || _b === void 0 ? void 0 : _b.insertOne(this));
        console.log(result);
        result
            ? console.log(`Usuario creado ${result.insertedId}`)
            : console.log("Error al crear el usuario");
        return this;
    }
    static async fetchById(id) {
        var _a;
        return await ((_a = collections.users) === null || _a === void 0 ? void 0 : _a.findOne({ _id: new ObjectId(id) }));
    }
}
