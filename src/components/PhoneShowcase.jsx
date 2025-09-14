import React, { useState, useEffect } from 'react';
import './PhoneShowcase.css';

const PhoneShowcase = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  // Данные уведомлений из CSV
  const notificationsData = [
    {
      id: 1,
      name: "Айгерим",
      product: "Депозит Сберегательный",
      message: "Айгерим, у вас остаются свободные средства. Сберегательный вклад под 16,5% годовых без возможности снятия. Открыть вклад.",
      icon: "💰",
      time: "Сейчас"
    },
    {
      id: 2,
      name: "Данияр",
      product: "Карта для путешествий",
      message: "Данияр, в августе у вас 143 поездок на такси на 276 795 ₸. С картой для путешествий вернули бы 11 072 ₸ кешбэком. Оформить карту.",
      icon: "🚗",
      time: "2 мин назад"
    },
    {
      id: 3,
      name: "Тимур",
      product: "Депозит Накопительный",
      message: "Тимур, у вас остаются свободные средства. Накопительный вклад под 15,5% годовых с возможностью пополнения. Открыть вклад.",
      icon: "📈",
      time: "5 мин назад"
    },
    {
      id: 4,
      name: "Нурия",
      product: "Кредитная карта",
      message: "Нурия, ваши топ-категории — Продукты питания, Кафе и рестораны, Едим дома. Кредитная карта даёт до 10% кешбэка в любимых категориях. Оформить карту.",
      icon: "💳",
      time: "10 мин назад"
    },
    {
      id: 5,
      name: "Азамат",
      product: "Обмен валют",
      message: "Азамат, вы часто меняете валюту (10 057 045 ₸). В приложении выгодный курс 24/7 без комиссии. Настроить обмен.",
      icon: "💱",
      time: "15 мин назад"
    },
    {
      id: 6,
      name: "Дамир",
      product: "Премиальная карта",
      message: "Дамир, вы часто в ресторанах (176 440 ₸/мес). Премиальная карта вернёт 4% с этих трат. Подключить карту.",
      icon: "⭐",
      time: "20 мин назад"
    }
  ];

  useEffect(() => {
    // Добавляем уведомления по одному с интервалом
    const interval = setInterval(() => {
      if (currentNotificationIndex < notificationsData.length) {
        setNotifications(prev => [
          notificationsData[currentNotificationIndex],
          ...prev
        ]);
        setCurrentNotificationIndex(prev => prev + 1);
      } else {
        // Перезапускаем цикл
        setNotifications([]);
        setCurrentNotificationIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentNotificationIndex]);

  const handleNotificationClick = (notification) => {
    // Анимация клика
    console.log(`Clicked on ${notification.product} for ${notification.name}`);
    
    // Показываем всплывающее уведомление об успешном действии
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.textContent = `✅ ${notification.product} - заявка отправлена!`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  return (
    <div className="phone-showcase">
      <div className="phone-container">
        <div className="phone-frame">
          <div className="phone-screen">
            {/* Status Bar */}
            <div className="status-bar">
              <span className="time">14:32</span>
              <div className="status-icons">
                <span className="signal">📶</span>
                <span className="wifi">📶</span>
                <span className="battery">🔋</span>
              </div>
            </div>

            {/* App Header */}
            <div className="app-header">
              <h3>Банк Уведомления</h3>
              <div className="notification-count">
                {notifications.length > 0 && (
                  <span className="badge">{notifications.length}</span>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="notifications-container">
              {notifications.length === 0 ? (
                <div className="no-notifications">
                  <div className="loading-animation">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                  </div>
                  <p>Ожидание уведомлений...</p>
                </div>
              ) : (
                notifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`notification ${index === 0 ? 'new' : ''}`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="notification-icon">
                      {notification.icon}
                    </div>
                    <div className="notification-content">
                      <div className="notification-header">
                        <span className="notification-title">
                          {notification.product}
                        </span>
                        <span className="notification-time">
                          {notification.time}
                        </span>
                      </div>
                      <p className="notification-message">
                        {notification.message}
                      </p>
                    </div>
                    {index === 0 && <div className="new-indicator"></div>}
                  </div>
                ))
              )}
            </div>

            {/* Bottom Navigation */}
            <div className="bottom-nav">
              <div className="nav-item active">
                <span>🔔</span>
                <span>Уведомления</span>
              </div>
              <div className="nav-item">
                <span>🏠</span>
                <span>Главная</span>
              </div>
              <div className="nav-item">
                <span>💳</span>
                <span>Карты</span>
              </div>
              <div className="nav-item">
                <span>📊</span>
                <span>Аналитика</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="info-panel">
        <h3>Как это работает</h3>
        <div className="info-steps">
          <div className="info-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Анализ данных</h4>
              <p>AI анализирует транзакции и поведение клиента</p>
            </div>
          </div>
          <div className="info-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Персонализация</h4>
              <p>Система подбирает подходящие финансовые продукты</p>
            </div>
          </div>
          <div className="info-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Уведомление</h4>
              <p>Клиент получает персональное предложение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneShowcase;
