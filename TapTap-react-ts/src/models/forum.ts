interface List {
    article_id:number;
    article_title:string;
    cover_image:string;
    game_name:string;
    strategy_category_name:string;
    strategy_summary:string;
    user_avatar:string;
    user_name:string;
    view_count:number;
    up_count:number;
}

interface Forum {
    list:List[]
}

export type {
    Forum
}