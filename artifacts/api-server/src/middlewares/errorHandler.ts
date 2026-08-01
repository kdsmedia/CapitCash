import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";

/**
 * Global error-handling middleware.
 * Must be registered LAST (after all routes) with exactly 4 parameters
 * so Express recognises it as an error handler.
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const error = err instanceof Error ? err : new Error(String(err));

  logger.error({ err: error }, "Unhandled error");

  const status =
    (err as Record<string, unknown>)?.["status"] ||
    (err as Record<string, unknown>)?.["statusCode"] ||
    500;

  res.status(typeof status === "number" ? status : 500).json({
    error:
      process.env["NODE_ENV"] === "production"
        ? "Internal server error"
        : error.message,
  });
}
