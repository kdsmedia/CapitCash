import { pgTable, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { playersTable } from "./players";
import { prizesTable } from "./prizes";

export const inventoryTable = pgTable("inventory", {
  id: serial("id").primaryKey(),
  playerId: integer("player_id")
    .notNull()
    .references(() => playersTable.id, { onDelete: "cascade" }),
  prizeId: integer("prize_id")
    .notNull()
    .references(() => prizesTable.id, { onDelete: "restrict" }),
  quantity: integer("quantity").notNull().default(1),
  isFavorite: boolean("is_favorite").notNull().default(false),
  obtainedAt: timestamp("obtained_at").notNull().defaultNow(),
});

export const insertInventorySchema = createInsertSchema(inventoryTable).omit({
  id: true,
  obtainedAt: true,
});
export const selectInventorySchema = createSelectSchema(inventoryTable);

export type InsertInventory = z.infer<typeof insertInventorySchema>;
export type Inventory = typeof inventoryTable.$inferSelect;
