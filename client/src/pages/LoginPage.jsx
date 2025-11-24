export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Welcome Back</h2>
          <input type="text" placeholder="Email" className="input input-bordered w-full mt-4" />
          <input type="password" placeholder="Password" className="input input-bordered w-full mt-4" />
          <button className="btn btn-primary mt-6">Login</button>
          <div className="text-center mt-4">
            <p>New here?</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="link">Signup as Teacher</button>
              <span>|</span>
              <button className="link">Signup as Student</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}