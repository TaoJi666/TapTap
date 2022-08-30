import styled from 'styled-components'  
import { px2rem  } from '@/assets/global-style'  

export const DiscoverWrapper = styled.div`
    margin-top: ${px2rem(50)};
    margin-bottom: ${px2rem(50)};
    position: relative;
    /* 下拉刷新字体大小 */
    .adm-pull-to-refresh-head-content{
        font-size: 18px;
    }
    /* 测试、预约样式 */
    .test{
        width: 95%;
        /* padding: ${px2rem(10)}; */
        padding-left:${px2rem(10)};
        display: flex;
        text-align: center;
        .testItem{
            flex: 1;
            height: ${px2rem(45)};
            padding: ${px2rem(3)};
            border-radius: ${px2rem(5)};
            margin-right: ${px2rem(5)};
            img{
                width: ${px2rem(25)};
                height: ${px2rem(25)};
            }
            .title{
                font-size: 14px;
                font-weight:bold;
            }
        }
    }
    .games {
        margin-top: ${px2rem(20)};
    }
    .review {
        display: block;
        height: 100%;
        
    }
    /* 安利墙 */
    .amway-wrapper .label{
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
    .amway-items{
        width: 100%;
        display: flex;
        overflow-x: auto;
        display: -webkit-box;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
        
        .amway-item{
            width: 75%;
            height: ${px2rem(350)};
            margin: ${px2rem(10)};
            border-radius: ${px2rem(10)};
            background-color:#ebeff0 ;
            position: relative;
            .reviews{
                font-size: 15px;
                color: #868c92;
                img{
                    width: 100%;
                    height: ${px2rem(150)};
                    border-radius: ${px2rem(10)} ;
                }   
                .text{
                    overflow: hidden;
                    padding-top: ${px2rem(15)};
                    margin: ${px2rem(20)};
                    /* 字数限制 */   
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;  // 控制多行的行数
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }  
                .title {
                    text-align: center;
                }
            }
            .people{
                position: absolute;
                top: ${px2rem(140)};
                padding: 0 ${px2rem(20)};
                img{
                    width: ${px2rem(40)};
                    height: ${px2rem(40)};
                    border-radius:50% ;
                }
                .name{
                    font-size: 14px;
                    text-align: center;
                }
            }
        }
    }
        /* 隐藏滚动条 */
        div::-webkit-scrollbar {
        display: none;
        }
        /* swiper指示器 */
        .customIndicator {
            position: absolute;
            top: 6px;
            right: 6px;
            background: rgba(0, 0, 0, 0.3);
            padding: 4px 8px;
            color: #ffffff;
            border-radius: 4px;
            user-select: none;
}
    /* 游戏专区  */   
    .game1-wrapper {
        width: 100%;
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
    .game1-img {
        width: 95%;
        
        img{
            width: 100%;
            height: 100%;
            padding:${px2rem(20)} ${px2rem(10)};
        }
    }
    }
    .customIndicator {
            font-size: 15px;
            position:absolute;
            right:${px2rem(80)};
            top: ${px2rem(20)};
            background: rgba(0,0,0,0.3);
            padding: 4px 8px;
            color: #ffffff;
            border-radius: 4px;
        } 

` 

export const Top = styled.div`
    width: 100%;
    margin-top: 0; 
    display: flex;
    flex-wrap:wrap;
` 
// 分类 
export const SortItem = styled.div`
    width: 20%;
    /* float: left; */
    padding: ${px2rem(10)} 0;
    text-align: center;
      img{
        height: ${px2rem(45)};
        /* vertical-align: middle */
      }
      .label{
        width: 100%;
        font-size: 14px;
        color:grey;
        text-align: center;
      }
`