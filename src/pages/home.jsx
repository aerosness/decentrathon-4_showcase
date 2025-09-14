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
            Интеллектуальная банковская система персонализации
          </h1>
          <p className="hero-description">
            Система анализирует транзакции клиентов банка за последние 3 месяца и генерирует 
            персонализированные push-уведомления для рекомендации наиболее подходящих банковских 
            продуктов с максимальной выгодой и конкретными цифрами
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">60</span>
              <span className="stat-label">Клиентов обработано</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Признаков для анализа</span>
            </div>
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">Банковских продуктов</span>
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
              <div className="feature-icon">🔄</div>
              <h3>ETL модуль</h3>
              <p>Загрузка данных из 3 источников, конвертация валют, обработка транзакций и переводов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Feature Engineering</h3>
              <p>Создание 50+ признаков для анализа поведения клиентов за последние 3 месяца</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Scoring Engine</h3>
              <p>Расчет benefit score для каждого продукта с учетом персональных данных клиента</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Ranking System</h3>
              <p>Выбор топ-продуктов с бизнес-правилами и персональными приоритетами</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Push Composer</h3>
              <p>Генерация уведомлений по шаблонам с конкретными цифрами и персонализацией</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Analytics</h3>
              <p>Детальные отчеты и метрики эффективности, экспорт в Excel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Поддерживаемые банковские продукты</h2>
          <p className="section-description">
            Система анализирует поведение клиентов и рекомендует наиболее подходящие продукты из 10 доступных
          </p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">✈️</div>
              <h3>Карта для путешествий</h3>
              <p>4% кешбэк на такси, отели, билеты</p>
            </div>
            <div className="product-card">
              <div className="product-icon">👑</div>
              <h3>Премиальная карта</h3>
              <p>До 4% кешбэк + привилегии для VIP клиентов</p>
            </div>
            <div className="product-card">
              <div className="product-icon">💳</div>
              <h3>Кредитная карта</h3>
              <p>10% кешбэк на топ-3 категории клиента</p>
            </div>
            <div className="product-card">
              <div className="product-icon">💱</div>
              <h3>Валютный счет</h3>
              <p>Выгодный обмен валют без комиссии</p>
            </div>
            <div className="product-card">
              <div className="product-icon">💰</div>
              <h3>Кредит наличными</h3>
              <p>От 12% годовых без залога</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🏦</div>
              <h3>Депозит Сберегательный</h3>
              <p>16,5% годовых</p>
            </div>
            <div className="product-card">
              <div className="product-icon">📈</div>
              <h3>Депозит Накопительный</h3>
              <p>15,5% годовых с пополнением</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🌍</div>
              <h3>Депозит Мультивалютный</h3>
              <p>14,5% для работы с валютой</p>
            </div>
            <div className="product-card">
              <div className="product-icon">📊</div>
              <h3>Инвестиции</h3>
              <p>Низкий порог входа, без комиссий на старт</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🥇</div>
              <h3>Золотые слитки</h3>
              <p>Диверсификация портфеля</p>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Section */}
      <section className="algorithm-section">
        <div className="container">
          <h2 className="section-title">Алгоритм работы системы</h2>
          <p className="section-description">
            7-этапный процесс анализа и генерации персонализированных рекомендаций
          </p>
          <div className="algorithm-steps">
            <div className="algorithm-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>ETL</h3>
                <p>Загрузка данных, конвертация валют, обработка транзакций и переводов</p>
              </div>
            </div>
            <div className="algorithm-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Feature Engineering</h3>
                <p>Расчет агрегированных признаков и поведенческих паттернов</p>
              </div>
            </div>
            <div className="algorithm-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Scoring</h3>
                <p>Расчет benefit score для каждого продукта с учетом профиля клиента</p>
              </div>
            </div>
            <div className="algorithm-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Product Details</h3>
                <p>Подготовка деталей для шаблонов с конкретными цифрами</p>
              </div>
            </div>
            <div className="algorithm-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Ranking</h3>
                <p>Выбор топ-продукта по benefit score + бизнес-приоритетам</p>
              </div>
            </div>
            <div className="algorithm-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Compose</h3>
                <p>Генерация персонализированных push-уведомлений</p>
              </div>
            </div>
            <div className="algorithm-step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Export</h3>
                <p>Сохранение результатов и аналитических отчетов</p>
              </div>
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
              <h3>🐍 Python-based архитектура</h3>
              <ul>
                <li>Python 3.13 - основной язык разработки</li>
                <li>Pandas, NumPy - для обработки данных</li>
                <li>PyYAML - для конфигурации системы</li>
                <li>OpenPyXL - для экспорта в Excel</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>📁 Входные данные</h3>
              <ul>
                <li>clients.csv - профили клиентов (60 кейсов)</li>
                <li>client_X_transactions_3m.csv - транзакции за 3 месяца</li>
                <li>client_X_transfers_3m.csv - переводы за 3 месяца</li>
                <li>Модульная архитектура с расширением</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>🏆 Конкурентные преимущества</h3>
              <ul>
                <li>100% персонализированные уведомления</li>
                <li>Конкретные цифры и проценты</li>
                <li>Анализ реального поведения за 3 месяца</li>
                <li>11 из 14 юнит-тестов пройдено</li>
              </ul>
            </div>
          </div>
          
          <div className="results-section">
            <h3>Статистика проекта</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-value">220</span>
                <span className="result-label">Максимум символов для push</span>
              </div>
              <div className="result-item">
                <span className="result-value">95%</span>
                <span className="result-label">Push содержат конкретные суммы</span>
              </div>
              <div className="result-item">
                <span className="result-value">16.5%</span>
                <span className="result-label">Годовых по депозиту Сберегательному</span>
              </div>
              <div className="result-item">
                <span className="result-value">100%</span>
                <span className="result-label">Уровень персонализации</span>
              </div>
              <div className="result-item">
                <span className="result-value">60</span>
                <span className="result-label">Клиентов - обработано</span>
              </div>
              <div className="result-item">
                <span className="result-value">50+</span>
                <span className="result-label">Признаков - создано для анализа</span>
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
