import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
        const upgrades = await prisma.upgrade.findMany();
        return NextResponse.json(upgrades);
}