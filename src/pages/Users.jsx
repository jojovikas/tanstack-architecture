import { useDeleteUser } from "../hooks/useDeleteUser";
import { useUsers } from "../hooks/useUsers";

function Users({mode, setEditingUser }) {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useUsers();

  const deleteUserMutation = useDeleteUser(mode);

  if (isLoading) {
    return (
      <div className="rounded-xl bg-slate-900 p-6">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Users ({data.length})
        </h2>

        {isFetching && (
          <span className="text-sm text-blue-400">
            Refreshing...
          </span>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.slice(0,3).map((user) => (
          <div
            key={user._id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                {user.name}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {user.email}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Age: {user.age}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  setEditingUser(user)
                }
                className="flex-1 rounded-lg bg-black px-4 py-2 text-white hover:bg-black/40"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  const confirmed =
                    window.confirm(
                      `Delete ${user.name}?`
                    );

                  if (!confirmed) return;

                  deleteUserMutation.mutate(
                    user._id
                  );
                }}
                className="flex-1 rounded-lg bg-black px-4 py-2 text-white hover:bg-black/40"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;