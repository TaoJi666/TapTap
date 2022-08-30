import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'  

export const FooterWrapper = styled.div`  
    /* z-index : 999; */
    position: fixed;
    /* overflow: hidden; */
    width: 100%;
    height: ${px2rem(50)};
    bottom: 0; 
    left: 0;
    display: flex;
    border-top:1px solid silver;
    background-color: #fff;
    a{
       width: 25vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #868c92;
        padding-top: ${px2rem(8)};
        &.active{
            color: #15c5ce;
        }
        i{
            font-size: ${px2rem(20)};
        }
        span{
            /* display: block; */
            font-size:16px;
            padding: 0;
            margin: 0;
        }
    }
    a::-webkit-scrollbar{
         display:none
    }
`