import {ListData} from "../../pages";
import {Button, Divider, Image} from "semantic-ui-react";

type ItemProps = {
    item : ListData | null;
}

const ItemData = ({item} : ItemProps) => {
    return (
        <>
            <div>
                <Image src={item?.image_link} alt={item?.name}/>
                <h1>{item?.name}</h1>
                <strong>${item?.price}</strong>
            </div>
            <button className="ui primary button">구매하기</button>
            <Divider/>
            <p>{item?.description}</p>
        </>
    )
}
export default ItemData;