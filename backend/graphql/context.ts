import { PrismaClient } from "@prisma/client"
import { prisma } from "../utils/prisma"

export type Context = {
  prisma: PrismaClient
}

export async function createContext({req, res}: any): Promise<Context> {
  return {
    prisma
  }
}