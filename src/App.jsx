import { useEffect, useState } from 'react'
import './App.css'
import Main from './Mainpg'
import AddAuthor from './Add'
import { Route, Routes} from 'react-router-dom'
import { EditAuthor } from './Edit'
import EditAut from './pages/EditAut'
import { getAllAuthor } from './hepler/helper'
function App() {
  // getting data from api and stored to state
const [authorData,setauthorData] = useState()
useEffect(() => {
 getAllAuthor().then((data)=>{
     setauthorData(data);
 });
}, [])
  return (
    // routes for each page
    <div className='app'>
    <Routes>
      <Route exact path="/" element={<Main authorData={authorData} setauthorData={setauthorData}/>}/>
      <Route path="/addaut/"element={<AddAuthor authorData={authorData} setauthorData={setauthorData}/>}/>
      <Route path="/editaut/:id"element={<EditAut authorData={authorData} setauthorData={setauthorData}/>}/>
    </Routes>
  
    </div>
  )
}

export default App
