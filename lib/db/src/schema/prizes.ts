import { pgTable, serial, text, integer, real, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const rarityEnum = pgEnum("rarity", [
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "mythic",
  "ultimate",
]);

export const categoryEnum = pgEnum("category", [
  "doll",
  "toy",
  "snack",
  "voucher",
  "coin",
  "diamond",
  "mystery_box",
]);

export const prizesTable = pgTable("prizes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  rarity: rarityEnum("rarity").notNull().default("common"),
  category: categoryEnum("category").notNull().default("doll"),
  coinValue: integer("coin_value").notNull().default(10),
  weight: real("weight").notNull().default(1.0),
  dropRate: real("drop_rate").notNull().default(0.5),
  imageUrl: text("image_url"),
});

export const insertPrizeSchema = createInsertSchema(prizesTable).omit({ id: true });
export const selectPrizeSchema = createSelectSchema(prizesTable);

export type InsertPrize = z.infer<typeof insertPrizeSchema>;
export type Prize = typeof prizesTable.$inferSelect;
