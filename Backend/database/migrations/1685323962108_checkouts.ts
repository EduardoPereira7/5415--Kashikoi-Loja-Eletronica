import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "checkouts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      // Change data type from jsonb to text
      table.text("products").notNullable();
      table.string("coupon").nullable();
      table.float("total").notNullable();
      table.float("discounted_total").nullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
