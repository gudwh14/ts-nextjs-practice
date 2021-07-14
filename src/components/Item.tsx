import {ListData} from "../../pages";
import {Button, Divider} from "semantic-ui-react";

type ItemProps = {
    item : ListData | null;
}

const ItemData = ({item} : ItemProps) => {
    return (
        <>
            <div>
                <img src={item?.image_link} alt={item?.name}/>
                <h1>{item?.name}</h1>
                <strong>${item?.price}</strong>
            </div>
            <Button color={"blue"}>구매하기</Button>
            <Divider/>
            <p>{item?.description}</p>
        </>
    )
}
export default ItemData;