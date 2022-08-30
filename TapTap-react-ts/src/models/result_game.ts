interface List {
    tag_id:number;
    name:string;
}

interface Result {
    game_name:string;
    title:string;
    grade:number;
    icon:string;
    tag_list:List[]

}
interface Result_game {
    map(arg0: (item: any, index: any) => JSX.Element): import("react").ReactNode;
    list:Result[];
}

export type {
    Result_game
}