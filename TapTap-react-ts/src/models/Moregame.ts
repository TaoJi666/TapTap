interface Games {
    map(arg0: (gameitem: any) => JSX.Element): import("react").ReactNode;
        app:{
            id:number;
            title:string;
            icon:{
                url:string;
            }
        },
        craft:{
            id:number;
            title:string;
            icon:{
                url:string;
            }
        }
}

interface Moregames{
    map(arg0: (game: any, index: any) => JSX.Element): import("react").ReactNode;
    label:string;
    data:Games[]
}  

export type {
    Moregames
}