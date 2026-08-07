function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
          TanStack Query Learning Project
        </span>

        <h1 className="mt-5 text-5xl font-bold">
          React Query CRUD Playground
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          A hands-on project demonstrating how TanStack Query
          handles server state management, caching, mutations,
          query invalidation, and advanced cache updates.
        </p>
      </div>

      {/* Comparison */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-green-400">
            Normal CRUD
          </h2>

          <p className="mb-4 text-slate-400">
            Traditional React Query approach using
            invalidateQueries().
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>✅ useQuery</li>
            <li>✅ useMutation</li>
            <li>✅ Query Cache</li>
            <li>✅ invalidateQueries()</li>
            <li>✅ Automatic Refetch</li>
          </ul>

          <div className="mt-6 rounded-xl bg-slate-800 p-4 font-mono text-sm">
            POST → invalidateQueries → GET
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-blue-400">
            Advanced CRUD
          </h2>

          <p className="mb-4 text-slate-400">
            Optimized approach using manual cache updates.
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>🚀 setQueryData()</li>
            <li>🚀 Optimistic Updates</li>
            <li>🚀 Rollback Support</li>
            <li>🚀 Cache Synchronization</li>
            <li>🚀 Reduced API Calls</li>
          </ul>

          <div className="mt-6 rounded-xl bg-slate-800 p-4 font-mono text-sm">
            POST → setQueryData → UI Update
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Concepts Covered
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-slate-800 p-4">
            <h3 className="font-semibold">Queries</h3>
            <p className="mt-2 text-sm text-slate-400">
              useQuery, cache, staleTime
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <h3 className="font-semibold">Mutations</h3>
            <p className="mt-2 text-sm text-slate-400">
              Create, Update, Delete
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <h3 className="font-semibold">Caching</h3>
            <p className="mt-2 text-sm text-slate-400">
              invalidateQueries & setQueryData
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <h3 className="font-semibold">Performance</h3>
            <p className="mt-2 text-sm text-slate-400">
              Optimistic updates & fewer requests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;