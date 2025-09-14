import React, { useState, useEffect } from 'react';
import './IOSPhoneShowcase.css';

const IOSPhoneShowcase = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Данные уведомлений из CSV в стиле iOS
  const notificationsData = [
    {
      id: 1,
      app: "Kaspi Bank",
      title: "Депозит Сберегательный",
      message: "Айгерим, у вас остаются свободные средства. Сберегательный вклад под 16,5% годовых без возможности снятия.",
      time: "сейчас",
      icon: "💰",
      color: "#007AFF"
    },
    {
      id: 2,
      app: "Kaspi Bank",
      title: "Карта для путешествий",
      message: "Данияр, в августе у вас 143 поездок на такси на 276 795 ₸. С картой для путешествий вернули бы 11 072 ₸ кешбэком.",
      time: "2 мин назад",
      icon: "🚗",
      color: "#FF9500"
    },
    {
      id: 3,
      app: "Kaspi Bank", 
      title: "Депозит Накопительный",
      message: "Тимур, у вас остаются свободные средства. Накопительный вклад под 15,5% годовых с возможностью пополнения.",
      time: "5 мин назад",
      icon: "📈",
      color: "#34C759"
    },
    {
      id: 4,
      app: "Kaspi Bank",
      title: "Кредитная карта",
      message: "Нурия, ваши топ-категории — Продукты питания, Кафе и рестораны. Кредитная карта даёт до 10% кешбэка.",
      time: "10 мин назад", 
      icon: "💳",
      color: "#FF3B30"
    },
    {
      id: 5,
      app: "Kaspi Bank",
      title: "Обмен валют",
      message: "Азамат, вы часто меняете валюту (10 057 045 ₸). В приложении выгодный курс 24/7 без комиссии.",
      time: "15 мин назад",
      icon: "💱",
      color: "#5856D6"
    },
    {
      id: 6,
      app: "Kaspi Bank",
      title: "Премиальная карта",
      message: "Дамир, вы часто в ресторанах (176 440 ₸/мес). Премиальная карта вернёт 4% с этих трат.",
      time: "20 мин назад",
      icon: "⭐",
      color: "#FF2D92"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNotificationIndex < notificationsData.length) {
        const newNotification = notificationsData[currentNotificationIndex];
        
        // Показываем уведомление с анимацией
        setShowNotification(true);
        setNotifications(prev => [newNotification, ...prev.slice(0, 3)]);
        
        // Скрываем анимацию через 3 секунды
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        
        setCurrentNotificationIndex(prev => prev + 1);
      } else {
        // Перезапускаем цикл с задержкой
        setTimeout(() => {
          setNotifications([]);
          setCurrentNotificationIndex(0);
        }, 2000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentNotificationIndex]);

  const handleNotificationTap = (notification) => {
    // iOS-style haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
    
    // Показываем toast
    const toast = document.createElement('div');
    toast.className = 'ios-toast';
    toast.innerHTML = `
      <div class="toast-icon">${notification.icon}</div>
      <div class="toast-content">
        <div class="toast-title">${notification.title}</div>
        <div class="toast-message">Заявка отправлена!</div>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  };

  return (
    <div className="ios-phone-showcase">
      <div className="phone-container">
        {/* iPhone Frame with Real Image */}
        <div className="iphone-frame">
          <img 
            src="/images/iphone.png" 
            alt="iPhone" 
            className="iphone-image"
          />
          
          {/* Lock Screen Overlay */}
          <div className="lock-screen-overlay">
            {/* Status Bar */}
            <div className="ios-status-bar">
              <div className="status-left">
                <span className="time">9:41</span>
              </div>
              <div className="status-right">
                <span className="signal-bars">
                  <span></span><span></span><span></span><span></span>
                </span>
                <span className="wifi-icon">📶</span>
                <span className="battery">🔋</span>
              </div>
            </div>

            {/* Date and Time */}
            <div className="lock-screen-time">
              <div className="date">Tuesday, August 15</div>
              <div className="time-large">9:41</div>
              {notifications.length > 0 && (
                <div style={{
                  fontSize: '12px', 
                  opacity: 0.8, 
                  marginTop: '8px',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  display: 'inline-block'
                }}>
                  {notifications.length} уведомлений
                </div>
              )}
            </div>

            {/* Notifications Stack */}
            <div className="notifications-stack">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`ios-notification ${index === 0 && showNotification ? 'notification-new' : ''}`}
                  style={{
                    zIndex: 100 - index,
                    opacity: Math.max(0.7, 1 - index * 0.15)
                  }}
                  onClick={() => handleNotificationTap(notification)}
                >
                  <div className="notification-header">
                    <div className="app-icon" style={{ backgroundColor: notification.color }}>
                      {notification.icon}
                    </div>
                    <div className="app-info">
                      <span className="app-name">{notification.app}</span>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">{notification.title}</div>
                    <div className="notification-message">{notification.message}</div>
                  </div>
                </div>
              ))}
              
              {notifications.length === 0 && (
                <div className="no-notifications-ios">
                  <div className="loading-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <p>Ожидание уведомлений...</p>
                  <p style={{fontSize: '10px', opacity: 0.6}}>
                    Индекс: {currentNotificationIndex}/{notificationsData.length}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Indicators */}
            <div className="lock-screen-bottom">
              <div className="camera-icon">📷</div>
              <div className="home-indicator"></div>
              <div className="flashlight-icon">🔦</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="info-panel-ios">
        <h3>🚀 AI-Powered Notifications</h3>
        <div className="info-features">
          <div className="info-feature">
            <div className="feature-icon-ios">🧠</div>
            <div>
              <h4>Smart Analysis</h4>
              <p>Анализ поведения клиентов в реальном времени</p>
            </div>
          </div>
          <div className="info-feature">
            <div className="feature-icon-ios">🎯</div>
            <div>
              <h4>Personalization</h4>
              <p>Персонализированные предложения для каждого клиента</p>
            </div>
          </div>
          <div className="info-feature">
            <div className="feature-icon-ios">📊</div>
            <div>
              <h4>Performance</h4>
              <p>Увеличение конверсии до 250%</p>
            </div>
          </div>
        </div>
        
        <div className="stats-ios">
          <div className="stat-ios">
            <span className="stat-number-ios">95%</span>
            <span className="stat-label-ios">Точность</span>
          </div>
          <div className="stat-ios">
            <span className="stat-number-ios">3x</span>
            <span className="stat-label-ios">Конверсия</span>
          </div>
          <div className="stat-ios">
            <span className="stat-number-ios">60+</span>
            <span className="stat-label-ios">Продуктов</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSPhoneShowcase;
