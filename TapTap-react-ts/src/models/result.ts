interface List {
    tag_id:number;
    name:string;
}

interface Result {
    game_name:string;
    grade:number;
    icon:string;
    tag_list:List[]

}  

export type {
    Result 
}