import React, { useState, useEffect } from 'react';
import './IOSPhoneShowcase.css';

const IOSPhoneShowcase = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [notificationsData, setNotificationsData] = useState([]);

  // Функция для парсинга CSV данных
  const parseCSV = (csvText) => {
    const lines = csvText.trim().split('\n');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      
      // Более точный парсинг CSV с учетом кавычек
      const values = [];
      let current = '';
      let inQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current);
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current); // Добавляем последнее значение
      
      if (values.length >= 3) {
        const clientCode = values[0];
        const product = values[1];
        const message = values[2];
        
        // Извлекаем имя из сообщения (первое слово после запятой)
        const nameMatch = message.match(/^([А-Яа-я]+),/);
        const name = nameMatch ? nameMatch[1] : `Клиент ${clientCode}`;
        
        data.push({
          id: parseInt(clientCode),
          name: name,
          product: product,
          message: message,
          time: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
          })
        });
      }
    }
    
    return data;
  };

  // Загрузка данных из CSV файла
  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const response = await fetch('/recommendations.csv');
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setNotificationsData(parsedData.slice(0, 15)); // Берем первые 15 записей
      } catch (error) {
        console.error('Ошибка загрузки CSV:', error);
        // Fallback данные если CSV не загрузился
        setNotificationsData([
          {
            id: 1,
            name: "Айгерим",
            product: "Депозит",
            message: "Айгерим, у вас есть возможность разместить свободные средства на депозите под 15%! Это отличный способ приумножить ваши финансы.",
            time: "14:32"
          }
        ]);
      }
    };

    loadNotifications();
  }, []);

  // Добавление уведомлений по одному
  useEffect(() => {
    if (notificationsData.length === 0) return;
    
    const interval = setInterval(() => {
      if (currentNotificationIndex < notificationsData.length) {
        const newNotification = {
          ...notificationsData[currentNotificationIndex],
          id: Date.now() + currentNotificationIndex,
          isNew: true
        };
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 4)]); // Максимум 5 уведомлений
        setCurrentNotificationIndex(prev => prev + 1);
        
        // Убираем флаг "новое" через 3 секунды
        setTimeout(() => {
          setNotifications(prev => 
            prev.map(n => n.id === newNotification.id ? {...n, isNew: false} : n)
          );
        }, 3000);
      } else {
        // Перезапускаем цикл
        setCurrentNotificationIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentNotificationIndex, notificationsData]);

  const handleNotificationClick = (notification) => {
    // Убираем уведомление при клике
    setNotifications(prev => prev.filter(n => n.id !== notification.id));
    
    // Показываем toast
    const toast = document.createElement('div');
    toast.className = 'ios-toast';
    toast.innerHTML = `
      <div class="ios-toast-content">
        <div class="ios-toast-icon">✅</div>
        <div class="ios-toast-text">Заявка отправлена!</div>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 3000);
  };

  return (
    <div className="ios-phone-showcase">
      <div className="iphone-container">
        {/* Фоновое изображение iPhone */}
        <div className="iphone-background">
          <img src="/images/iphone.png" alt="iPhone" />
        </div>
        
        {/* Область для уведомлений */}
        <div className="notifications-overlay">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`ios-notification ${notification.isNew ? 'new' : ''}`}
              style={{ 
                top: `${10 + index * 80}px`,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => handleNotificationClick(notification)}
            >
              {/* Логотип банка */}
              <div className="bank-logo">
                <div className="bcc-logo">
                  <img src="/images/bcc.png" alt="BCC Bank" />
                </div>
              </div>
              
              {/* Контент уведомления */}
              <div className="notification-content">
                <div className="notification-header">
                  <span className="app-name">bcc.kz</span>
                  <span className="notification-time">{notification.time}</span>
                </div>
                <div className="notification-body">
                  {notification.message.substring(0, 120)}
                  {notification.message.length > 120 ? '...' : ''}
                </div>
              </div>
              
              {/* Индикатор нового уведомления */}
              {notification.isNew && <div className="new-indicator"></div>}
            </div>
          ))}
        </div>
        
        {/* Информационная панель */}
        <div className="info-section">
          <h2>Персонализированные банковские уведомления</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🤖</div>
              <div className="feature-text">
                <h3>AI-анализ</h3>
                <p>Искусственный интеллект анализирует ваши транзакции и поведение</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <div className="feature-text">
                <h3>Персонализация</h3>
                <p>Подбираем именно те продукты, которые вам подходят</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <div className="feature-text">
                <h3>Умные уведомления</h3>
                <p>Получайте предложения в нужное время и в нужном месте</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSPhoneShowcase;
