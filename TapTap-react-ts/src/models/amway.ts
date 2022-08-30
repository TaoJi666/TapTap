interface Amwayitem {
    id:number;
    author:{
        user:{
            name:string;
            avatar:string;
        }
    }
    extended_entities:{
        reviews:{
            map(arg0: (item: any, index: any) => JSX.Element): import("react").ReactNode;
            // score:number;
            contents:{
                text:string;
            }
            app:{
                title:string;
                banner:{
                    url:string;
                }   
            }
            
        }
    }
}

interface Amway {
    label:string;
    data:Amwayitem[];
}  

export type {
    Amway
}