import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 max-w-2xl text-center space-y-8">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">Hone</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">Become the best version of yourself through Hone.</p>
        </div>
      </section>

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
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of Honers building strong habits
          </p>
          <Link to="/SignUp">
          <button className="border border-border hover:bg-blue-800 btn-primary px-8 py-2 rounded-lg font-semibold text-xl bg-transparent">Start Building Now</button>
          </Link>
          
        </div>
      </section>
    </div>
  )
}

export default Landing