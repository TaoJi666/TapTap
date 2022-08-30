import React,{ lazy, Suspense} from 'react'  
import { Routes, Route } from 'react-router-dom'  
import Discover from '@/pages/Discover'
const Home = lazy(() => import('@/pages/Home'))
const Dynamic = lazy(() => import('@/pages/Dynamic'))
const Rank = lazy(() => import('@/pages/Rank'))
const Search = lazy(() => import('@/components/Search'))
const Star = lazy(() => import('@/components/Star'))
const Searchresult = lazy(() => import('@/components/Search/Searchresult'))

export default () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/dynamic" element={<Dynamic/>} />
        <Route path="/rank" element={<Rank/>} />
        <Route path="/search" element={<Search/>} />
        <Route path={`/search/:name`} element={<Searchresult/>} />  
        <Route path={`/games/:id`}element={<Star/>} />
      </Routes>
    </>
  )
}
