import { useEffect, useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/userSchema";

function CreateUser({
  editingUser,
  setEditingUser,
}) {
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: zodResolver(userSchema),

  defaultValues: {
    name: "",
    email: "",
    age: 18,
  },
});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

useEffect(() => {
  if (editingUser) {
    reset({
      name: editingUser.name,
      email: editingUser.email,
      age: editingUser.age,
    });
  }
}, [editingUser, reset]);

const onSubmit = (data) => {
  if (editingUser) {
    updateUserMutation.mutate({
      id: editingUser._id,
      userData: data,
    });

    setEditingUser(null);

    reset();

    return;
  }

  createUserMutation.mutate(data);

  reset();
};
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold">
        {editingUser
          ? "Update User"
          : "Create User"}
      </h2>

      <form
         onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-4"
      >
        <div>
  <input
    {...register("name")}
    placeholder="Name"
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
  />

  {errors.name && (
    <p className="mt-1 text-sm text-red-400">
      {errors.name.message}
    </p>
  )}
</div>

<div>
  <input
    {...register("email")}
    placeholder="Email"
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
  />

  {errors.email && (
    <p className="mt-1 text-sm text-red-400">
      {errors.email.message}
    </p>
  )}
</div>

<div>
  <input
    type="number"
    placeholder="Age"
    {...register("age", {
      valueAsNumber: true,
    })}
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
  />

  {errors.age && (
    <p className="mt-1 text-sm text-red-400">
      {errors.age.message}
    </p>
  )}
</div>
       <button
  type="submit"
  className="rounded-lg bg-blue-600 px-4 py-3"
>
  {editingUser
    ? "Update User"
    : "Create User"}
</button>
      </form>
    </div>
  );
}

export default CreateUser;