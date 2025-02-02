export interface _metaDate {
        
        id_user: string;
        name: string;
        coin_hour: number;
        count: number;
        state: string;
    }

export interface FunctionMetaDate{
        setMetaData: (obj: Partial<_metaDate>) => void;
        handleChange: () => void;
}