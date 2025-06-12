import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Utilisateurs from "../components/Utilisateurs";
import Plans from "../components/Plans";
import {
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
  HiOutlineUserGroup,
  HiOutlineUserPlus,
  HiOutlineBolt,
  HiOutlineUserCircle,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineChartBar,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import { FiBell, FiLogOut } from "react-icons/fi";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import { PieChart, Pie, Cell, Legend } from "recharts";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

export default function DashboardLayout() {
  const [tab, setTab] = useState<
    "accueil" | "utilisateurs" | "plans" | "abonnements" | "formations"
  >("accueil");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const stats = {
    newUsersThisMonth: 120,
    activeRate: "67%",

    totalUsers: 1534,
    activeCourses: 300,
    activeSubscriptions: 950,
    liveUsers: 47,
    revenueByCenter: [
      { center: "Centre A", revenue: 5000 },
      { center: "Centre B", revenue: 3200 },
      { center: "Centre C", revenue: 2800 },
    ],
    centerGrowth: [
      { month: "Jan", centers: 2 },
      { month: "Fév", centers: 3 },
      { month: "Mars", centers: 4 },
      { month: "Avr", centers: 5 },
      { month: "Mai", centers: 6 },
      { month: "Juin", centers: 7 },
    ],
    userDistribution: [
      { name: "Centre A", value: 600 },
      { name: "Centre B", value: 400 },
      { name: "Centre C", value: 300 },
    ],

    lastCenter: {
      name: "Centre D",
      admin: "Yasmine B.",
      addedAt: "10 Juin 2025",
    },
    registrationStats: [
      { month: "Jan", registrations: 120 },
      { month: "Fév", registrations: 160 },
      { month: "Mars", registrations: 200 },
      { month: "Avr", registrations: 240 },
      { month: "Mai", registrations: 300 },
      { month: "Juin", registrations: 350 },
    ],
    mostViewed: [
      { title: "Bases de React", views: 2400 },
      { title: "CSS Avancé", views: 1800 },
      { title: "Introduction à JavaScript", views: 1500 },
    ],
    lastItems: {
      user: {
        name: "Sarah Bensaïd",
        date: "10 juin 2025",
      },
      course: {
        title: "Maîtriser React",
        date: "09 juin 2025",
      },
      center: {
        name: "Centre Alpha",
        date: "08 juin 2025",
      },
      session: {
        title: "Session Été 2025",
        date: "07 juin 2025",
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        <div className="px-6 py-4 text-2xl font-extrabold">E-Learn</div>
        <nav className="flex-1 px-4 space-y-2">
          {[
            "accueil",
            "utilisateurs",
            "plans",
            "abonnements",
            "formations",
          ].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                tab === item
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white"
                  : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
              onClick={() => setTab(item as typeof tab)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4">
          <Button
            variant="ghost"
            className="w-full justify-start"
            icon={<FiLogOut />}
          >
            Déconnexion
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition"
              title="Changer de thème"
            >
              {darkMode ? (
                <HiOutlineSun size={22} />
              ) : (
                <HiOutlineMoon size={22} />
              )}
            </button>
            <FiBell className="text-xl cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">Administrateur</span>
            </div>
          </div>
        </header>

        {/* Main section */}
        <main className="p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

          {tab === "accueil" && (
            <>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                <Card
                  title="Formations"
                  value={stats.activeCourses}
                  icon={<HiOutlineBookOpen size={24} />}
                  className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Centres"
                  value={stats.revenueByCenter.length}
                  icon={<HiOutlineBuildingOffice2 size={24} />}
                  className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Apprenants"
                  value={stats.totalUsers}
                  icon={<HiOutlineUserGroup size={24} />}
                  className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Sessions actives"
                  value={stats.liveUsers}
                  icon={<HiOutlineClock size={24} />}
                  className="bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Abonnements actifs"
                  value={stats.activeSubscriptions}
                  icon={<HiOutlineCreditCard size={24} />}
                  className="bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-100 hover:shadow-lg transition-all"
                />
              </div>

              {/* ---- SECTION STATISTIQUES ---- */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
                {/* Revenus par centre */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <HiOutlineChartBar
                        className="text-indigo-500 dark:text-indigo-300"
                        size={20}
                      />
                      Revenus par centre
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={stats.revenueByCenter}>
                        <XAxis dataKey="center" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#6366F1" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Croissance du nombre de centres */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <HiOutlineArrowTrendingUp
                        className="text-green-500 dark:text-green-300"
                        size={20}
                      />
                      Évolution des centres
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={stats.centerGrowth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="centers"
                          stroke="#10B981"
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Évolution des inscriptions */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <HiOutlineArrowTrendingUp
                        className="text-blue-500 dark:text-blue-300"
                        size={20}
                      />
                      Évolution des inscriptions
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={stats.registrationStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="registrations"
                          stroke="#3B82F6"
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      🧩 Répartition des utilisateurs par centre
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={stats.userDistribution}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {stats.userDistribution.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                ["#6366F1", "#10B981", "#F59E0B"][index % 3]
                              }
                            />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* ======== SIDEBAR INFO LATÉRALE ======== */}
                <aside className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col gap-6 justify-between">
                  {/* Top 3 formations par vues */}
                  <div className="flex-1 bg-[#b9d2ff] dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h2 className="text-xl font-bold mb-4 tracking-tight flex items-center gap-2">
                      <HiOutlineBookOpen
                        className="text-[#0049cb] dark:text-orange-300"
                        size={20}
                      />
                      Top 3 formations
                    </h2>
                    <ul className="space-y-2">
                      {stats.mostViewed.slice(0, 3).map((course, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between border-b pb-1"
                        >
                          <span>{course.title}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {course.views.toLocaleString()} vues
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 bg-[#DAF7A6] dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h2 className="text-xl font-bold mb-4 tracking-tight flex items-center gap-2">
                      <HiOutlineBuildingOffice2 className="text-[#009a05] dark:text-purple-300" />
                      Dernières activités
                    </h2>

                    <div className="space-y-6 text-sm">
                      {/* Dernier utilisateur */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          Dernier utilisateur inscrit
                        </p>
                        <p className="text-base font-semibold text-gray-800 dark:text-white">
                          {stats.lastItems.user.name}
                        </p>
                        <p className="text-xs text-gray-400 italic">
                          {stats.lastItems.user.date}
                        </p>
                      </div>

                      {/* Dernière formation */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          Dernière formation publiée
                        </p>
                        <p className="text-base font-semibold text-gray-800 dark:text-white">
                          {stats.lastItems.course.title}
                        </p>
                        <p className="text-xs text-gray-400 italic">
                          {stats.lastItems.course.date}
                        </p>
                      </div>

                      {/* Dernier centre */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          Dernier centre ajouté
                        </p>
                        <p className="text-base font-semibold text-gray-800 dark:text-white">
                          {stats.lastItems.center.name}
                        </p>
                        <p className="text-xs text-gray-400 italic">
                          {stats.lastItems.center.date}
                        </p>
                      </div>

                      {/* Dernière session */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          Dernière session planifiée
                        </p>
                        <p className="text-base font-semibold text-gray-800 dark:text-white">
                          {stats.lastItems.session.title}
                        </p>
                        <p className="text-xs text-gray-400 italic">
                          {stats.lastItems.session.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </>
          )}
          {tab === "utilisateurs" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card
                  title="Nombre total d’apprenants"
                  value={stats.totalUsers}
                  icon={<HiOutlineUserGroup size={24} />}
                  className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Nouveaux inscrits ce mois-ci"
                  value={stats.newUsersThisMonth}
                  icon={<HiOutlineUserPlus size={24} />}
                  className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Taux d'activité des utilisateurs"
                  value={stats.activeRate}
                  icon={<HiOutlineBolt size={24} />}
                  className="bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-100 hover:shadow-lg transition-all"
                />
                <Card
                  title="Utilisateurs connectés maintenant"
                  value={stats.liveUsers}
                  icon={<HiOutlineUserCircle size={24} />}
                  className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-100 hover:shadow-lg transition-all"
                />
              </div>
              <Utilisateurs />
            </>
          )}
          {tab === "plans" && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <Plans />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
