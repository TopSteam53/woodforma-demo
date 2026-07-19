"use client";

import { FormEvent, useMemo, useState } from "react";

const projects = [
  {
    title: "Кухня в тёплом минимализме",
    type: "Кухни",
    price: "от 248 000 ₽",
    details: "МДФ • шпон дуба • Blum",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Шкаф во всю стену",
    type: "Шкафы",
    price: "от 136 000 ₽",
    details: "Эмаль • скрытые ручки • подсветка",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Гардеробная с подсветкой",
    type: "Гардеробные",
    price: "от 184 000 ₽",
    details: "Шпон ореха • стекло • LED",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Кухня-гостиная с островом",
    type: "Кухни",
    price: "от 315 000 ₽",
    details: "Камень • матовая эмаль • Hettich",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Прихожая под размеры ниши",
    type: "Шкафы",
    price: "от 94 000 ₽",
    details: "МДФ • зеркало • мягкая панель",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Домашний кабинет",
    type: "Рабочие зоны",
    price: "от 119 000 ₽",
    details: "Шпон ясеня • металл • кабель-менеджмент",
    image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1400&q=88",
  },
];

const filters = ["Все", "Кухни", "Шкафы", "Гардеробные", "Рабочие зоны"];

const steps = [
  ["01", "Заявка и консультация", "Уточняем задачу, стиль, размеры и ориентир по бюджету."],
  ["02", "Замер и проект", "Выезжаем на объект, создаём проект и подбираем материалы."],
  ["03", "Смета и договор", "Фиксируем стоимость, комплектацию и сроки до начала работ."],
  ["04", "Производство", "Изготавливаем мебель и присылаем фото с производства."],
  ["05", "Доставка и монтаж", "Привозим, собираем и сдаём полностью готовый интерьер."],
];

