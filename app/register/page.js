export default function Register() {
  return (
    <div>
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="비번" />
        <button type="submet">id/pw 가입요청</button>
      </form>
    </div>
  )
}