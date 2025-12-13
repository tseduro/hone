import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 max-w-2xl text-center space-y-8">
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          to="/SignIn"
        >
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-2 rounded-lg font-medium">
            Sign In
          </button>
        </Link>

        <Link
          to="/SignUp"
        >
          <button
            className="border border-border text-foreground hover:bg-muted px-8 py-2 rounded-lg font-medium bg-transparent"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing