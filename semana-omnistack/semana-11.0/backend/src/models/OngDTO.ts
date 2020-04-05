import {
    Model,
    Table,
    PrimaryKey,
    DataType,
    Column,
    BeforeCreate,
    HasMany
} from 'sequelize-typescript';
import * as uuid from 'uuid';

import { iOngs } from '../Interfaces/iOngs';
import IncidentDTO from './IncidentsDTO'; 

@Table({
    tableName: 'ongs',
    schema: 'omnistack'
})
class OngDTO extends Model<OngDTO> implements iOngs {
    @PrimaryKey
    @Column({
        allowNull: true,
        field: 'ong_id',
        type: DataType.STRING(50)
    })
    id?: string;

    @Column({
        allowNull: false,
        field: 'name',
        type: DataType.STRING(64)
    })
    name!: string;

    @Column({
        allowNull: false,
        field: 'email',
        type: DataType.STRING
    })
    email!: string;

    @Column({
        allowNull: false,
        field: 'city',
        type: DataType.STRING(32)
    })
    city!: string;

    @Column({
        allowNull: false,
        field: 'uf',
        type: DataType.STRING(2)
    })
    uf!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING(11),
        field: 'whatsapp'
    })
    whatsApp!: string;

    @HasMany(() => IncidentDTO)
    incidents!: IncidentDTO[];

    @BeforeCreate
    static incrementUUID(ong: OngDTO) {
        ong.id = uuid.v4();
    }
}

export default OngDTO;