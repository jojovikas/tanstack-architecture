
import { useState } from "react";

import CreateUser from "../components/CreateUser";
import Users from "./Users";

function OptimisticCrud() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="space-y-8">
      <CreateUser
        mode="optimistic"
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      <Users
        mode="optimistic"
        setEditingUser={setEditingUser}
      />
    </div>
  );
}

export default OptimisticCrud;