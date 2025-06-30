import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Чай Эрл Грей Премиум",
      price: 890,
      image: "/placeholder.svg",
      description: "Изысканный черный чай с бергамотом",
    },
    {
      id: 2,
      name: "Кофе Арабика Эфиопия",
      price: 1200,
      image: "/placeholder.svg",
      description: "Элитное зерно с цветочными нотами",
    },
    {
      id: 3,
      name: 'Травяной сбор "Спокойствие"',
      price: 650,
      image: "/placeholder.svg",
      description: "Натуральный успокаивающий сбор",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={32} className="text-amber-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Валберс
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Главная
              </Link>
              <Link
                to="/catalog"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
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

      {/* Главный экран */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
              Качественный чай и кофе
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя мир изысканных вкусов. Мы тщательно отбираем
              лучшие сорта чая и кофе со всего мира
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
              >
                <Link to="/catalog">
                  <Icon name="Coffee" size={20} className="mr-2" />
                  Перейти к каталогу
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-700 hover:bg-amber-50"
              >
                <Icon name="Leaf" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="pt-6">
                <Icon
                  name="Award"
                  size={48}
                  className="text-amber-600 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Премиальное качество
                </h4>
                <p className="text-gray-600">
                  Только лучшие сорта от проверенных поставщиков мира
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="pt-6">
                <Icon
                  name="Truck"
                  size={48}
                  className="text-green-600 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Быстрая доставка
                </h4>
                <p className="text-gray-600">
                  Доставляем свежие продукты по всей России
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="pt-6">
                <Icon
                  name="Heart"
                  size={48}
                  className="text-purple-600 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  С любовью к чаю
                </h4>
                <p className="text-gray-600">
                  Каждый продукт выбран с особой заботой и вниманием
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Рекомендуемые товары */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Рекомендуем попробовать
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center">
                  <Icon name="Coffee" size={64} className="text-amber-600" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      {product.price} ₽
                    </span>
                    <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700">
                      <Icon name="Plus" size={16} className="mr-2" />В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-700 hover:bg-amber-50"
            >
              <Link to="/catalog">
                Смотреть все товары
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12 px-4">
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
                  <Link
                    to="/catalog"
                    className="hover:text-white transition-colors"
                  >
                    Чай
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog"
                    className="hover:text-white transition-colors"
                  >
                    Кофе
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog"
                    className="hover:text-white transition-colors"
                  >
                    Аксессуары
                  </Link>
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

export default Index;
