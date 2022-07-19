import {Product} from "../api/types";

export const toFilterCards = (cards: Product[], searchValue:string): Product[] => {
    if (searchValue.length > 3) {
        return cards.filter((card) => {
            return(
                card['name'].toLowerCase().includes(searchValue.toLowerCase())
            )
        });
    } else {
        return cards
    }
}