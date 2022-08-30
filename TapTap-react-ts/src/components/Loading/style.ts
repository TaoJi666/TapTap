import styled  from "styled-components"; 

export const LoadingWrapper = styled.div`
.loading{
    width: 80px;
    height: 40px;
    margin: 0 auto;
    margin-top:100px;
}
.loading span{
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    animation: load 1s ease infinite;
}
@keyframes load{
    0%{
        height: 40px;
        background: lightgreen;
    }
    100%{
        height: 40px;
        background: lightgreen;
    }
    50%{
        height: 70px;
        margin: -15px 0;
        background: lightblue;
    }
}
.loading span:nth-child(2){
    animation-delay:0.04s;
}
.loading span:nth-child(3){
    animation-delay:0.08s;
}
.loading span:nth-child(4){
   animation-delay:0.12s;
}
.loading span:nth-child(5){
    animation-delay:0.16s;
}
`