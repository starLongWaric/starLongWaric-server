import { Table, Column, Model, Unique, DataType } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true,
})
export class Company extends Model<Company> {
  @ApiModelProperty({ description: 'ID' })
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  readonly id: string;

  @ApiModelProperty({ description: '企业类型名称' })
  @Column({
    unique: true,
  })
  readonly name: string;

  @ApiModelProperty({ description: '企业类型' })
  @Column
  readonly type: string;

  @ApiModelProperty({ description: '创办所需金钱' })
  @Column({
    type: DataType.BIGINT,
  })
  readonly money: number;
}