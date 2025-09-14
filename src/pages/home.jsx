import React, { useState, useEffect } from "react";
import "./home.css";
import IOSPhoneShowcase from "../components/IOSPhoneShowcase";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Bed Action</span>
            <br />
            Персонализированные банковские рекомендации
          </h1>
          <p className="hero-description">
            Инновационное решение для анализа поведения клиентов и предоставления 
            персонализированных финансовых продуктов в режиме реального времени
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Точность рекомендаций</span>
            </div>
            <div className="stat">
              <span className="stat-number">3x</span>
              <span className="stat-label">Увеличение конверсии</span>
            </div>
            <div className="stat">
              <span className="stat-number">60+</span>
              <span className="stat-label">Типов продуктов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Ключевые возможности</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI-анализ поведения</h3>
              <p>Машинное обучение для анализа транзакций и предпочтений клиентов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Push-уведомления</h3>
              <p>Персонализированные предложения в реальном времени</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Финансовые продукты</h3>
              <p>Депозиты, карты, инвестиции и другие банковские услуги</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Аналитика</h3>
              <p>Детальная статистика эффективности рекомендаций</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Showcase Section */}
      <section className="showcase-section">
        <div className="container">
          <h2 className="section-title">Демонстрация уведомлений</h2>
          <p className="section-description">
            Посмотрите, как работают персонализированные уведомления на мобильном устройстве
          </p>
          <IOSPhoneShowcase />
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="tech-section">
        <div className="container">
          <h2 className="section-title">Техническая реализация</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>🤖 Machine Learning</h3>
              <ul>
                <li>Анализ транзакционных данных</li>
                <li>Кластеризация клиентов</li>
                <li>Предиктивная аналитика</li>
                <li>Персонализация рекомендаций</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>📊 Data Processing</h3>
              <ul>
                <li>Real-time обработка данных</li>
                <li>ETL пайплайны</li>
                <li>Аналитика поведения</li>
                <li>A/B тестирование</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>🔔 Push Notifications</h3>
              <ul>
                <li>Персонализированные сообщения</li>
                <li>Оптимальное время отправки</li>
                <li>Сегментация аудитории</li>
                <li>Отслеживание конверсий</li>
              </ul>
            </div>
          </div>
          
          <div className="results-section">
            <h3>Результаты внедрения</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-value">+250%</span>
                <span className="result-label">Увеличение CTR</span>
              </div>
              <div className="result-item">
                <span className="result-value">85%</span>
                <span className="result-label">Точность прогнозов</span>
              </div>
              <div className="result-item">
                <span className="result-value">-40%</span>
                <span className="result-label">Снижение оттока</span>
              </div>
              <div className="result-item">
                <span className="result-value">60+</span>
                <span className="result-label">Типов продуктов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Bed Action. Decentrathon 4 Showcase</p>
          <p>Персонализированные банковские рекомендации на основе AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
