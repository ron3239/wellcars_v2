import { IUser } from "@/types/IUser";


export function bigintToString(ele:IUser){

    return {
        ...ele,
        id_user:typeof ele.id_user === 'bigint' ? ele.id_user.toString() : ele.id_user,
    }

}
export function strToBigInt(ele:IUser){

    return {
        ...ele,
        id_user:typeof ele.id_user === 'string' ? BigInt(ele.id_user) : ele.id_user,
    }

}
