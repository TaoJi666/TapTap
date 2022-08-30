import React,{ useState ,useRef ,useEffect,useMemo} from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBoxWrapper } from './style'  
import { debounce } from '@/api/utils';

interface BoxProps {
    newQuery:any;
    handleQuery:(e:any)=>void;
}

const SearchBox:React.FC<BoxProps> = (props) => {  
    const queryRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    const { newQuery }=props;
    const { handleQuery }=props;
    const [query,setQuery] = useState('');


      //   防抖
      let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500);
      }, [handleQuery]);   
      
      useEffect(() => {
        // 挂载后  
        queryRef.current && queryRef.current.focus();
      })
      useEffect(() => {
        handleQueryDebounce(query);
      }, [query]);  

      useEffect(() => {
        let curQuery = query;
        if(newQuery !== query){
            curQuery = newQuery;
            queryRef.current ?  queryRef.current.value = newQuery : null;
        }
        setQuery(curQuery)
      },[newQuery])

    const clearQuery = () => {
        setQuery('');
        queryRef.current ? queryRef.current.value ='' : null;
        queryRef.current &&  queryRef.current.focus() ; 
      }

      const handleChange =(e:any) => {
        let val = e.currentTarget.value ;
        setQuery(val)
      }
      // 点击搜索
      const startsear = (query:any) =>{
        
      }
  //  判断是否出现搜索关键字推荐
      const displayStyle = query ? {display: 'block'}: {display: 'none'};
  return (
    <SearchBoxWrapper>
        <span>
          <i className='fa fa-angle-left' onClick={() =>navigate(-1)}></i>
        </span>
        <span><i className="icon-search"></i></span>
        <input type="text" ref={queryRef}  className='box' onChange={handleChange} autoFocus/>
      <span><i className="fa fa-close"  style={displayStyle} onClick={clearQuery}></i></span>
      <span className='search-button' >搜索</span>
    </SearchBoxWrapper>
  )
}

export default React.memo(SearchBox)
