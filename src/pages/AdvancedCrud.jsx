function AdvancedCrud() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="mb-2 text-3xl font-bold">
          Advanced CRUD
        </h1>

        <p className="text-slate-400">
          Uses setQueryData() and Optimistic
          Updates instead of invalidateQueries().
        </p>
      </div>

      <div className="rounded-2xl border border-yellow-700 bg-yellow-900/20 p-8">
        <h2 className="text-xl font-semibold">
          Coming Next 🚀
        </h2>

        <p className="mt-2 text-slate-400">
          We will implement:
        </p>

        <ul className="mt-4 space-y-2 text-slate-300">
          <li>✅ setQueryData()</li>
          <li>✅ Optimistic Updates</li>
          <li>✅ Rollback on Error</li>
          <li>✅ No Refetch After Mutation</li>
        </ul>
      </div>
    </div>
  );
}

export default AdvancedCrud;