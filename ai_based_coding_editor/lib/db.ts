import {PrismaClient} from '@prisma/client';

const globalprisma = global as unknown as { prisma: PrismaClient };

export const db = globalprisma.prisma || new PrismaClient();

if ( process.env.NODE_ENV !== 'production' ) globalprisma.prisma = db;