interface Game1item {
    id:number;
    banner:{
        url:string;
    }
}

interface Game1 {
    label:string;
    data:Game1item[];
}

export type {
    Game1
}