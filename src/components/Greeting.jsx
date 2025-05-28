import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3 className="text-julesAmber-50 text-2xl font-bold mb-4">{greeting} ¡Gracias por tu visita!</h3>
      <button
        onClick={() => setGreeting(randomMessage())}
        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-md text-julesPurple-50 bg-julesPurple-500 hover:bg-julesPurple-400 focus:outline-none focus:ring-2 focus:ring-julesPurple-300 focus:ring-offset-2 focus:ring-offset-julesEditorBg transition-colors"
      >
        Nuevo saludo
      </button>
    </div>
  );
}