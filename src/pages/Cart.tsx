import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Чай Эрл Грей Премиум",
      price: 890,
      quantity: 2,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Кофе Арабика Эфиопия",
      price: 1200,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryPrice = totalPrice > 2000 ? 0 : 300;
  const finalPrice = totalPrice + deliveryPrice;

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
                className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-full"
              >
                <Icon name="ShoppingCart" size={20} />
                <span>
                  Корзина (
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent text-center">
          Корзина покупок
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <Icon
              name="ShoppingCart"
              size={96}
              className="text-gray-300 mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Ваша корзина пуста
            </h2>
            <p className="text-gray-500 mb-8">
              Добавьте товары из каталога, чтобы продолжить покупки
            </p>
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
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Список товаров */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden shadow-lg border-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name="Coffee"
                          size={32}
                          className="text-amber-600"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 p-0 border-amber-300 hover:bg-amber-50"
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value) || 0,
                                )
                              }
                              className="w-16 text-center border-amber-300 focus:border-amber-500"
                              min="0"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 p-0 border-amber-300 hover:bg-amber-50"
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-amber-600">
                              {item.price * item.quantity} ₽
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.price} ₽ за шт.
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="ml-4 text-red-600 border-red-300 hover:bg-red-50"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Итоговая сумма */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Итоговая сумма
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Товары:</span>
                      <span>{totalPrice} ₽</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Доставка:</span>
                      <span
                        className={
                          deliveryPrice === 0
                            ? "text-green-600 font-medium"
                            : ""
                        }
                      >
                        {deliveryPrice === 0
                          ? "Бесплатно"
                          : `${deliveryPrice} ₽`}
                      </span>
                    </div>
                    {totalPrice < 2000 && deliveryPrice > 0 && (
                      <div className="text-sm text-gray-500 bg-amber-50 p-3 rounded-lg">
                        <Icon name="Truck" size={16} className="inline mr-1" />
                        Бесплатная доставка от 2000 ₽
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-xl font-bold text-gray-800">
                        <span>Всего:</span>
                        <span className="text-amber-600">{finalPrice} ₽</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-500 to-red-500 text-white">
                <CardContent className="p-6">
                  <Button className="w-full bg-white text-amber-700 hover:bg-gray-50 font-semibold py-3 text-lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                  <div className="mt-4 text-center text-amber-100 text-sm">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center">
                        <Icon name="Shield" size={16} className="mr-1" />
                        Безопасная оплата
                      </div>
                      <div className="flex items-center">
                        <Icon name="Truck" size={16} className="mr-1" />
                        Быстрая доставка
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Способы оплаты
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon
                        name="CreditCard"
                        size={16}
                        className="mr-2 text-gray-400"
                      />
                      Банковской картой
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Smartphone"
                        size={16}
                        className="mr-2 text-gray-400"
                      />
                      SBP
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Wallet"
                        size={16}
                        className="mr-2 text-gray-400"
                      />
                      Электронные деньги
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Banknote"
                        size={16}
                        className="mr-2 text-gray-400"
                      />
                      При получении
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Рекомендации */}
        {cartItems.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Рекомендуем также
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Зеленый чай Матча", price: 850, icon: "Leaf" },
                { name: "Кофе Бразилия", price: 950, icon: "Coffee" },
                { name: "Чай Улун", price: 780, icon: "Leaf" },
                { name: "Американо", price: 1100, icon: "Coffee" },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow border-0"
                >
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 p-6 flex items-center justify-center">
                    <Icon
                      name={product.icon}
                      size={48}
                      className="text-amber-600"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-gray-800 text-sm">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-600">
                        {product.price} ₽
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                      >
                        <Icon name="Plus" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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

export default Cart;
