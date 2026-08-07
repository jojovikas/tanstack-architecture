import { useEffect, useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";
import { useUpdateUser } from "../hooks/useUpdateUser";

function CreateUser({
  editingUser,
  setEditingUser,
}) {
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        age: editingUser.age,
      });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUserMutation.mutate({
        id: editingUser._id,
        userData: formData,
      });

      setEditingUser(null);

      setFormData({
        name: "",
        email: "",
        age: "",
      });

      return;
    }

    createUserMutation.mutate(formData);

    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold">
        {editingUser
          ? "Update User"
          : "Create User"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-4"
      >
        <input
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) =>
            setFormData({
              ...formData,
              age: Number(e.target.value),
            })
          }
        />

        <button
          className="rounded-lg bg-blue-600 px-4 py-3 font-medium hover:bg-blue-700"
          type="submit"
        >
          {createUserMutation.isPending ||
          updateUserMutation.isPending
            ? "Saving..."
            : editingUser
            ? "Update User"
            : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;