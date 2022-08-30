// 防抖函数
const debounce = (func:any, delay:any) => {
    let timer:any;
    return function (...args: any) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
      }, delay);
    };
  };
  
  export { debounce };

  /**
 * 
 * @author 
 * @func 根据path判断是否在数组中  
 * @param {path string} 
 * @returns boolean 
 */

export const isPathPartlyExisted = (path: string) => {
  // 1. path 全部匹配 /cities  
  // 2. path 多了 /homedetail/:id  

  const arr = ['/search','/games'];
  let pathRes = path.split('/');
     // 任何情况 结果数组第二项都是arr里匹配的单项
  if(pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
  return false;
}
//sleep 函数   
export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))