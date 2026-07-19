"use client";

import { FormEvent, useState } from "react";

const projects = [
  { title: "Кухня с островом и тёплой подсветкой", type: "Кухня", price: "от 315 000 ₽", note: "МДФ, каменная столешница, фурнитура Blum", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85", large: true },
  { title: "Шкаф во всю стену", type: "Шкаф", price: "от 136 000 ₽", note: "Матовые фасады, скрытые ручки", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85" },
  { title: "Гардеробная с мягким светом", type: "Гардеробная", price: "от 184 000 ₽", note: "Открытые секции, подсветка, стекло", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85" },
  { title: "Рабочая зона для домашнего кабинета", type: "Рабочая зона", price: "от 119 000 ₽", note: "Стол, хранение, древесная фактура", image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1400&q=85" },
];

const process = [
  { number: "01", title: "Знакомство с задачей", text: "Обсуждаем помещение, стиль, пожелания и ориентир по бюджету." },
  { number: "02", title: "Замер и проект", text: "Выезжаем на объект, уточняем размеры, подбираем материалы и конфигурацию." },
  { number: "03", title: "Смета и договор", text: "Фиксируем комплектацию, стоимость и сроки до старта производства." },
  { number: "04", title: "Производство и монтаж", text: "Изготавливаем, доставляем, собираем и сдаём полностью готовый результат." },
];

const benefits = [
  { title: "Фиксированная стоимость", text: "До запуска в производство фиксируем смету и объём работ." },
  { title: "Проект под размеры помещения", text: "Каждое решение адаптируется под конкретную геометрию пространства." },
  { title: "Аккуратный монтаж", text: "Своя команда монтажников и чистая сдача объекта без лишней суеты." },
  { title: "Качественная фурнитура", text: "Подбираем материалы и комплектующие под срок службы, а не ради экономии." },
];

const furnitureOptions = ["Кухня", "Шкаф", "Гардеробная", "Другая мебель"];
const budgetOptions = ["до 100 000 ₽", "100 000–200 000 ₽", "200 000–350 000 ₽", "от 350 000 ₽"];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [furniture, setFurniture] = useState("Кухня");
  const [budget, setBudget] = useState("100 000–200 000 ₽");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="siteHeader">
        <div className="container headerInner">
          <a className="logo" href="#top" aria-label="WoodForma, на главную">WOOD<span>FORMA</span></a>
          <nav className="desktopNav" aria-label="Основная навигация">
            <a href="#projects">Проекты</a><a href="#process">Процесс</a><a href="#about">О студии</a><a href="#contact">Контакты</a>
          </nav>
          <div className="headerActions">
            <a className="headerPhone" href="tel:+79990000000">+7 999 000-00-00</a>
            <a className="button buttonPrimary buttonSmall" href="#contact">Получить расчёт</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="heroBadge">Собственное мебельное производство • Санкт-Петербург</div>
            <h1>Мебель, которая<br />выглядит спокойно,<br />дорого и уместно</h1>
            <p className="heroText">Проектируем кухни, шкафы и гардеробные по индивидуальным размерам. Помогаем пройти путь от идеи до аккуратного монтажа без лишней сложности и непрозрачных смет.</p>
            <div className="heroButtons">
              <a className="button buttonPrimary" href="#contact">Рассчитать стоимость</a>
              <a className="button buttonSecondary" href="#projects">Посмотреть проекты</a>
            </div>
            <div className="heroStats">
              <div className="heroStat"><strong>8 лет</strong><span>в производстве мебели</span></div>
              <div className="heroStat"><strong>420+</strong><span>реализованных проектов</span></div>
              <div className="heroStat"><strong>24 мес.</strong><span>гарантия по договору</span></div>
            </div>
          </div>
          <div className="heroVisual">
            <div className="heroMainImage"><img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=85" alt="Современная кухня" /></div>
            <div className="heroCard heroCardTop"><span className="heroCardLabel">Проект недели</span><h3>Кухня в тёплом минимализме</h3><p>Фасады без лишнего шума, спокойные оттенки и мягкий свет.</p></div>
            <div className="heroCard heroCardBottom"><span className="heroCardNumber">01</span><div><strong>Честная смета</strong><p>Фиксируем стоимость до старта производства.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section sectionSoft"><div className="container infoRibbon"><div>Кухни на заказ</div><div>Шкафы и системы хранения</div><div>Гардеробные комнаты</div><div>Рабочие зоны и мебель для дома</div></div></section>

      <section className="section" id="projects"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Портфолио</p><h2>Несколько направлений, в которых мы работаем</h2></div><p className="sectionText">Все проекты рассчитываются индивидуально. Стоимость зависит от размеров, материалов, фасадов, столешницы и выбранной фурнитуры.</p></div>
        <div className="filterRow"><button className="filterChip active" type="button">Все проекты</button><button className="filterChip" type="button">Кухни</button><button className="filterChip" type="button">Шкафы</button><button className="filterChip" type="button">Гардеробные</button><button className="filterChip" type="button">Рабочие зоны</button></div>
        <div className="projectsGrid">{projects.map((project) => <article className={`projectCard ${project.large ? "projectCardLarge" : ""}`} key={project.title}><img src={project.image} alt={project.title} /><div className="projectOverlay" /><div className="projectContent"><span className="projectType">{project.type}</span><h3>{project.title}</h3><p>{project.note}</p><div className="projectBottom"><strong>{project.price}</strong><span>Индивидуальный расчёт</span></div></div></article>)}</div>
      </div></section>

      <section className="section sectionDark"><div className="container">
        <div className="sectionHead sectionHeadDark"><div><p className="eyebrow light">Преимущества</p><h2>Почему клиенту с нами спокойно</h2></div><p className="sectionText lightText">Мы не перегружаем процесс лишними обещаниями. Делаем понятный продукт, аккуратный сервис и мебель, которая выглядит уместно долгие годы.</p></div>
        <div className="benefitsGrid">{benefits.map((item, index) => <div className="benefitCard" key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
      </div></section>

      <section className="section" id="process"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Как мы работаем</p><h2>Понятный путь от первого сообщения до установки</h2></div><p className="sectionText">Без хаоса, без бесконечных согласований и без ощущения, что проект живёт своей жизнью. Каждый этап прозрачен и понятен.</p></div>
        <div className="processGrid">{process.map((item) => <article className="processCard" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="section aboutSection" id="about"><div className="container aboutGrid">
        <div className="aboutVisual"><img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85" alt="Мебельное производство" /></div>
        <div className="aboutContent"><p className="eyebrow">О студии</p><h2>Небольшая команда с фокусом на аккуратный результат</h2><p className="sectionText">WoodForma — это проектировщики, мастера и монтажники, которые работают как единая команда. Мы не берём слишком много заказов одновременно, потому что хотим контролировать качество на каждом этапе.</p><ul className="aboutList"><li>Работаем по договору и с понятной сметой</li><li>Показываем реальные материалы и варианты комплектации</li><li>Остаёмся на связи после завершения монтажа</li></ul><div className="quoteCard"><p>“Нам важен не просто красивый рендер, а мебель, которая спокойно встанет в интерьер и будет радовать каждый день.”</p></div><div className="miniStats"><div><strong>1200 м²</strong><span>производственная база партнёров</span></div><div><strong>14 дней</strong><span>средний срок предварительного проекта</span></div></div></div>
      </div></section>

      <section className="section contactSection" id="contact"><div className="container contactGrid">
        <div className="contactIntro"><p className="eyebrow">Предварительный расчёт</p><h2>Расскажите, что хотите сделать</h2><p className="sectionText">Это красивый прототип формы. На реальном сайте сюда можно будет подключить Telegram, CRM или email, а пока задача — показать клиенту визуал и удобную структуру.</p><div className="contactCards"><div className="contactCard"><span>Телефон</span><a href="tel:+79990000000">+7 999 000-00-00</a></div><div className="contactCard"><span>Telegram</span><a href="https://t.me/woodforma_demo">@woodforma_demo</a></div><div className="contactCard"><span>Email</span><a href="mailto:hello@woodforma.ru">hello@woodforma.ru</a></div></div></div>
        <form className="leadForm" onSubmit={handleSubmit}>{sent ? <div className="successState" role="status"><div className="successDot" /><h3>Заявка выглядит отправленной</h3><p>Сейчас это демонстрационный экран успеха. На рабочей версии данные будут уходить владельцу сайта.</p><button type="button" onClick={() => setSent(false)}>Вернуться к форме</button></div> : <><div className="quizBlock wide"><span className="quizLabel">Что хотите заказать?</span><div className="chipGrid">{furnitureOptions.map((item) => <button key={item} type="button" className={`choiceChip ${furniture === item ? "active" : ""}`} onClick={() => setFurniture(item)}>{item}</button>)}</div></div><div className="quizBlock wide"><span className="quizLabel">Ориентировочный бюджет</span><div className="chipGrid">{budgetOptions.map((item) => <button key={item} type="button" className={`choiceChip ${budget === item ? "active" : ""}`} onClick={() => setBudget(item)}>{item}</button>)}</div></div><label>Имя<input required name="name" placeholder="Как к вам обращаться" /></label><label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00" /></label><label className="wide">Комментарий<textarea rows={5} name="comment" placeholder="Например: кухня 3,2 метра, нужен проект и замер" /></label><div className="wide uploadFake"><span>Можно добавить фото помещения</span><button type="button">Прикрепить файл</button></div><button className="button buttonPrimary wide" type="submit">Получить предварительный расчёт</button><small className="wide formNote">Нажимая кнопку, пользователь соглашается на обработку персональных данных. В прототипе это демонстрационный текст.</small></>}</form>
      </div></section>

      <footer className="siteFooter"><div className="container footerGrid"><div><a className="logo footerLogo" href="#top">WOOD<span>FORMA</span></a><p>Прототип сайта для мебельной мастерской. Может быть быстро адаптирован под реального клиента.</p></div><div><span>Навигация</span><a href="#projects">Проекты</a><a href="#process">Процесс</a><a href="#about">О студии</a><a href="#contact">Контакты</a></div><div><span>Контакты</span><a href="tel:+79990000000">+7 999 000-00-00</a><a href="mailto:hello@woodforma.ru">hello@woodforma.ru</a><p>Пн–Сб, 10:00–19:00</p></div></div><div className="container footerBottom"><span>© 2026 WoodForma</span><span>Демонстрационный проект для портфолио</span></div></footer>
    </main>
  );
}
