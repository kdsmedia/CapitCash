import { pgTable, serial, text, integer, timestamp, boolean, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { playersTable } from "./players";

export const missionTypeEnum = pgEnum("mission_type", ["daily", "weekly"]);

export const missionsTable = pgTable("missions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: missionTypeEnum("type").notNull().default("daily"),
  targetCount: integer("target_count").notNull().default(1),
  rewardCoins: integer("reward_coins").notNull().default(50),
  rewardExp: integer("reward_exp").notNull().default(10),
});

export const playerMissionsTable = pgTable("player_missions", {
  id: serial("id").primaryKey(),
  playerId: integer("player_id")
    .notNull()
    .references(() => playersTable.id, { onDelete: "cascade" }),
  missionId: integer("mission_id")
    .notNull()
    .references(() => missionsTable.id, { onDelete: "cascade" }),
  progress: integer("progress").notNull().default(0),
  isCompleted: boolean("is_completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
  resetAt: timestamp("reset_at").notNull().defaultNow(),
});

export const insertMissionSchema = createInsertSchema(missionsTable).omit({ id: true });
export const selectMissionSchema = createSelectSchema(missionsTable);
export const insertPlayerMissionSchema = createInsertSchema(playerMissionsTable).omit({ id: true });

export type InsertMission = z.infer<typeof insertMissionSchema>;
export type Mission = typeof missionsTable.$inferSelect;
export type InsertPlayerMission = z.infer<typeof insertPlayerMissionSchema>;
export type PlayerMission = typeof playerMissionsTable.$inferSelect;
