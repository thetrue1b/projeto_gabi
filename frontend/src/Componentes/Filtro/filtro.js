import { Filtro, GrupoDeFiltros } from "./estiloDoFiltro";

function Filtros({ filtroBuscaPorNome, setFiltroBuscaPorNome }) {



    return (
        <GrupoDeFiltros>
            <Filtro>
                Busca por nome:
                <input
                    type={"text"}
                    value={filtroBuscaPorNome}
                    onChange={(e) => { setFiltroBuscaPorNome(e.target.value) }}
                />
            </Filtro>
        </GrupoDeFiltros>
    );
}

export default Filtros;
