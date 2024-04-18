import { DataTypes } from "sequelize";
import { database } from "../database/connect.js";

const ExemploEntity = database.define("exemplo",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})


export {ExemploEntity}