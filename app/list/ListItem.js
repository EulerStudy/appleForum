'use client'

import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem({result}) {
  return (
    <div>
       {
        JSON.parse(result).map((content, i) => {
          return (
            <div className="list-item" key={i}>
            <Link href={'/detail/' + content._id}><h4>{content.title}</h4></Link>
            <DetailLink></DetailLink>
            <Link href={'/edit/' + content._id}>✏️</Link>
            <span onClick={(e)=>{
              console.log(content._id)
              fetch('/api/post/delete', {method: 'DELETE', body: content._id})
              .then((r)=>{
                return r.json()
              })
              .then((r)=>{
                console.log(r)
                e.target.parentElement.style.opacity = 0
                setTimeout(()=>{
                  e.target.parentElement.style.display = 'none'
                },1000)
              })
            }}>🗑️</span>
            <p>1월 1일</p>
          </div>
          )
        })
      }
    </div>
  )  
}