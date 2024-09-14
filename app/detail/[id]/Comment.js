'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {
  let [comment, setComment] = useState('')
  let [data, setData] = useState([])

  useEffect(()=>{
    fetch('/api/comment/list?id=' + props._id)
    .then(r => r.json())
    .then((result) => {
      console.log(result)
      setData(result)
    })
  },[])
  
  return (
    <div>
      <div>댓글목록보여줄부분</div>
      <hr></hr>
      {
        data.length > 0
        ? data.map((text, i)=><p key={i}>{text.content}</p>)
        : '로딩중'
        
       
      }
      <input onChange={(e)=>{setComment(e.target.value)}}></input>
      <button onClick={()=>{
        fetch('/api/comment/new', { 
          method: 'POST', 
          body: JSON.stringify({ comment: comment, _id: props._id }), 
        })
      }}>댓글전송</button>
    </div>
  )
}