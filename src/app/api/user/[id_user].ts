import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  id_user: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const prisma = new PrismaClient()

  const {query: { id_user },} = req

  if(!id_user) return res.status(404).json({error:'not id'})

  const id_user_int = parseInt(id_user[0])
  
  const user = prisma.user.findFirst({
    where:{
        id_user:id_user_int
    }
  })

  return res.json(user)
}
