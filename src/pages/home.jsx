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
            Персонализированные банковские push-уведомления на основе ИИ
          </h1>
          <p className="hero-description">
            Интеллектуальная система генерации персонализированных банковских push-уведомлений, 
            использующая машинное обучение и GPT-4o-mini для анализа поведения клиентов 
            и создания релевантных предложений с идеальным тоном общения
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Валидных push-уведомлений</span>
            </div>
            <div className="stat">
              <span className="stat-number">75+</span>
              <span className="stat-label">Поведенческих признаков</span>
            </div>
            <div className="stat">
              <span className="stat-number">$0.50</span>
              <span className="stat-label">За 60 клиентов</span>
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
              <div className="feature-icon">🤖</div>
              <h3>GPT-4o-mini интеграция</h3>
              <p>Системный промпт с точными шаблонами, retry-логика для качества 95%</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Интеллектуальный scoring</h3>
              <p>Расчет реальной выгоды для каждого клиента, ранжирование по приоритетам</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>11 банковских продуктов</h3>
              <p>Карты, депозиты, инвестиции, кредиты с детальной настройкой TOV</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡</div>
              <h3>Контроль качества</h3>
              <p>Валидация длины 180-220 символов, автоматическая post-обработка</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Tone of Voice (TOV)</h3>
              <p>Идеальный тон общения: дружественно, на равных, с конкретными цифрами и юмором</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Высокая скорость</h3>
              <p>Обработка 60 клиентов за 1-2 минуты, стоимость всего $0.50 за полный цикл</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Showcase Section */}
      <section className="showcase-section">
        <div className="container">
          <h2 className="section-title">Демонстрация уведомлений</h2>
          <p className="section-description">
            Посмотрите, как ИИ генерирует персонализированные банковские push-уведомления 
            с идеальным тоном общения и конкретными цифрами выгоды для каждого клиента
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
              <h3>🤖 AI-powered персонализация</h3>
              <ul>
                <li>Анализ 75+ поведенческих признаков</li>
                <li>Системный промпт с точными шаблонами из ТЗ</li>
                <li>Retry-логика для качества 95%</li>
                <li>Fallback на готовые шаблоны при сбоях</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>💡 Интеллектуальный scoring</h3>
              <ul>
                <li>Расчет реальной выгоды для каждого клиента</li>
                <li>Учет статуса, возраста, поведения</li>
                <li>Ранжирование по персональным приоритетам</li>
                <li>Проверка подходящих продуктов</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>⚡ Production-ready</h3>
              <ul>
                <li>Безопасное хранение API-ключей</li>
                <li>Обработка edge cases</li>
                <li>Comprehensive logging</li>
                <li>Модульная архитектура</li>
              </ul>
            </div>
          </div>
          
          <div className="results-section">
            <h3>Результаты внедрения</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-value">95%</span>
                <span className="result-label">Валидных push-уведомлений</span>
              </div>
              <div className="result-item">
                <span className="result-value">196</span>
                <span className="result-label">Символов средняя длина</span>
              </div>
              <div className="result-item">
                <span className="result-value">100%</span>
                <span className="result-label">Персонализация с именами</span>
              </div>
              <div className="result-item">
                <span className="result-value">1-2 мин</span>
                <span className="result-label">На 60 клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Bed Action. Decentrathon 4 Showcase</p>
          <p>Персонализированные банковские push-уведомления на основе GPT-4o-mini</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
