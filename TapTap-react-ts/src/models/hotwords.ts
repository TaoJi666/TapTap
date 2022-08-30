interface HotwordsItem {
    keyword:string;
}

interface Hotwords {
    map(arg0: (word: any, index: any) => JSX.Element): import("react").ReactNode;
    title:string;
    list:HotwordsItem[]
}  

export type {
    Hotwords
}