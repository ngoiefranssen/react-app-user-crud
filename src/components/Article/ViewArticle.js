import React from 'react'

export default function ViewArticle() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Article Details</h2>
          <div className='card'>
             <div className='card-header'>
              Details for Article id :
              <ul className=''></ul> 
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
