import { useEffect, useRef, useState } from "react";

const RainEffect = () => {
  const frontRowRef = useRef(null);
  const backRowRef = useRef(null);

  // Estados para ativar/desativar efeitos
  const [splatActive, setSplatActive] = useState(true);
  const [backRowActive, setBackRowActive] = useState(true);
  const [singleActive, setSingleActive] = useState(false);

  useEffect(() => {
    const makeItRain = () => {
      if (!frontRowRef.current) return;
      
      // Limpar gotas anteriores
      frontRowRef.current.innerHTML = "";
      if (backRowActive && backRowRef.current) {
        backRowRef.current.innerHTML = "";
      }

      let increment = 0;
      let drops = "";
      let backDrops = "";

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * 98) + 1;
        const randoFiver = Math.floor(Math.random() * 4) + 2;
        increment += randoFiver;

        if (!singleActive || increment === 50) {
          drops += `<div class="drop" style="left: ${increment}%; bottom: ${
            randoFiver + randoFiver - 1 + 100
          }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                      <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                      ${splatActive ? `<div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>` : ""}
                    </div>`;

          if (backRowActive) {
            backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
              randoFiver + randoFiver - 1 + 100
            }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                          <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                          ${splatActive ? `<div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>` : ""}
                        </div>`;
          }
        }
      }

      // Adicionar as gotas criadas
      frontRowRef.current.innerHTML = drops;
      if (backRowActive && backRowRef.current) {
        backRowRef.current.innerHTML = backDrops;
      }
    };

    makeItRain();
  }, [splatActive, backRowActive, singleActive]); // Atualiza a chuva sempre que os estados mudam

  return (
    <>
      {/* Camada de chuva – não recebe cliques por conta do pointer-events-none */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div ref={frontRowRef} className="rain front-row absolute w-full h-full"></div>
        {backRowActive && (
          <div ref={backRowRef} className="rain back-row absolute w-full h-full opacity-50"></div>
        )}
      </div>

      {/* Botões de Controle – ficam em um elemento separado, com z-index alto */}
      <div className="fixed top-5 left-5 flex flex-col space-y-4 z-50">
        <button
          type="button"
          className={`px-4 py-2 rounded-full text-black font-bold ${
            splatActive ? "bg-gray-300" : "bg-gray-600"
          }`}
          onClick={() => setSplatActive(prev => !prev)}
        >
          SPLAT
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-full text-black font-bold ${
            backRowActive ? "bg-gray-300" : "bg-gray-600"
          }`}
          onClick={() => setBackRowActive(prev => !prev)}
        >
          BACK ROW
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-full text-black font-bold ${
            singleActive ? "bg-gray-300" : "bg-gray-600"
          }`}
          onClick={() => setSingleActive(prev => !prev)}
        >
          SINGLE
        </button>
      </div>
    </>
  );
};

export default RainEffect;
