import hotDrink1 from '../assets/hot-drinks-1.jpg'
import hotDrink2 from '../assets/hot-drinks-2.jpg'
import hotDrink3 from '../assets/hot-drinks-3.jpg'
import hotDrink4 from '../assets/hot-drinks-4.jpg'
import hotDrink5 from '../assets/hot-drinks-5.webp'
import hotDrink6 from '../assets/hot-drinks-6.jpg'
import hotDrink7 from '../assets/hot-drinks-7.jpg'
import hotDrink8 from '../assets/hot-drinks-8.jpg'
import hotDrink9 from '../assets/hot-drinks-9.png'
import hotDrink10 from '../assets/hot-drinks-10.jpg'
import coldDrink1 from '../assets/cold-drinks-1.jpg'
import coldDrink2 from '../assets/cold-drinks-2.jpg'
import coldDrink3 from '../assets/cold-drinks-3.jpg'
import coldDrink4 from '../assets/cold-drinks-4.jpg'
import coldDrink5 from '../assets/cold-drinks-5.jpg'
import coldDrink6 from '../assets/cold-drinks-6.jpg'
import coldDrink7 from '../assets/cold-drinks-7.jpg'
import coldDrink8 from '../assets/cold-drinks-8.jpg'
import coldDrink9 from '../assets/cold-drinks-9.jpg'
import coldDrink10 from '../assets/cold-drinks-10.webp'
import bakery1 from '../assets/bakery-1.jpg'
import bakery2 from '../assets/bakery-2.jpg'
import bakery3 from '../assets/bakery-3.jpg'
import bakery4 from '../assets/bakery-4.jpg'
import bakery5 from '../assets/bakery-5.jpg'
import bakery6 from '../assets/bakery-6.jpg'
import bakery7 from '../assets/bakery-7.webp'
import bakery8 from '../assets/bakery-8.jpg'
import bakery9 from '../assets/bakery-9.jpg'
import bakery10 from '../assets/bakery-10.jpg'

export const products = [

  { id: 1, name: 'Caramel Latte', description: 'A rich espresso blended with silky steamed milk and a smooth caramel drizzle.', price: 5.50, category: 'hot-drinks', image: hotDrink1 },
  { id: 2, name: 'Cappuccino', description: 'A perfect balance of espresso, steamed milk, and thick foam on top.', price: 4.50, category: 'hot-drinks', image: hotDrink2 },
  { id: 3, name: 'Flat White', description: 'Velvety microfoam poured over a double shot of espresso for a smooth finish.', price: 4.00, category: 'hot-drinks', image: hotDrink3 },
  { id: 4, name: 'Americano', description: 'Bold espresso shots diluted with hot water for a clean and intense cup.', price: 3.50, category: 'hot-drinks', image: hotDrink4 },
  { id: 5, name: 'Hazelnut Latte', description: 'Creamy latte infused with rich hazelnut syrup for a nutty twist.', price: 5.00, category: 'hot-drinks', image: hotDrink5 },
  { id: 6, name: 'Turkish Coffee', description: 'Finely ground coffee brewed to perfection the traditional way.', price: 3.00, category: 'hot-drinks', image: hotDrink6 },
  { id: 7, name: 'Cortado', description: 'Equal parts espresso and warm milk for a bold yet smooth experience.', price: 4.00, category: 'hot-drinks', image: hotDrink7 },
  { id: 8, name: 'Macchiato', description: 'A shot of espresso marked with a dollop of foamed milk.', price: 3.50, category: 'hot-drinks', image: hotDrink8 },
  { id: 9, name: 'Mocha', description: 'Espresso meets chocolate in this rich and indulgent hot drink.', price: 5.50, category: 'hot-drinks', image: hotDrink9 },
  { id: 10, name: 'Hot Chocolate', description: 'Thick and creamy chocolate drink topped with whipped cream.', price: 4.00, category: 'hot-drinks', image: hotDrink10 },
  { id: 11, name: 'Iced Mocha', description: 'Bold espresso, cold milk, and rich chocolate syrup poured over ice.', price: 6.00, category: 'cold-drinks', image: coldDrink1 },
  { id: 12, name: 'Cold Brew', description: 'Smooth and refreshing cold brew steeped for 12 hours for a bold flavor.', price: 5.00, category: 'cold-drinks', image: coldDrink2 },
  { id: 13, name: 'Iced Caramel Latte', description: 'Chilled espresso with milk and caramel syrup over a bed of ice.', price: 5.50, category: 'cold-drinks', image: coldDrink3 },
  { id: 14, name: 'Frappuccino', description: 'Blended coffee drink topped with whipped cream and chocolate drizzle.', price: 6.50, category: 'cold-drinks', image: coldDrink4 },
  { id: 15, name: 'Iced Americano', description: 'Double espresso shots poured over ice for a clean refreshing kick.', price: 4.00, category: 'cold-drinks', image: coldDrink5 },
  { id: 16, name: 'Iced Matcha Latte', description: 'Ceremonial grade matcha blended with cold milk over ice.', price: 5.50, category: 'cold-drinks', image: coldDrink6 },
  { id: 17, name: 'Vanilla Cold Brew', description: 'Smooth cold brew sweetened with a hint of vanilla cream.', price: 5.50, category: 'cold-drinks', image: coldDrink7 },
  { id: 18, name: 'Iced Hazelnut Latte', description: 'Espresso, cold milk, and hazelnut syrup — chilled to perfection.', price: 5.50, category: 'cold-drinks', image: coldDrink8 },
  { id: 19, name: 'Chocolate Frappe', description: 'Blended chocolate and coffee topped with whipped cream.', price: 6.00, category: 'cold-drinks', image: coldDrink9 },
  { id: 20, name: 'Iced Cortado', description: 'Equal parts chilled espresso and cold milk over ice.', price: 4.50, category: 'cold-drinks', image: coldDrink10 },
  { id: 21, name: 'Classic Croissant', description: 'Golden, flaky, and buttery — baked fresh every morning.', price: 3.00, category: 'bakeries', image: bakery1 },
  { id: 22, name: 'Blueberry Muffin', description: 'Soft, moist muffin packed with fresh blueberries and a golden crust.', price: 2.50, category: 'bakeries', image: bakery2 },
  { id: 23, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center.', price: 4.50, category: 'bakeries', image: bakery3 },
  { id: 24, name: 'Cinnamon Roll', description: 'Soft dough swirled with cinnamon and topped with cream cheese glaze.', price: 3.50, category: 'bakeries', image: bakery4 },
  { id: 25, name: 'Banana Bread', description: 'Moist homemade banana bread with a crispy golden top.', price: 3.00, category: 'bakeries', image: bakery5 },
  { id: 26, name: 'Cheesecake Slice', description: 'Creamy New York style cheesecake on a buttery biscuit base.', price: 4.00, category: 'bakeries', image: bakery6 },
  { id: 27, name: 'Almond Croissant', description: 'Flaky croissant filled with rich almond cream and toasted almonds.', price: 3.50, category: 'bakeries', image: bakery7 },
  { id: 28, name: 'Chocolate Chip Cookie', description: 'Thick and chewy cookie loaded with dark chocolate chips.', price: 2.00, category: 'bakeries', image: bakery8 },
  { id: 29, name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.', price: 5.00, category: 'bakeries', image: bakery9 },
  { id: 30, name: 'Carrot Cake', description: 'Spiced carrot cake layered with smooth cream cheese frosting.', price: 4.00, category: 'bakeries', image: bakery10 },
]