import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="p-12">
      <MetaTags title="Home" description="Home page" />

      <h1 className="mb-6 text-2xl">Defer + RedwoodJS Example</h1>
      <div className="flex">
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(
                `${globalThis.RWJS_API_URL}/runHelloWorld?name=dt`
              )

              alert((await response.json()).data)
            }}
          >
            Hello!
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage