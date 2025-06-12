export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6F4EA] p-6">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden h-[600px]">
        {/* SECTION GAUCHE ▸ image de fond + voile + texte */}
        <div className="w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/LoginPhoto.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#E6F4EA] bg-opacity-80 z-0" />

          <div className="absolute inset-0 flex flex-col justify-center items-center p-10 z-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">BKS LMS</h2>
            <p className="text-gray-700 text-sm">
              Votre savoir commence ici.
Identifiez-vous pour accéder à vos contenus pédagogiques personnalisés.
            </p>
          </div>
        </div>

        {/* SECTION DROITE ▸ connexion */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-center text-center space-y-8">
          {/* Bloc d’accueil */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Bonjour !</h1>
          
          </div>

          {/* Formulaire */}
          <form className="w-full max-w-sm space-y-4">
            <input
              type="text"
              placeholder="Nom d'utilisateur ou Email"
              className="w-full border rounded-lg p-3"
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full border rounded-lg p-3"
              required
            />
            <div className="text-right">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition"
            >
              Se connecter
            </button>
          </form>

          {/* Bloc contact */}
          <div className="text-sm">
            <p className="text-gray-800">N’hésitez pas à nous contacter</p>
            <p className="text-green-600 font-medium">support@bkslms.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
