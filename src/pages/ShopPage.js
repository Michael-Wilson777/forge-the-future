import ShopItem from "../components/ShopItem";
import { INVENTORY } from "../data/INVENTORY";

const ShopPage = () => {
    
    return (
        <>
            {INVENTORY.map((item) => {
                return <ShopItem key={item.id} item={item} />
            })}
        </>
    );
};

export default ShopPage;