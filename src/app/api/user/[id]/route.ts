import { bigintToString } from '@/utils/bigIntToString';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

/**
* Обрабатывает GET запрос для получения пользователя по ID.
* @param req - Запрос.
* @param params - Параметры запроса, содержащие ID пользователя.
* @returns Объект пользователя или null, если пользователь не найден.
*/
export async function GET(req: Request, { params }: { params: { id: string } }) {
 const { id } = await params;
 const id_int = BigInt(id);

 console.log(`Получен id: ${id}`);

 const user = await prisma.user.findUnique({
   where: {
     id_user: id_int,
   },
 });

 const transformedUsers = {
   ...user,
   id_user: typeof user?.id_user === 'bigint' ? user.id_user.toString() : user?.id_user,
 }

 return NextResponse.json(transformedUsers);
}

/**
* Обрабатывает POST запрос для создания нового пользователя.
* @param req - Запрос.
* @param params - Параметры запроса, содержащие ID пользователя.
* @returns Объект созданного пользователя или null, если пользователь не создан.
*/
export async function POST(req: Request, { params }: { params: { id: string } }) {
 const { id } = await params;
 const id_int = BigInt(id);

 try {
   const data = await req.json();
   console.log(`Получен id: ${id}, данные:`, data);

   if (!data || !data.username) {
     return NextResponse.json({ error: 'Необходимые данные отсутствуют' }, { status: 400 });
   }

   const user = await prisma.user.create({
     data: {
       id_user: id_int,
       username: data.username,
       last_update_time: new Date(),
     },
   });

   return NextResponse.json(bigintToString(user));
 } catch (e) {
   console.error(e);
   return NextResponse.json({ error: `Ошибка при обработке данных: ${e}` }, { status: 400 });
 }
}
