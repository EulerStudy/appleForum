import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // console.log(request.nextUrl)  // 유저가 요청중인 URL
  // console.log(request.cookies)  // 유저의 cookie
  // console.log(request.headers)  // 유저의 headers 정보

  //NextResponse.next()   // 통과
  //NextResponse.redirect()   // 다른 페이지로 강제 이동(주소창도 변경)
  //NextResponse.rewrite()    // 다른 페이지로 강제 이동(주소창은 냅둠)

  const session = await getToken({req: request})

  if (request.nextUrl.pathname.startsWith('/write')) {
    if (session == null) {
      return NextResponse.redirect('http://forum-euler.netlify.app/api/auth/signin')
    }
  }

  if (request.nextUrl.pathname.startsWith('/list')) {
    console.log(request.headers.get('sec-ch-ua-platform'))
    console.log(new Date())
  }

  return NextResponse.next()

  // request.cookies.get('쿠키이름') // 출력
  // request.cookies.has('쿠키이름') // 존재확인
  // request.cookies.delete('쿠키이름')  // 삭제

  // const response = NextResponse.next()
  // response.cookies.set({
  //   name: 'mode',
  //   value: 'dark',
  //   maxAge: 3600,
  //   hasOnlu: true,
  // })
  // return response
}