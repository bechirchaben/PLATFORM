import React, { useState } from "react";
import { HiOutlineUserPlus, HiOutlineXMark } from "react-icons/hi2";

type User = {
  nom: string;
  prenom: string;
  email: string;
  role: "admin" | "instructor" | "eleve";
  centre: string;
};

const mockUsers: User[] = [
  {
    nom: "Bensaïd",
    prenom: "Yasmine",
    email: "yasmine@mail.com",
    role: "admin",
    centre: "Centre Alpha",
  },
  {
    nom: "Bensaïd",
    prenom: "Sarah",
    email: "sarah@mail.com",
    role: "instructor",
    centre: "Centre Beta",
  },
  {
    nom: "A.",
    prenom: "Omar",
    email: "omar@mail.com",
    role: "eleve",
    centre: "Centre Alpha",
  },
];

const roles = {
  all: "Tous les rôles",
  admin: "Administrateurs",
  instructor: "Instructeurs",
  eleve: "Élèves",
} as const;

export default function Utilisateurs() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<keyof typeof roles>("all");
  const [openModal, setOpenModal] = useState(false);

  /* ------ FILTRAGE ------ */
  const filtered = users.filter(
    (u) =>
      (roleFilter === "all" || u.role === roleFilter) &&
      `${u.prenom} ${u.nom} ${u.email} ${u.centre}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  /* ------ SUBMISSION D'UN NOUVEL ADMIN ------ */
  const handleAddAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newAdmin: User = {
      nom: data.get("nom") as string,
      prenom: data.get("prenom") as string,
      email: data.get("email") as string,
      role: "admin",
      centre: "—", // tu pourras ajouter un champ centre ici
    };
    setUsers([...users, newAdmin]);
    setOpenModal(false);
    e.currentTarget.reset();
  };

  return (
    <div className="space-y-10">
      {/* ——— Barre d’outils ——— */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md w-full md:w-1/2 dark:bg-gray-700 dark:text-white"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value as any)}
          className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        >
          {Object.entries(roles).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <HiOutlineUserPlus size={18} />
          Ajouter un administrateur
        </button>
      </div>

      {/* ——— Tableau des utilisateurs ——— */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Prénom</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Centre</th>
              <th className="px-4 py-2 text-left">Rôle</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length ? (
              filtered.map((u, idx) => (
                <tr
                  key={idx}
                  className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-2 font-medium">{u.nom}</td>
                  <td className="px-4 py-2">{u.prenom}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">{u.centre}</td>
                  <td className="px-4 py-2 capitalize">{u.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                  Aucun résultat
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ——— Modal d’ajout ——— */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleAddAdmin}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Nouvel administrateur</h3>
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              >
                <HiOutlineXMark size={22} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-1/2 px-4 py-2 rounded border border-gray-400 bg-gray-700 text-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-1/2 px-4 py-2 rounded border border-gray-400 bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                name="telephone"
                type="tel"
                placeholder="Téléphone"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />

              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
