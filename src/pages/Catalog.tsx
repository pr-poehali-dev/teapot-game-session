import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Чай Эрл Грей Премиум",
      price: 890,
      category: "tea",
      image: "/placeholder.svg",
      description: "Изысканный черный чай с бергамотом",
      origin: "Шри-Ланка",
    },
    {
      id: 2,
      name: "Кофе Арабика Эфиопия",
      price: 1200,
      category: "coffee",
      image: "/placeholder.svg",
      description: "Элитное зерно с цветочными нотами",
      origin: "Эфиопия",
    },
    {
      id: 3,
      name: 'Травяной сбор "Спокойствие"',
      price: 650,
      category: "tea",
      image: "/placeholder.svg",
      description: "Натуральный успокаивающий сбор",
      origin: "Алтай",
    },
    {
      id: 4,
      name: "Кофе Робуста Вьетнам",
      price: 980,
      category: "coffee",
      image: "/placeholder.svg",
      description: "Крепкий кофе с шоколадными нотами",
      origin: "Вьетнам",
    },
    {
      id: 5,
      name: "Зеленый чай Сенча",
      price: 750,
      category: "tea",
      image: "/placeholder.svg",
      description: "Классический японский зеленый чай",
      origin: "Япония",
    },
    {
      id: 6,
      name: "Кофе Колумбия Супремо",
      price: 1100,
      category: "coffee",
      image: "/placeholder.svg",
      description: "Мягкий кофе с ореховыми нотами",
      origin: "Колумбия",
    },
    {
      id: 7,
      name: "Чай Пуэр выдержанный",
      price: 1350,
      category: "tea",
      image: "/placeholder.svg",
      description: "Ферментированный чай с глубоким вкусом",
      origin: "Китай",
    },
    {
      id: 8,
      name: "Французская обжарка",
      price: 950,
      category: "coffee",
      image: "/placeholder.svg",
      description: "Темная обжарка для эспresso",
      origin: "Бразилия",
    },
  ];

  const categories = [
    { id: "all", name: "Все товары", icon: "Grid3X3" },
    { id: "tea", name: "Чай", icon: "Leaf" },
    { id: "coffee", name: "Кофе", icon: "Coffee" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={32} className="text-amber-600" />
              <Link to="/">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                  Валберс
                </h1>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Главная
              </Link>
              <Link to="/catalog" className="text-amber-600 font-medium">
                Каталог
              </Link>
              <Link
                to="/contacts"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Контакты
              </Link>
              <Link
                to="/cart"
                className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
              >
                <Icon name="ShoppingCart" size={20} />
                <span>Корзина</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Заголовок и поиск */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent text-center">
            Каталог товаров
          </h1>
          <div className="max-w-md mx-auto relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg border-amber-200 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Категории */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                    : "border-amber-600 text-amber-700 hover:bg-amber-50"
                }
              >
                <Icon name={category.icon} size={20} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Товары */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center relative group">
                <Icon
                  name={product.category === "coffee" ? "Coffee" : "Leaf"}
                  size={64}
                  className="text-amber-600 group-hover:scale-110 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                  {product.origin}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">
                      {product.price} ₽
                    </span>
                    <div className="text-xs text-gray-500">за 100г</div>
                  </div>
                  <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="SearchX"
              size={64}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-500">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </div>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Coffee" size={24} className="text-amber-500" />
                <h4 className="text-xl font-bold">Валберс</h4>
              </div>
              <p className="text-gray-400">
                Качественный чай и кофе для истинных ценителей
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => setSelectedCategory("tea")}
                    className="hover:text-white transition-colors"
                  >
                    Чай
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("coffee")}
                    className="hover:text-white transition-colors"
                  >
                    Кофе
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/contacts"
                    className="hover:text-white transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Оплата
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-35-35</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@valbers.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Валберс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
