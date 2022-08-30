import styled from 'styled-components'  
import { px2rem } from '@/assets/global-style'  

export const GamesWrapper = styled.div`
    margin-top:${px2rem(10)};
    .label{
        font-size: 16px; 
        /* display: flex; */
        font-weight: bold;
        padding-left: ${px2rem(10)};
        float: left;
        span{
            float: right;
            /* display: block; */
            width:${px2rem(30)};
            text-align: center;
            border-radius: ${px2rem(10)};
            color: #868c92;
            background-color:#f5f7f8;
            margin-left: ${px2rem(5)};
        }
    }
    /* 超出部分滑动 */
    /* 设置父元素  */
    .game-wrapper {
        width: 100%;
        display: flex;
        overflow-x: auto;
        display: -webkit-box;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
        padding: ${px2rem(5)} ${px2rem(5)};
        .game-img{
        width: 20%;
        text-align: center;
        img{
            height: ${px2rem(45)};
        }
        .title{
            font-size: 14px;
            color:#000;
            /* 字数限制 */   
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;  // 控制多行的行数
            -webkit-box-orient: vertical;
            overflow: hidden;

        }
    }
    }
    /* 隐藏滚动条 */
    div::-webkit-scrollbar {
        display: none;
}

    
`