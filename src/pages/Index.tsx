import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация в стиле Discord */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center shadow-lg shadow-[#5865f2]/30">
              <Icon name="Monitor" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Дискордик</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Rich Presence для Figma в Discord</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="Github" size={16} className="mr-2" />
              GitHub
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium shadow-lg shadow-[#5865f2]/20">
              Скачать бесплатно
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Icon name="X" size={20} /> : <Icon name="Menu" size={20} />}
          </Button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="Github" size={16} className="mr-2" />
                GitHub
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Скачать бесплатно
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg shadow-[#5865f2]/30">
            <Icon name="Monitor" size={24} className="text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["🎨", "⚡", "🛡️", "🚀"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Сервер Дискордик</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronDown" size={12} />
                  <span>Текстовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {[
                    { name: "общий", active: false },
                    { name: "витрина", active: true },
                    { name: "новости", active: false, badge: "3" },
                    { name: "помощь", active: false },
                  ].map((channel) => (
                    <div
                      key={channel.name}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer ${
                        channel.active
                          ? "bg-[#393c43] text-white"
                          : "text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43]"
                      }`}
                    >
                      <Icon name="Hash" size={16} />
                      <span className="text-sm flex-1">{channel.name}</span>
                      {channel.badge && (
                        <span className="bg-[#ed4245] text-white text-xs px-1.5 rounded-full">{channel.badge}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronDown" size={12} />
                  <span>Голосовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Общий", "Обзор дизайна"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Icon name="Volume2" size={16} />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">А</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#292b2f] rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алексей</div>
                <div className="text-[#3ba55c] text-xs truncate">● В сети</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Mic" size={16} className="text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Settings" size={16} className="text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Icon name="Menu" size={20} />
              </Button>
              <Icon name="Hash" size={20} className="text-[#8e9297]" />
              <span className="text-white font-semibold">витрина</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Показывай свою работу в Figma прямо в Discord</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Icon name="Bell" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Users" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Search" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Приветственное сообщение от бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#5865f2]/30">
                  <Icon name="Monitor" size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#5865f2] font-medium text-sm sm:text-base">Дискордик</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded font-medium">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:00</span>
                  </div>
                  <p className="mb-3 sm:mb-4 text-[#dcddde]">
                    👋 <strong className="text-white">Добро пожаловать!</strong> Дискордик показывает твой прогресс в Figma прямо в Discord — без лишних движений.
                  </p>
                  <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                    <h3 className="text-white font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                      <span>⚡</span> Что умеет Дискордик:
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#b9bbbe]">
                      <li className="flex items-center gap-2"><span className="text-[#3ba55c]">✓</span> Автоматически определяет Figma в браузере и приложении</li>
                      <li className="flex items-center gap-2"><span className="text-[#3ba55c]">✓</span> Показывает название текущего проекта и файла</li>
                      <li className="flex items-center gap-2"><span className="text-[#3ba55c]">✓</span> Обновляется каждые 5 секунд в реальном времени</li>
                      <li className="flex items-center gap-2"><span className="text-[#3ba55c]">✓</span> Очищает статус при простое — никакого мусора</li>
                      <li className="flex items-center gap-2"><span className="text-[#3ba55c]">✓</span> Работает на Windows, macOS и Linux</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя с Rich Presence */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мария Дизайнер</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Только что поставила Дискордик — это огонь 🔥 Команда сразу видит над чем я работаю!
                  </div>

                  {/* Демо Rich Presence */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm shadow-xl">
                    {/* Заголовок профиля */}
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl">M</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs px-2 sm:px-3 py-1 rounded"
                      >
                        <Icon name="Settings" size={12} className="mr-1" />
                        <span className="hidden sm:inline">Профиль</span>
                      </Button>
                    </div>

                    {/* Информация профиля */}
                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Мария</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <span>maria_design</span>
                          <span>·</span>
                          <span>Дизайнер</span>
                          <div className="flex gap-1 ml-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#5865f2] rounded-sm"></div>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3ba55c] rounded-sm"></div>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#faa61a] rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* Статусное сообщение */}
                      <div className="mb-3 sm:mb-4">
                        <div className="bg-[#36393f] rounded-lg p-2 sm:p-3 relative">
                          <div className="absolute -top-2 left-3 sm:left-4 w-4 h-4 bg-[#36393f] rotate-45"></div>
                          <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                            <span>🎨</span>
                            <span>В потоке дизайна...</span>
                          </div>
                        </div>
                      </div>

                      {/* Вкладки */}
                      <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Обо мне
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Активность
                        </button>
                      </div>

                      {/* Активность Дискордик */}
                      <div>
                        <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <span>Работает в Figma</span>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                          {/* Логотип Figma */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff7262] to-[#f24e1e] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z" />
                            </svg>
                          </div>

                          {/* Детали активности */}
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">Дискордик</div>
                            <div className="text-[#dcddde] text-xs sm:text-sm mb-1">📐 Redesign — Главная страница</div>
                            <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Figma Desktop • Автосохранение вкл.</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">2:14 прошло</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение от другого пользователя */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">И</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Иван UX</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:08</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Мария, вижу что ты работаешь над лендингом 👀 Теперь знаю когда лучше написать, не мешаю потоку 😄
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Download" size={24} className="text-[#5865f2]" />
                  Начни за 3 минуты
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {[
                    {
                      step: "1",
                      title: "Скачай Дискордик",
                      desc: "Windows, macOS или Linux — выбирай что удобно",
                      emoji: "⬇️",
                    },
                    {
                      step: "2",
                      title: "Подключи Discord",
                      desc: "Безопасная авторизация через официальный OAuth",
                      emoji: "🔗",
                    },
                    {
                      step: "3",
                      title: "Открой Figma",
                      desc: "Всё остальное Дискордик сделает сам — магия!",
                      emoji: "✨",
                    },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#5865f2]/30 relative">
                        <span className="text-white font-bold text-sm sm:text-base">{item.step}</span>
                      </div>
                      <div className="text-xl mb-1">{item.emoji}</div>
                      <h3 className="text-white font-medium mb-2 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-[#b9bbbe] text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium shadow-lg shadow-[#5865f2]/20">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать Дискордик — бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Icon name="Github" size={16} className="mr-2" />
                    Исходный код на GitHub
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему выбирают Дискордик?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: "Zap",
                      title: "Работает без настроек",
                      desc: "Установил — запустил — готово. Никаких конфигов",
                    },
                    {
                      icon: "Eye",
                      title: "Умное отслеживание",
                      desc: "Показывает проект, файл и время работы в Figma",
                    },
                    {
                      icon: "RefreshCw",
                      title: "Реальное время",
                      desc: "Статус обновляется каждые 5 секунд автоматически",
                    },
                    {
                      icon: "Shield",
                      title: "Никакой слежки",
                      desc: "Данные не собираются. Работает локально на твоём ПК",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">
                        <Icon name={feature.icon} size={20} />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                <Icon name="PlusCircle" size={22} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde] flex-shrink-0" />
                <span className="text-[#72767d] text-xs sm:text-sm flex-1">Написать в #витрина</span>
                <div className="hidden sm:flex items-center gap-2">
                  <Icon name="Gift" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                  <Icon name="Smile" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                </div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Мария Дизайнер",
                    status: "🎨 Работает в Figma",
                    avatar: "М",
                    color: "from-purple-500 to-pink-500",
                    online: true,
                  },
                  {
                    name: "Иван UX",
                    status: "В сети",
                    avatar: "И",
                    color: "from-green-500 to-teal-500",
                    online: true,
                  },
                  {
                    name: "Алексей",
                    status: "⚡ Пишет код",
                    avatar: "А",
                    color: "from-blue-500 to-purple-500",
                    online: true,
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      {user.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Офлайн */}
            <div>
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Не в сети — 1</h3>
              <div className="flex items-center gap-3 p-2 rounded cursor-pointer opacity-50">
                <div className="w-8 h-8 bg-[#4f545c] rounded-full flex items-center justify-center relative">
                  <span className="text-[#b9bbbe] text-sm font-medium">С</span>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#747f8d] border-2 border-[#2f3136] rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[#8e9297] text-sm font-medium truncate">Света PM</div>
                  <div className="text-[#72767d] text-xs truncate">Не в сети</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;