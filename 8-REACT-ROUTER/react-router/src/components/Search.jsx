import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    const url = "http://localhost:3000/products?q=" + query;

    const { data: items, loading, error } = useFetch(url);

    const filteredItems = items?.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h2>Resultados disponiveis</h2>
            <ul className="products">
                {filteredItems &&
                    filteredItems.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>R$: {item.price}</p>
                            <Link to={`/products/${item.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Search
