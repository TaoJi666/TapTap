import styled from 'styled-components'   
import { px2rem } from '@/assets/global-style'   

export const HeaderWrapper = styled.div`
         z-index: 999;
        width: 95%;
        position: fixed;
        top: ${px2rem(1)};
        height: ${px2rem(28)}; 
        padding: ${px2rem(10)};   
        background-color :#fff ;  
  
           ul{ 
            width: 85%;
            background-color: #f2f3f4 ;
            border-radius:${px2rem(20)};
              li{
                /* display: flex; */
                  font-size: 16px;
                  margin-left:${px2rem(40)} ;
                  color: grey;
                  float: left;
                  line-height: ${px2rem(30)};
           }}
          .adm-swiper-track-item{
            float: left !important;
          }
        .search-icon {
            position: absolute;
            /* width: ${px2rem(20)}; */
            float: left;
            font-size: ${px2rem(20)};
            margin-top:${px2rem(3)};
            left:${px2rem(24)} ;
            z-index: 999;
            /* margin-left: ${px2rem(14)}; */
    }
    .avatar {
      position: absolute;
        float:right;
        top: ${px2rem(10)};
        right: ${px2rem(10)};
        width:${px2rem(28)};
        height:${px2rem(28)};
        /* margin-left: ${px2rem(8)}; */
        /* margin-right: ${px2rem(8)};   */
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }  

    /* :root {
  // 轮播的个数
  --s: 6;
  // 单个 li 容器的高度
  --h: 36;
  // 单次动画的时长
  --speed: 1.5s;
} */
 /* {
  width: 300px;
  height: calc(var(--h) * 1px);
} */
/* ul {
  display: flex;
  flex-direction: column;
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
}
ul li {
  width: 100%;
}
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, calc(var(--s) * var(--h) * -1px));
  }
} */
`