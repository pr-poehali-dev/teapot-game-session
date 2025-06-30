import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
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
              <Link to="/contacts" className="text-amber-600 font-medium">
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
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent text-center">
          Контакты
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Как с нами связаться
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Icon name="Phone" size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Телефон
                      </h3>
                      <p className="text-gray-600">+7 (800) 555-35-35</p>
                      <p className="text-sm text-gray-500">
                        Бесплатно по России
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Icon name="Mail" size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">info@valbers.ru</p>
                      <p className="text-sm text-gray-500">
                        Ответим в течение 24 часов
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Icon
                        name="MapPin"
                        size={24}
                        className="text-amber-600"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Адрес
                      </h3>
                      <p className="text-gray-600">
                        г. Москва, ул. Тверская, 10
                      </p>
                      <p className="text-sm text-gray-500">Офис и шоу-рум</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Icon name="Clock" size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Время работы
                      </h3>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Социальные сети */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-500 to-red-500 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <Icon name="Instagram" size={20} className="mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <Icon name="Globe" size={20} className="mr-2" />
                    VK
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма обратной связи */}
          <div>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Написать нам
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <Input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тема сообщения
                    </label>
                    <Input
                      type="text"
                      placeholder="О чем хотите спросить?"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      placeholder="Расскажите подробнее..."
                      rows={5}
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Обязательные поля для заполнения
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Карта и дополнительная информация */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Карта */}
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="MapPin"
                  size={64}
                  className="text-amber-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Наш офис на карте
                </h3>
                <p className="text-gray-600">г. Москва, ул. Тверская, 10</p>
              </div>
            </div>
          </Card>

          {/* Часто задаваемые вопросы */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Часто задаваемые вопросы
            </h3>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Как долго доставляется заказ?
                </h4>
                <p className="text-gray-600 text-sm">
                  По Москве — 1-2 дня, по России — 3-7 дней в зависимости от
                  региона.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Можно ли вернуть товар?
                </h4>
                <p className="text-gray-600 text-sm">
                  Да, в течение 14 дней с момента получения, если товар не
                  подошел.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Как проверить свежесть продукции?
                </h4>
                <p className="text-gray-600 text-sm">
                  Вся продукция имеет сертификаты качества. Даты производства
                  указаны на упаковке.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Есть ли программа лояльности?
                </h4>
                <p className="text-gray-600 text-sm">
                  Да, при покупке от 5000 ₽ предоставляется скидка 5% на
                  следующие заказы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
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

export default Contacts;
