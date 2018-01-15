import { Menu } from "./menu.model";

export class MenuService {

    private menu: Menu[] = [
        new Menu('Pizza',
            'A brief description about Pizza',
            '../../assets/images/pizza.jpg'
        ),
        new Menu('Cheese Burger',
            'A brief description about Cheese Burger',
            '../../assets/images/burger.png'
        ),
        new Menu('Crispy Salad',
            'A brief description about Crispy Salad',
            '../../assets/images/salad.jpg'
        ),
    ];


    getMenu() {
        return this.menu.slice();
    }
}