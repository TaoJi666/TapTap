import styled from "styled-components";   
import style, { px2rem } from "@/assets/global-style";  

export const Wrapper = styled.div`
    .box{
        background-color:#f5f7f8;
    }
`

export const ResultMain = styled.div`
    padding: ${px2rem(10)};
    font-size: 16px;
    background-color:#f5f7f8 ;
    height: 100%;
    .game {
        font-size: 18px;
        font-weight: bold;
        height: ${px2rem(40)};
    }
    .item{
        display: flex;
        margin: ${px2rem(10)} 0;
        width: 100%;
        background-color:#fff;
        border-radius: ${px2rem(10)};
        .icon{
            display: inline-block;
            height:${px2rem(100)};
            img{
            width: ${px2rem(80)};
            height:${px2rem(80)};
            margin-top:${px2rem(10)};
               border-radius:${px2rem(5)}
            }
        }
        .detail{
            margin: 0 ${px2rem(5)};
            display: inline-block;
            margin-top: ${px2rem(10)};
            width: 61%;
            line-height: ${px2rem(25)};
            .title{
                font-weight: bold;
                color: #18d6e0;
            }
            .name{
                color: #99a2aa;
                font-size: 14px;
                border: 1px solid #99a2aa;
                padding: ${px2rem(3)};
                margin: 0 ${px2rem(5)};
            }
        }
    }
    .look{
        text-align: center;
        line-height: ${px2rem(30)};
        margin-top:${px2rem(30)};  
        margin-right:${px2rem(5)};    
            color:#fff ;
            /* display: block; */
            width: ${px2rem(60)};
            height: ${px2rem(30)};
            border-radius:${px2rem(10)};
            background-color: #18d6e0; 
    }
    /* 论坛攻略样式 */
    .forums{
        /* display: flex; */
        width: 100%;
        background-color:#fff;
        border-radius: ${px2rem(10)};
        padding: ${px2rem(10)};
        margin: ${px2rem(10)} 0;
        box-sizing:border-box;
        color:#999;
        .user{
            img{
                width: ${px2rem(30)};
                height: ${px2rem(30)};
                border-radius: 50%;
            }
            .name{
                line-height: ${px2rem(30)};
                
            }
        }
        .title{
            font-size: ${px2rem(18)};
            font-weight: bold;
            margin:${px2rem(15)} 0;
            color: #000;
        }
        img{
            width: 100%;
            /* position: absolute;
            top: 50%;
            left: 50%;
            /* clip:rect(20px 300px 0px 200px); */
            /* transform: translate(-50%,74%);
            display: block;
            z-index: 1;  */
        }
        p{
            /* 文本超出行省略 */
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;  // 控制多行的行数
            -webkit-box-orient: vertical;
            overflow: hidden;
             margin: ${px2rem(5)} 0;
        }
        .forum-zhu{
            display: flex;
            justify-content: space-between;
            padding: ${px2rem(5)};
        }
    }
`