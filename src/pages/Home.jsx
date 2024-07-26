import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="flex-1 container mx-auto mt-[2%]">
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-gray-200 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[5rem]">
              The complete platform for building the Web
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto text-gray-200 max-w-[700px] text-muted-foreground md:text-xl tracking-wider">
              Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
              Open Source.you can copy and paste
            </p>
            <div className="space-x-4">
              <Link to={"/detailed-page"}>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md text-[#010536] bg-[#ffff00] hover:bg-[#ffff00]/90 px-6 py-4 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Home