import { useState } from "react";
import {
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineChartBar,
  HiOutlineX,
} from "react-icons/hi";
import Card from "./ui/card";

const initialPlans = [
  {
    id: 1,
    title: "Pack Basique",
    description: "Accès limité aux cours et support standard.",
    price: "19€/mois",
    ventes: 120,
  },
  {
    id: 2,
    title: "Pack Pro",
    description: "Accès à tous les cours, webinaires et assistance prioritaire.",
    price: "39€/mois",
    ventes: 85,
  },
  {
    id: 3,
    title: "Pack Premium",
    description: "Accès complet + coaching individuel et mises à jour exclusives.",
    price: "59€/mois",
    ventes: 42,
  },
];

export default function Plans() {
  const [plans, setPlans] = useState(initialPlans);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({
    title: "",
    description: "",
    price: "",
    ventes: 0,
  });

  const handleAddPlan = () => {
    setPlans([...plans, { ...newPlan, id: plans.length + 1 }]);
    setNewPlan({ title: "", description: "", price: "", ventes: 0 });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Offres de formation</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <HiOutlinePlus size={18} />
          Ajouter un pack
        </button>
      </div>

      {/* Statistiques de ventes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            title={`Ventes - ${plan.title}`}
            value={plan.ventes}
            icon={<HiOutlineChartBar size={24} />}
            className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white border dark:border-gray-600"
          />
        ))}
      </div>

      {/* Liste des plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white dark:bg-gray-700 rounded-lg shadow p-5 border border-gray-100 dark:border-gray-600"
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {plan.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                {plan.price}
              </span>
              <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                <HiOutlinePencil /> Modifier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal d’ajout */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Nouveau pack</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                <HiOutlineX />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom du pack"
                value={newPlan.title}
                onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
              <textarea
                placeholder="Description"
                value={newPlan.description}
                onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                placeholder="Prix (ex: 49€/mois ou Sur devis)"
                value={newPlan.price}
                onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
                className="w-full border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              onClick={handleAddPlan}
              className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Ajouter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
