import { useState } from "react";
import CreateUser from "./components/CreateUser";
import Users from "./pages/Users";

function App() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* <h1 className="mb-8 text-center text-4xl font-bold">
          React Query CRUD
        </h1> */}

        <CreateUser
          editingUser={editingUser}
          setEditingUser={setEditingUser}
        />

        <div className="mt-8">
          <Users setEditingUser={setEditingUser} />
        </div>
      </div>
    </div>
  );
}

export default App;