import {Model, Column, Table, PrimaryKey, AutoIncrement} from "sequelize-typescript";

@Table
export class Location extends Model<Location> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public keyy!: string;

  @Column
  public locName!: string;

  @Column
  public locType!: string;

  @Column
  public locSubType!: string;

  @Column
  public locDesc!: string;

  @Column
  public locNameLong!: string;

  @Column
  public locRefId!: string;

  @Column
  public locRefIdType!: string;

  @Column
  public coordLonLat!: string;

  @Column
  public addrState!: string;

  @Column
  public addrCounty!: string;

  @Column
  public notes!: string;

  @Column
  public dqStatus!: string;

  @Column
  public dataCleanseLevel!: number;

  @Column
  public isActive!: boolean;

  @Column
  public isDeleted!: boolean;

  @Column
  public createdBy!: string;

  @Column
  public createdOn!: string;

  @Column
  public updatedBy!: string;

  @Column
  public updatedOn!: number;
}

export default Location;
