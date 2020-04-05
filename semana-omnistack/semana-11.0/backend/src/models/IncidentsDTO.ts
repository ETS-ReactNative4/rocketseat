import {
    Table,
    Column,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
    Model,
    BelongsTo,
    DataType
} from 'sequelize-typescript';

import { iIncidents } from '../Interfaces/iIncidents';
import OngDTO from './OngDTO';

@Table({
    tableName: 'incidents',
    schema: 'omnistack_11'
})
class IncidentsDTO extends Model<IncidentsDTO> implements iIncidents {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'incidentId',
        type: DataType.BIGINT,
        allowNull: false
    })
    id?: number;

    @Column({
        field: 'title',
        type: DataType.STRING(64),
        allowNull: false
    })
    title!: string;

    @Column({
        field: 'description',
        type: DataType.STRING,
        allowNull: false
    })
    description!: string;

    @Column({
        field: 'amount',
        type: DataType.DOUBLE,
        allowNull: false
    })
    value!: number;

    @ForeignKey(() => OngDTO)
    @Column({
        field: 'ong_id',
        type: DataType.STRING,
        allowNull: false
    })
    ongId!: string;

    @BelongsTo(() => OngDTO)
    ong!: OngDTO
}

export default IncidentsDTO;