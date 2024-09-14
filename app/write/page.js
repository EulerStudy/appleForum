'use client'

import { useState } from "react"

export default function Write() {
  let [src, setSrc] = useState('')
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <input type="file" accept="image/*" onChange={async (e)=>{
          const file = e.target.files[0]
          const filename = encodeURIComponent(file.name)
          let result = await fetch('/api/post/image?file=' + filename)
          result = await result.json()
          const formData = new FormData()
          Object.entries({...result.fields, file}).forEach(([key, value])=>{
            formData.append(key, value)
          })
          const uploadResult = await fetch(result.url, {
            method: 'POST',
            body: formData,
          })
          //console.log(uploadResult)
          setSrc(uploadResult.url + '/' + filename)
        }}></input>
        <img src={src}></img>
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}