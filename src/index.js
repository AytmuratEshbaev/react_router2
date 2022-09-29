import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom'

function Content() {
  let params = useParams();
  return (
    <h2>
      {
        `${!params.sectionName ? 'Home' :
          (!params.userName ? params.sectionName :
            `Users(${params.userName})`)}`
      }
    </h2>
  )
}


function Navigation() {
  let params = useParams();
  return (
    <>
      <Link to='/'>Home</Link>
      {params.sectionName ? <Link to={`/${params.sectionName}`}>{'>'}{params.sectionName}</Link> : ''}
      {params.userName ? <Link to={`/${params.sectionName}/${params.userName}`}>{'>'}{params.userName}</Link> : ''}
    </>
  )
}


function Page() {
  return (
    <div className='wrapper'>
      <div className='location'>
        <Routes>
          <Route path='/' element={<Navigation />} />
          <Route path='/:sectionName' element={<Navigation />} />
          <Route path='/:sectionName/:userName' element={<Navigation />} />
        </Routes>
      </div>
      <div className='box'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link>
            <ul>
              <li><Link to='/users/vasya'>Vasya</Link></li>
              <li><Link to='/users/peter'>Peter</Link></li>
            </ul>
          </li>
        </ul>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path=':sectionName' element={<Content />}>
              <Route path=':userName' element={<Content />} />
            </Route>
          </Routes>
        </div>
      </div>

    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Page />
    <Routes>
      <Route path='/'>

      </Route>
    </Routes>
  </BrowserRouter>
);

