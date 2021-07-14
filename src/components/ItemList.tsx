import {ListData} from "../../pages";
import Link from "next/link";

type ItemListProps = {
    list : ListData[];
}

const ItemList = ({list} : ItemListProps) : JSX.Element => {
    const renderItemList = list.map((data)=> {
        return (
            <div key={data.id} className="column">
                <Link href={`/item/${data.id}`} >
                    <a style={{display : "flex", flexDirection: "column", justifyContent : "center",alignItems: "center"}}>
                        <img src={data.image_link} alt={data.name}/>
                        <strong>{data.name}</strong>
                        <p style={{color : "gray"}}>{data.category} {data.product_type}</p>
                        <strong style={{color : "Blue"}}>${data.price}</strong>
                    </a>
                 </Link>
            </div>
        )
    })

    return (
        <div className="ui three column divided grid">
            <div className="row">
                {renderItemList}
            </div>
        </div>
    );
};

export default ItemList;