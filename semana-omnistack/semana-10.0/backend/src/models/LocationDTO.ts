import { ILocationDTO } from "../interfaces/ILocationDTO";

import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType
} from "sequelize-typescript";
import * as uuid from "uuid";

@Table({tableName: 'locations', schema: 'omnistack10'})
class LocationDTO extends Model<LocationDTO> implements ILocationDTO {
    @PrimaryKey
    @Column({
        field: 'id',
        type: DataType.UUIDV4,
        allowNull: false,
        defaultValue: uuid.v4(), 
    })
    id!: string

    @Column({
        field: 'longitude',
        type: DataType.DOUBLE,
        allowNull: false
    })
    longitude!: string;
    
    @Column({
        field: 'latitude',
        type: DataType.DOUBLE,
        allowNull: false
    })
    latitude!: string;
}

export default LocationDTO;