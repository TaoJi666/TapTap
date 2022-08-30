interface Hotitem {
    keyword:string;
    icon?:{
        url:string;
    };
    trend_icon?:{
        url:string;
    }


}

interface Hot {
    map(arg0: (hotitem: any, index: any) => JSX.Element): import("react").ReactNode;
    title:string;
    list:Hotitem[]
}  

export type {
    Hot
}