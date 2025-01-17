export interface _metaDate{
        id_user:string,
        name:string,
        coin_hour:number,
        count:number,
        state:string,
        handleChange:()=>any,
        setMetaData: (params: { key: keyof _metaDate; ele: string | number }) => void;
}