import styled from 'styled-components'   
import { px2rem } from '@/assets/global-style'  

export const SearchBoxWrapper = styled.div`
    height: ${px2rem(40)};
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        padding: 0 6px;
        /* padding-right: 20px; */
        .fa {
            padding: 0 ${px2rem(15)};
        }
        /* 放大镜 */
        .icon-search{
            position: absolute;
            z-index: 1;
            left: ${px2rem(45)};
            top: ${px2rem(10)};
        }
        /* 输入框 */
        .box{
            position: relative;
            width: 65%;
            height: ${px2rem(25)};
            border: none;
            border-radius: ${px2rem(10)};
            padding-left: ${px2rem(30)} ;
        }
        input[type=text]:focus, select:focus{
        border:1px solid #15c5ce;
        outline:none;
        }
        /* 删除 */
         .fa-close{ 
            padding: ${px2rem(3)};
            width: ${px2rem(10)};
            height:  ${px2rem(10)};
            line-height: ${px2rem(10)};
            color: #fff;
            font-size: 14px;;
            background-color:#b9bec1;
            position: absolute;
            right: ${px2rem(80)};
            top: ${px2rem(12)};
            border-radius:100%;
        }
        .search-button{
            display: block;
            width: ${px2rem(40)};
            height: ${px2rem(20)};
            text-align: center;
            border-radius: ${px2rem(10)};
            background-color: #15c5ce;
            margin-left:${px2rem(15)};
            font-size: 15px;
            color: #fff;
        }
`