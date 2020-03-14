import { IDevDTO } from "../interfaces/IDevDTO";
import LocationDTO from "./LocationDTO";

import {
    Model,
    Column,
    Table,
    DataType,
    PrimaryKey,
    ForeignKey,
    BeforeCreate,
    BelongsTo
} from "sequelize-typescript";
import * as uuid from "uuid";


@Table({
    tableName: 'devs',
    schema: 'omnistack10'
})
class DevDTO extends Model<DevDTO> implements IDevDTO {

    @PrimaryKey
    @Column({
        field: 'id',
        type: DataType.STRING,
        allowNull: true,
    })
    id?: string;

    @Column({
        field: 'name',
        type: DataType.STRING(128),
        allowNull: false
    })
    name!: string;

    @Column({
        field: 'github_username',
        type: DataType.STRING(128),
        allowNull: false
    })
    github_username!: string;

    @Column({
        field: 'biography',
        type: DataType.STRING(256),
        allowNull: false
    })
    bio!: string;

    @Column({
        field: 'avatar_url',
        type: DataType.STRING(256),
        allowNull: false
    })
    avatar_url!: string;

    @Column({
        field: 'technologies',
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false
    })
    techs!: string[];

    @ForeignKey(() => LocationDTO)
    @Column({
        field: 'location_id',
        type: DataType.STRING
    })
    locationId!: string;

    @BelongsTo(() => LocationDTO)
    locations!: LocationDTO[];

    @BeforeCreate
    static incrementUUID(dev: DevDTO) {
        dev.id = uuid.v4();
    }
}

export default DevDTO;
