

const PokemonCard = ({pokemonName, idx}) => {

    console.log(pokemonName);

    return(
        <div className="col-2 border">
            <div className="card-body">
                <p>#{idx} Name:</p>
                <p>{pokemonName[0].toUpperCase() + pokemonName.slice(1)}</p>
            </div>

        </div>
    )
}

export default PokemonCard;