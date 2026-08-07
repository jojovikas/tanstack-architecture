import { useState } from "react";

import CreateUser from "../components/CreateUser";
import Users from "./Users";

function NormalCrud() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="mb-2 text-3xl font-bold">
          Normal CRUD
        </h1>

        <p className="text-slate-400">
          Uses invalidateQueries() after create,
          update and delete operations.
        </p>
      </div>

      <CreateUser
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      <Users
        setEditingUser={setEditingUser}
      />
    </div>
  );
}

export default NormalCrud;