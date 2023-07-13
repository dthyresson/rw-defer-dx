import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-2xl">Defer + RedwoodJS Example</h1>
      <p>
        <button
          onClick={() =>
            fetch(`${globalThis.RWJS_API_URL}/runHelloWorld?name=dt`)
          }
        >
          Hello!
        </button>
      </p>
    </>
  )
}

export default HomePage
