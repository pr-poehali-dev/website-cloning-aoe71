import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

const Index = () => {
  const [email, setEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Революция в области искусственного интеллекта",
      description: "Новые достижения в области нейронных сетей открывают безграничные возможности",
      content: "Исследователи из ведущих технологических компаний представили прорывную технологию...",
      category: "Технологии",
      tags: ["ИИ", "Технологии", "Будущее"],
      author: "Анна Иванова",
      date: "15 июля 2024",
      image: "/img/6772d5e5-2fc2-4018-b7c7-0c0e0b220036.jpg",
      comments: [
        { id: 1, author: "Петр Смирнов", text: "Очень интересная статья! Спасибо за подробный анализ.", date: "16 июля 2024" },
        { id: 2, author: "Мария Козлова", text: "Действительно впечатляющие результаты исследования.", date: "16 июля 2024" }
      ]
    },
    {
      id: 2,
      title: "Экологические инновации меняют мир",
      description: "Новые технологии помогают решать проблемы изменения климата",
      content: "Стартапы по всему миру разрабатывают уникальные решения для сохранения окружающей среды...",
      category: "Экология",
      tags: ["Экология", "Инновации", "Климат"],
      author: "Дмитрий Волков",
      date: "14 июля 2024",
      image: "/img/6772d5e5-2fc2-4018-b7c7-0c0e0b220036.jpg",
      comments: [
        { id: 3, author: "Елена Попова", text: "Наконец-то позитивные новости об экологии!", date: "15 июля 2024" }
      ]
    },
    {
      id: 3,
      title: "Будущее космических исследований",
      description: "Частные компании открывают новую эру освоения космоса",
      content: "Коммерциализация космических полетов приближает нас к межпланетным путешествиям...",
      category: "Наука",
      tags: ["Космос", "Наука", "Исследования"],
      author: "Александр Петров",
      date: "13 июля 2024",
      image: "/img/6772d5e5-2fc2-4018-b7c7-0c0e0b220036.jpg",
      comments: []
    }
  ];

  const handleSubscribe = () => {
    if (email) {
      alert('Спасибо за подписку! Вы будете получать последние новости.');
      setEmail('');
    }
  };

  const handleAddComment = (articleId: number) => {
    if (newComment.trim()) {
      // В реальном приложении здесь была бы отправка комментария на сервер
      alert('Комментарий добавлен!');
      setNewComment('');
      setSelectedArticle(null);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Технологии': return 'bg-blue-500';
      case 'Экология': return 'bg-green-500';
      case 'Наука': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Icon name="Newspaper" size={32} className="text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">NewsHub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Посты</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Теги</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Подписка</a>
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Последние новости и аналитика
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
            Будьте в курсе самых важных событий в мире технологий, науки и инноваций
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 animate-scale-in">
            <Icon name="Play" size={20} className="mr-2" />
            Читать новости
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Главные новости</h3>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                Популярное
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Icon name="Clock" size={14} className="mr-1" />
                Свежее
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-400 relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(article.category)} text-white`}>
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 hover:text-purple-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Читать
                    </Button>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Icon name="MessageCircle" size={16} className="mr-1" />
                        {article.comments.length}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Heart" size={16} className="mr-1" />
                        24
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comments Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Комментарии читателей</h3>
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>Комментарии: {article.comments.length}</CardDescription>
                </CardHeader>
                <CardContent>
                  {article.comments.length > 0 ? (
                    <div className="space-y-4 mb-6">
                      {article.comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">{comment.author}</span>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 mb-6">Пока нет комментариев. Будьте первым!</p>
                  )}
                  
                  {selectedArticle === article.id ? (
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Напишите ваш комментарий..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <div className="flex space-x-2">
                        <Button onClick={() => handleAddComment(article.id)}>
                          <Icon name="Send" size={16} className="mr-2" />
                          Отправить
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedArticle(null)}>
                          Отмена
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedArticle(article.id)}
                      className="w-full"
                    >
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Добавить комментарий
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center animate-scale-in">
          <Icon name="Mail" size={48} className="mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-2">Подпишитесь на рассылку</h3>
          <p className="text-lg mb-6 opacity-90">Получайте самые важные новости прямо на почту</p>
          <div className="max-w-md mx-auto flex space-x-2">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-900"
            />
            <Button onClick={handleSubscribe} className="bg-white text-purple-600 hover:bg-gray-100">
              <Icon name="Send" size={16} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Newspaper" size={24} className="text-purple-400" />
                <h4 className="text-xl font-bold">NewsHub</h4>
              </div>
              <p className="text-gray-400">
                Ваш источник актуальных новостей и аналитики
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наука</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экология</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Теги</h5>
              <div className="flex flex-wrap gap-2">
                {['ИИ', 'Космос', 'Климат', 'Стартапы', 'Будущее'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Связаться</h5>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@newshub.com</p>
                <p>Telegram: @newshub</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Twitter" size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
                  <Icon name="Facebook" size={20} className="cursor-pointer hover:text-blue-600 transition-colors" />
                  <Icon name="Instagram" size={20} className="cursor-pointer hover:text-pink-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 NewsHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;