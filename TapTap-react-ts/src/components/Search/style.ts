import styled from 'styled-components'   
import { px2rem } from '@/assets/global-style'  

export const SearchWrapper = styled.div`
    background-color: #f5f5f5;
`
export const SearchMain =  styled.div`
    background-color: #fff;
    border-radius: ${px2rem(10)};
    padding:${px2rem(10)} ${px2rem(20)} ;

    .nav{ 
        display: flex;
            flex-wrap: wrap;
            /* justify-content:space-around; */
            a{
            font-size: 14px;
            font-weight: bold;
            color: #b9bec1;
            margin-right:${px2rem(10)};
            &.active{
               color : #17d6e1;
            }
            }}  
    .search-hot {
        color: #000;
        font-size: 16px;
        padding: ${px2rem(8)};
    }
`
export const SearchHotwords = styled.div`
   
    overflow: hidden;
    max-height: ${px2rem(115)};
    .top{
        display: flex;
        justify-content: space-between;
        color:#868c92;
        font-size: 14px;
    }
    .word{
        display: inline-block;
        font-size: 14px;
        background-color:#f5f7f8;
        color: #000;
        border-radius: ${px2rem(10)};
        padding: ${px2rem(4)};
        margin: ${px2rem(5)} ;

    }
    
`   

export const SearchHot = styled.div`
        width: 100%;
        display: flex; 
        overflow-x: auto;
        display: -webkit-box;
        -webkit-overflow-scrolling: touch;
        font-size: 16px;
        box-sizing: border-box;  
        margin-top:${px2rem(10)};
        .title{
            width: ${px2rem(100)};
            font-size: 14px;
            font-weight: bold;
            color: #b9bec1;
            margin-right:${px2rem(10)};
            &.active{
               color : #17d6e1;
            }
            }
        .title::before{
            content: '';
            width: 100%;
            border-bottom:2px solid #17d6e1;
        }
        .hots{
            border-radius: ${px2rem(5)};
            border: 1px solid rgba(21,197,206,.4);
            margin: ${px2rem(8)};

            background-image: linear-gradient(#ecfafb,#fff 120px);
            .hotitem {
            color: #000;
            width: ${px2rem(249.8)};
            padding: ${px2rem(8)} ${px2rem(8)} ${px2rem(8)} ${px2rem(4)};
            .index {
                padding: ${px2rem(5)};
                font-weight: bold;
                margin-right: ${px2rem(8)};
                color: #d2d7d9;
            }
            span img{
                width: ${px2rem(18)};
                padding-left:${px2rem(3)};
            }
        }
        }
        
`