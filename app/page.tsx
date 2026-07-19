"use client";

import { FormEvent, useState } from "react";

const projects = [
  {
    title: "Кухня в тёплом минимализме",
    type: "Кухня",
    price: "от 248 000 ₽",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Шкаф во всю стену",
    type: "Шкаф",
    price: "от 136 000 ₽",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Гардеробная с подсветкой",
    type: "Гардеробная",
    price: "от 184 000 ₽",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Кухня-гостиная с островом",
    type: "Кухня",
    price: "от 315 000 ₽",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Прихожая под размеры ниши",
    type: "Прихожая",
    price: "от 94 000 ₽",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Домашний кабинет",
    type: "Рабочая зона",
    price: "от 119 000 ₽",
    image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1200&q=85",
  },
];

const steps = [
  ["01", "Заявка и консультация", "Уточняем задачу, стиль, размеры и ориентир по бюджету."],
  ["02", "Замер и проект", "Выезжаем на объект, создаём проект и подбираем материалы."],
  ["03", "Смета и договор", "Фиксируем стоимость, комплектацию и сроки до начала работ."],
  ["04", "Производство", "Изготавливаем мебель и присылаем фото с производства."],
  ["05", "Доставка и монтаж", "Привозим, собираем, убираем упаковку и сдаём готовую работу."],
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="header container">
        <a className="logo" href="#top" aria-label="WoodForma, на главную">
          WOOD<span>FORMA</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#projects">Работы</a>
          <a href="#process">Как работаем</a>
          <a href="#about">О нас</a>
        </nav>
        <a className="headerPhone" href="tel:+79990000000">+7 999 000-00-00</a>
      </header>

      <section className="hero" id="top">
        <div className="heroOverlay" />
        <div className="container heroContent">
          <p className="eyebrow">Мебельное производство в Санкт-Петербурге</p>
          <h1>Мебель, которая становится частью вашего пространства</h1>
          <p className="heroText">
            Проектируем кухни, шкафы и гардеробные по индивидуальным размерам. Работаем по договору и фиксируем стоимость до запуска производства.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#calculate">Рассчитать стоимость</a>
            <a className="button buttonGhost" href="#projects">Посмотреть работы</a>
          </div>
          <div className="heroFacts">
            <div><strong>8 лет</strong><span>создаём мебель</span></div>
            <div><strong>420+</strong><span>готовых проектов</span></div>
            <div><strong>24 мес.</strong><span>гарантия по договору</span></div>
          </div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="sectionHead">
          <div>
            <p className="eyebrow dark">Избранные проекты</p>
            <h2>Реализованные интерьеры</h2>
          </div>
          <p>Каждый проект рассчитывается индивидуально. Цена зависит от размеров, материалов и фурнитуры.</p>
        </div>
        <div className="projectsGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="projectInfo">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits">
        <div className="container benefitsGrid">
          <div><span>01</span><h3>Стоимость без сюрпризов</h3><p>Фиксируем финальную смету в договоре до начала производства.</p></div>
          <div><span>02</span><h3>Свои замерщики и монтажники</h3><p>Не передаём ключевые этапы случайным подрядчикам.</p></div>
          <div><span>03</span><h3>Материалы на выбор</h3><p>Покажем образцы фасадов, столешниц и фурнитуры на встрече.</p></div>
          <div><span>04</span><h3>Гарантия 24 месяца</h3><p>Условия гарантии и сроки исправления закреплены документально.</p></div>
        </div>
      </section>

      <section className="section container process" id="process">
        <div className="sectionHead">
          <div><p className="eyebrow dark">Прозрачный процесс</p><h2>От идеи до монтажа</h2></div>
          <p>Вы всегда знаете, на каком этапе находится проект и что произойдёт дальше.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <div className="step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="container aboutGrid">
          <div className="aboutImage" role="img" aria-label="Мастер работает в мебельном производстве" />
          <div className="aboutContent">
            <p className="eyebrow">Собственное производство</p>
            <h2>Отвечаем за качество своими руками</h2>
            <p>WoodForma — небольшая команда проектировщиков, технологов и мастеров. Мы не гонимся за количеством заказов: берём ограниченное число проектов, чтобы контролировать качество на каждом этапе.</p>
            <ul>
              <li>Показываем производство до заключения договора</li>
              <li>Работаем с проверенной фурнитурой</li>
              <li>Остаёмся на связи после монтажа</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container calculate" id="calculate">
        <div className="calculateIntro">
          <p className="eyebrow dark">Предварительный расчёт</p>
          <h2>Расскажите, какая мебель вам нужна</h2>
          <p>Ответим в течение рабочего дня, зададим несколько уточняющих вопросов и назовём ориентировочный диапазон стоимости.</p>
          <div className="contactLine"><span>Позвонить напрямую</span><a href="tel:+79990000000">+7 999 000-00-00</a></div>
          <div className="contactLine"><span>Написать в Telegram</span><a href="https://t.me/woodforma_demo">@woodforma_demo</a></div>
        </div>

        <form className="leadForm" onSubmit={handleSubmit}>
          {sent ? (
            <div className="success" role="status">
              <span>✓</span>
              <h3>Заявка принята</h3>
              <p>Это демонстрация интерфейса. В клиентской версии заявка будет отправляться владельцу в Telegram или CRM.</p>
              <button type="button" onClick={() => setSent(false)}>Отправить ещё одну</button>
            </div>
          ) : (
            <>
              <label>Что хотите заказать?
                <select required defaultValue="">
                  <option value="" disabled>Выберите вариант</option>
                  <option>Кухню</option><option>Шкаф</option><option>Гардеробную</option><option>Другую мебель</option>
                </select>
              </label>
              <label>Ориентировочный бюджет
                <select required defaultValue="">
                  <option value="" disabled>Выберите диапазон</option>
                  <option>до 100 000 ₽</option><option>100 000–200 000 ₽</option><option>200 000–350 000 ₽</option><option>от 350 000 ₽</option>
                </select>
              </label>
              <label>Имя<input required name="name" placeholder="Как к вам обращаться" /></label>
              <label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00" /></label>
              <label className="wide">Комментарий<textarea name="comment" rows={4} placeholder="Например: кухня 3,2 метра, нужен проект и замер" /></label>
              <button className="button buttonPrimary wide" type="submit">Получить расчёт</button>
              <small className="wide">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
            </>
          )}
        </form>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div><a className="logo light" href="#top">WOOD<span>FORMA</span></a><p>Мебель по индивидуальным размерам в Санкт-Петербурге.</p></div>
          <div><span>Навигация</span><a href="#projects">Работы</a><a href="#process">Процесс</a><a href="#calculate">Расчёт</a></div>
          <div><span>Контакты</span><a href="tel:+79990000000">+7 999 000-00-00</a><a href="mailto:hello@woodforma.ru">hello@woodforma.ru</a><p>Пн–Сб, 10:00–19:00</p></div>
        </div>
        <div className="container footerBottom"><span>© 2026 WoodForma</span><span>Демонстрационный проект для портфолио</span></div>
      </footer>
    </main>
  );
}
