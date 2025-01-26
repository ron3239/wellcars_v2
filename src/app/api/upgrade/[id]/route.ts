import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const id_int = parseInt(id)
  const upgrade = await prisma.upgrade.findFirst({
    where: {
      id: id_int,
    },
  })

  return NextResponse.json(upgrade)
}