const furnitureTypes = ["Кухня", "Шкаф", "Гардеробная", "Другая мебель"];
const budgets = ["до 100 000 ₽", "100–200 тыс. ₽", "200–350 тыс. ₽", "от 350 000 ₽"];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [furnitureType, setFurnitureType] = useState("Кухня");
  const [budget, setBudget] = useState("200–350 тыс. ₽");

  const visibleProjects = useMemo(
    () => activeFilter === "Все" ? projects : projects.filter((project) => project.type === activeFilter),
    [activeFilter],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="headerWrap">
        <div className="header container">
          <a className="logo light" href="#top" aria-label="WoodForma, на главную">
            WOOD<span>FORMA</span>
          </a>
          <nav className="nav" aria-label="Основная навигация">
            <a href="#projects">Работы</a>
            <a href="#process">Процесс</a>
            <a href="#about">О нас</a>
            <a href="#calculate">Контакты</a>
          </nav>
          <div className="headerActions">
            <a className="headerPhone" href="tel:+79990000000">+7 999 000-00-00</a>
            <a className="headerCta" href="#calculate">Получить расчёт</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="heroOverlay" />
        <div className="container heroContent">
          <div className="heroBadge"><span />Собственное производство • Санкт-Петербург</div>
          <h1>Мебель, которая точно становится частью вашего пространства</h1>
          <p className="heroText">
            Проектируем кухни, шкафы и гардеробные по индивидуальным размерам. Честная смета, понятные сроки и аккуратный монтаж.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#calculate">Рассчитать стоимость <span>↗</span></a>
            <a className="button buttonGhost" href="#projects">Смотреть проекты</a>
          </div>
          <div className="heroBottom">
            <div className="heroFacts">
              <div><strong>8</strong><span>лет создаём мебель</span></div>
              <div><strong>420+</strong><span>готовых проектов</span></div>
              <div><strong>24</strong><span>месяца гарантии</span></div>
            </div>
            <div className="heroNote">От первого эскиза<br />до финального монтажа</div>
          </div>
        </div>
      </section>

      <section className="introStrip">
        <div className="container introStripGrid">
          <p>Создаём не просто мебель, а спокойное и продуманное пространство для жизни.</p>
          <div><span>Кухни</span><span>Шкафы</span><span>Гардеробные</span><span>Рабочие зоны</span></div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="sectionHead">
          <div>
            <p className="eyebrow dark">Избранные проекты</p>
            <h2>Интерьеры, созданные под привычки владельцев</h2>
          </div>
          <p>Каждый проект рассчитывается индивидуально. Цена зависит от размеров, материалов и выбранной фурнитуры.</p>
        </div>

        <div className="projectFilters" aria-label="Фильтр проектов">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projectsGrid">
          {visibleProjects.map((project, index) => (
            <article className={`projectCard projectCard${index % 4}`} key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="projectShade" />
              <div className="projectTop"><span>{project.type}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="projectInfo">
                <p>{project.details}</p>
                <h3>{project.title}</h3>
                <div><strong>{project.price}</strong><span>Смотреть проект ↗</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits">
        <div className="container benefitsHead">
          <p className="eyebrow">Почему нам доверяют</p>
          <h2>Контролируем результат<br />на каждом этапе</h2>
        </div>
        <div className="container benefitsGrid">
          <div><span>01</span><h3>Стоимость без сюрпризов</h3><p>Фиксируем финальную смету в договоре до начала производства.</p></div>
          <div><span>02</span><h3>Проект точно по размерам</h3><p>Учитываем геометрию помещения, коммуникации и сценарии использования.</p></div>
          <div><span>03</span><h3>Материалы и фурнитура</h3><p>Подбираем решения под ваш бюджет без компромисса в важных деталях.</p></div>
          <div><span>04</span><h3>Гарантия 24 месяца</h3><p>Остаёмся на связи после монтажа и отвечаем за свою работу.</p></div>
        </div>
      </section>

      <section className="section container process" id="process">
        <div className="sectionHead">
          <div><p className="eyebrow dark">Прозрачный процесс</p><h2>Пять понятных шагов до готового интерьера</h2></div>
          <p>Вы всегда знаете, на каком этапе находится проект, что уже сделано и что произойдёт дальше.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <div className="step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="container aboutGrid">
          <div className="aboutImage" role="img" aria-label="Мастер работает в мебельном производстве">
            <div className="aboutImageBadge"><strong>420+</strong><span>реализованных<br />проектов</span></div>
          </div>
          <div className="aboutContent">
            <p className="eyebrow">Собственное производство</p>
            <h2>Отвечаем за качество своими руками</h2>
            <p>WoodForma — небольшая команда проектировщиков, технологов и мастеров. Берём ограниченное число проектов, чтобы контролировать качество каждой детали.</p>
            <blockquote>«Хорошая мебель должна выглядеть естественно, служить долго и делать повседневную жизнь удобнее».</blockquote>
            <ul>
              <li>Показываем производство до заключения договора</li>
              <li>Работаем с проверенными материалами и фурнитурой</li>
              <li>Остаёмся на связи после завершения монтажа</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container calculate" id="calculate">
        <div className="calculateIntro">
          <p className="eyebrow dark">Предварительный расчёт</p>
          <h2>Расскажите, какая мебель вам нужна</h2>
          <p>Ответим в течение рабочего дня, зададим несколько вопросов и назовём ориентировочный диапазон стоимости.</p>
          <div className="contactLine"><span>Позвонить напрямую</span><a href="tel:+79990000000">+7 999 000-00-00</a></div>
          <div className="contactLine"><span>Написать в Telegram</span><a href="https://t.me/woodforma_demo">@woodforma_demo</a></div>
        </div>

        <form className="leadForm" onSubmit={handleSubmit}>
          {sent ? (
            <div className="success" role="status">
              <span>✓</span>
              <p className="eyebrow dark">Спасибо за заявку</p>
              <h3>Мы уже получили ваши пожелания</h3>
              <p>Это демонстрационный экран. В клиентской версии заявка будет отправлена менеджеру.</p>
              <button type="button" onClick={() => setSent(false)}>Вернуться к расчёту</button>
            </div>
          ) : (
            <>
              <div className="formStep wide"><span>01</span><strong>Что хотите заказать?</strong></div>
              <div className="choiceGrid wide">
                {furnitureTypes.map((type) => (
                  <button className={furnitureType === type ? "active" : ""} key={type} onClick={() => setFurnitureType(type)} type="button">{type}</button>
                ))}
              </div>
              <div className="formStep wide"><span>02</span><strong>Ориентировочный бюджет</strong></div>
              <div className="budgetGrid wide">
                {budgets.map((item) => (
                  <button className={budget === item ? "active" : ""} key={item} onClick={() => setBudget(item)} type="button">{item}</button>
                ))}
              </div>
              <div className="formStep wide"><span>03</span><strong>Как с вами связаться?</strong></div>
              <label>Имя<input required name="name" placeholder="Как к вам обращаться" /></label>
              <label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00" /></label>
              <label className="wide">Комментарий<textarea name="comment" rows={3} placeholder="Например: кухня 3,2 метра, нужен проект и замер" /></label>
              <button className="uploadButton wide" type="button"><span>＋</span> Прикрепить фото помещения <small>до 10 МБ</small></button>
              <button className="button buttonPrimary wide" type="submit">Получить предварительный расчёт <span>↗</span></button>
              <small className="wide privacyText">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
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
