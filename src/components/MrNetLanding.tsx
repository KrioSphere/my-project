'use client';

import React, { useState } from 'react';

const MrNetLanding = () => {
  // Состояние для чекбокса согласия
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="w-full bg-black text-white font-['Grato_Grotesk'] overflow-x-hidden flex flex-col min-h-screen">

      {/* --- HEADER (Шапка) --- */}
      <header className="w-full border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
           {/* Логотип */}
           <img
             src="/images/logo.svg"
             alt="MrNet Logo"
             className="w-48 h-auto shrink-0"
           />

           {/* Меню */}
           <nav className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-zinc-400">
             <a href="#" className="hover:text-white transition-colors">Технология</a>
             <a href="#" className="hover:text-white transition-colors">Платформа</a>
             <a href="#" className="hover:text-white transition-colors">Тест-драйв</a>
             <a href="#" className="hover:text-white transition-colors">Сеть</a>
           </nav>

           {/* Контакты */}
           <div className="flex items-center gap-6">
             <span className="hidden sm:block text-cyan-400 text-xs font-bold uppercase tracking-wide">+ 7 (800) 600-35-38</span>
             <button className="bg-cyan-400 text-black px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-cyan-300 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
               Оставить заявку
             </button>
           </div>
        </div>
      </header>

      {/* --- HERO СЕКЦИЯ --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-stretch gap-3">

        {/* Левая часть: Картинка (1/3 ширины) */}
        <div className="w-full lg:w-1/3 relative min-h-[400px]">
           <img
             src="/images/hero.jpg"
             alt="MrNet Technology"
             className="w-full h-full object-cover rounded-3xl border border-zinc-800 shadow-2xl"
           />
           {/* Подсветка */}
           <div className="absolute -inset-4 bg-orange-600/20 blur-3xl -z-10 rounded-full opacity-50"></div>
        </div>

        {/* Правая часть: Текст и Кнопка (2/3 ширины) */}
        <div className="w-full lg:w-2/3 flex">
          <div className="w-full rounded-3xl p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden
               border border-[#00E4F0]
               bg-gradient-to-tr from-black to-[#00E4F0]">

            {/* Основной текст */}
            <p className="text-[26px] font-bold leading-tight mb-8 text-white relative z-10 drop-shadow-md">
              Решение mrnet с технологией Bonding объединяет все доступные каналы связи в единый виртуальный канал, суммирует скорость передачи данных и повышает надежность соединения
            </p>

            {/* Кнопка */}
            <button className="w-fit bg-[#00E4F0] text-black text-[14px] font-bold uppercase px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg relative z-10 mb-8">
               ОСТАВИТЬ ЗАЯВКУ
            </button>

            {/* Нижний текст */}
            <p className="text-[18px] text-white/90 leading-snug relative z-10 font-medium">
              Оставьте заявку и с вами свяжется менеджер и договорится о запуске пилота.<br className="hidden lg:block" />
              Без необходимости отключения от текущего провайдера и заключения договора. Все цены рассчитываются индивидуально под клиента
            </p>
          </div>
        </div>

      </section>

      {/* --- СЕКЦИЯ "ПРИНЦИП РАБОТЫ" --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-[95px] pb-0">

        {/* Заголовок */}
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-[52px]">
          Принцип работы
        </h2>

        {/* Сетка карточек */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">

          {/* Карточка 1 */}
          <div className="w-full lg:w-[448px] h-auto lg:h-[387px] border border-[#FF4C00] bg-black flex flex-col items-start rounded-[8px]">
            <div className="w-[408px] h-[200px] mt-5 ml-5 overflow-hidden shrink-0 rounded-[8px]">
               <img src="/images/card-1.jpg" alt="Бондинг" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-[408px] ml-5 mt-6">
               <p className="text-[24px] text-white leading-snug font-medium">
                 ПО «Бондинг» агрегирует несколько операторов связи в мультироутере
               </p>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="w-full lg:w-[448px] h-auto lg:h-[387px] border border-[#FF4C00] bg-black flex flex-col items-start rounded-[8px]">
            <div className="w-[408px] h-[200px] mt-5 ml-5 overflow-hidden shrink-0 rounded-[8px]">
               <img src="/images/card-2.jpg" alt="Платформа" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-[408px] ml-5 mt-6">
               <p className="text-[24px] text-white leading-snug font-medium">
                 ПО «Платформа управления сетевыми устройствами» в облаке обеспечивает мониторинг и управление
               </p>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="w-full lg:w-[448px] h-auto lg:h-[387px] border border-[#FF4C00] bg-black flex flex-col items-start rounded-[8px]">
            <div className="w-[408px] h-[200px] mt-5 ml-5 overflow-hidden shrink-0 rounded-[8px]">
               <img src="/images/card-3.jpg" alt="Отказоустойчивость" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-[408px] ml-5 mt-6">
               <p className="text-[24px] text-white leading-snug font-medium">
                 Агрегирование нескольких каналов и облачная платформа повышают отказоустойчивость интернета
               </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- СХЕМА РАБОТЫ --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-[77px] pb-0">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-[52px]">
          Схема работы решения mrnet
        </h2>
        <div className="w-full flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
             <div className="absolute inset-0 bg-cyan-500/5 blur-xl"></div>
             <img
               src="/images/scheme.svg"
               alt="Схема работы MrNet"
               className="relative w-full h-auto object-cover max-w-full"
             />
          </div>
        </div>
      </section>

      {/* --- СОСТАВ РЕШЕНИЯ --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-[82px] pb-0">
         {/* Заголовок */}
         <h2 className="text-3xl lg:text-5xl font-bold text-white mb-[52px]">
           Состав решения
         </h2>

         {/* Контейнер с SVG-картинками */}
         <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-3">

            {/* Картинка 1 */}
            <div className="w-full lg:w-[333px] h-auto lg:h-[492px] shrink-0">
               <img
                 src="/images/structure-1.svg"
                 alt="Состав 1"
                 className="w-full h-full object-cover border border-[#00E4F0] rounded-xl bg-zinc-900"
               />
            </div>

            {/* Картинка 2 */}
            <div className="w-full lg:w-[448px] h-auto lg:h-[492px] shrink-0">
               <img
                 src="/images/structure-2.svg"
                 alt="Состав 2"
                 className="w-full h-full object-cover border border-[#00E4F0] rounded-xl bg-zinc-900"
               />
            </div>

            {/* Картинка 3 */}
            <div className="w-full lg:w-[563px] h-auto lg:h-[492px] shrink-0">
               <img
                 src="/images/structure-3.svg"
                 alt="Состав 3"
                 className="w-full h-full object-cover border border-[#00E4F0] rounded-xl bg-zinc-900"
               />
            </div>

         </div>
      </section>

      {/* --- ТЕХПОДДЕРЖКА (Flex Layout) --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-[77px] pb-16">
        {/* Заголовок */}
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-[52px]">
           Техподдержка 24/7
        </h2>

        {/* 2 Равных блока в строку */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">

           {/* Блок 1 */}
           <div className="w-full lg:w-[678px] h-auto lg:min-h-[146px] rounded-[8px] px-6 pt-[10px] pb-[18px] lg:px-8 flex flex-row justify-between items-start border border-[#FF4C00]/20
                           bg-[linear-gradient(45deg,_#FF4C00_0%,_transparent_60%)] relative">

              {/* Контент (слева) */}
              <div className="flex flex-col">
                 <h3 className="text-[26px] font-bold text-white mb-[35px] leading-none mt-[4px]">Видим</h3>
                 <ul className="text-white text-[18px] font-medium leading-snug list-disc list-inside ml-2">
                    <li>Работоспособность устройств</li>
                    <li>Уровень сигнала на устройстве</li>
                    <li>Доступность канала передачи и узла связи</li>
                 </ul>
              </div>

              {/* Иконка (справа) */}
              <img
                 src="/images/router-mini.svg"
                 alt=""
                 className="w-[81px] h-[60px] object-contain absolute top-[19px] right-[21px]"
              />
           </div>

           {/* Блок 2 */}
           <div className="w-full lg:w-[678px] h-auto lg:min-h-[146px] rounded-[8px] px-6 pt-[10px] pb-[18px] lg:px-8 flex flex-row justify-between items-start border border-[#FF4C00]/20
                           bg-[linear-gradient(45deg,_#FF4C00_0%,_transparent_60%)] relative">

              {/* Контент (слева) */}
              <div className="flex flex-col">
                 <h3 className="text-[26px] font-bold text-white mb-[35px] leading-none mt-[4px]">Делаем удаленно</h3>
                 <ul className="text-white text-[18px] font-medium leading-snug list-disc list-inside ml-2">
                    <li>Настройку устройств</li>
                    <li>Перезагрузку устройств</li>
                    <li>Обновление ПО</li>
                 </ul>
              </div>

              {/* Иконка (справа) */}
              <img
                 src="/images/rotate.svg"
                 alt=""
                 className="w-[60px] h-[60px] object-contain absolute top-[19px] right-[21px]"
              />
           </div>

        </div>
      </section>

      {/* --- НОВАЯ СЕКЦИЯ КОНТАКТЫ/ЗАЯВКА --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-[52px]">
           Наши специалисты на связи круглосуточно. Отвечают по телефону, в почте и Telegram
        </h2>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">

           {/* Левый блок 448x493 */}
           <div className="w-full lg:w-[448px] h-auto lg:h-[493px] rounded-[8px] pt-[10px] pl-[20px] pr-8 pb-8 flex flex-col justify-start items-start text-left shrink-0
                           bg-[linear-gradient(to_top_right,_#FF4C00,_#B38BCE,_#00E4F0)]">
              {/* Текст черный, 38px, без обводки */}
              <p className="text-[38px] font-bold leading-tight text-black">
                Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?
              </p>
           </div>

           {/* Правый блок 909x493 */}
           <div className="w-full lg:w-[909px] h-auto lg:h-[493px] rounded-[8px] shrink-0 p-8 flex flex-col
                           bg-gradient-to-tr from-transparent to-[#00E4F0] relative">

              {/* Заголовок формы */}
              <p className="text-[20px] font-medium text-white mb-[30px]">
                Услуга доступна только для юридических лиц
              </p>

              {/* Поле "Ваше имя" */}
              <input
                type="text"
                placeholder="Ваше имя*"
                className="w-full bg-white/10 border border-[#00E4F0] rounded-[8px] px-4 py-3 text-white placeholder-white/70 focus:brightness-110 outline-none transition-colors"
              />
              <div className="h-[16px]"></div>

              {/* Текст "оставьте ваши контакты" */}
              <p className="text-white text-base">оставьте ваши контакты</p>
              <div className="h-[22px]"></div>

              {/* Поля Телефон и Ник */}
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Ваш телефон +7(___)___-__-__*"
                  className="w-full bg-white/10 border border-[#00E4F0] rounded-[8px] px-4 py-3 text-white placeholder-white/70 focus:brightness-110 outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Ваш ник в tg"
                  className="w-full bg-white/10 border border-[#00E4F0] rounded-[8px] px-4 py-3 text-white placeholder-white/70 focus:brightness-110 outline-none transition-colors"
                />
              </div>
              <div className="h-[17px]"></div>

              {/* Согласие + Чекбокс */}
              <div className="flex flex-row items-start gap-3">
                 <button
                   className="shrink-0 mt-1 focus:outline-none"
                   onClick={() => setIsAgreed(!isAgreed)}
                 >
                    <img
                      src={isAgreed ? "/images/button-2.svg" : "/images/button.svg"}
                      alt="checkbox"
                      className="w-[20px] h-[20px]"
                    />
                 </button>
                 <p className="text-sm text-white/80 leading-snug">
                    Я даю <span className="underline">согласие</span> на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями <span className="underline">Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</span>
                 </p>
              </div>

              {/* Примечание */}
              <p className="text-[12px] text-white mt-[10px] ml-[32px]">
                * Поля, обязательные для заполнения
              </p>

              {/* Кнопка НАЧАТЬ */}
              <div className="mt-[20px]">
                 <button className="bg-[linear-gradient(to_top_right,_#00E4F0,_#B38BCE,_#FF4C00)] text-black w-[335px] h-[52px] rounded-full font-bold uppercase hover:brightness-110 transition-all shadow-lg flex items-center justify-center">
                    Начать
                 </button>
              </div>

           </div>

        </div>
      </section>

      {/* --- FOOTER (ОБНОВЛЕННЫЙ ТРЕХКОЛОНОЧНЫЙ + КУБ НА ВСЮ ВЫСОТУ ТЕКСТА) --- */}
      <footer className="w-full border-t border-zinc-900 bg-black pt-[105px] pb-20 mt-auto relative">

        {/* КУБ (Абсолютное позиционирование: верх - по тексту (195px), низ - 0, ширина - авто) */}
        <img
          src="/images/cube.svg"
          alt=""
          className="absolute right-0 top-[195px] bottom-0 w-auto h-auto object-cover pointer-events-none z-0"
        />

        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10">

           {/* Дефолтный подвал */}
           <div className="text-[20px] text-white mb-[60px]">
             дефолтный подвал
           </div>

           {/* Трехколоночная структура - items-stretch */}
           <div className="flex flex-col lg:flex-row items-stretch text-white">

             {/* 1-Я КОЛОНКА: Компания + Лого + Слоган */}
             <div className="flex flex-col justify-between shrink-0">
                 <div className="text-[12px] leading-relaxed">
                   <p>ООО «Ньюком Дистрибьюшн»,</p>
                   <p>ОГРН: 1207700420784,</p>
                   <p>Юридический адрес: 119017, Российская</p>
                   <p>Федерация, г. Москва,</p>
                   <p>ул. Большая Ордынка, д. 54 стр. 2</p>
                 </div>

                 {/* Нижний блок: Лого (картинка) + Слоган (2 строки) */}
                 <div className="mt-[65px] lg:mt-0">
                     <img
                       src="/images/logo.svg"
                       alt="MrNet Logo"
                       className="w-48 h-auto shrink-0"
                     />
                     <div className="mt-[16px] text-[12px] font-bold uppercase tracking-wide leading-snug">
                       КАТЕГОРИЧЕСКИ НОВЫЙ<br />ИНТЕРНЕТ ДЛЯ БИЗНЕСА
                     </div>
                 </div>
             </div>

             {/* Отступ 95px */}
             <div className="hidden lg:block w-[95px] shrink-0"></div>
             <div className="block lg:hidden h-8 w-full"></div>

             {/* 2-Я КОЛОНКА: Контакты + Копирайт */}
             <div className="flex flex-col justify-between shrink-0">
                <div className="text-[12px] leading-relaxed">
                   <p>Почта: info@mrnet.ru</p>
                   <p>График работы: по будням</p>
                   <p>с 9:00 до 19:00 по Москве</p>
                   <br />
                   <p>Служба поддержки:</p>
                   <p>Тел: 8 (495) 308-41-51</p>
                   <p>Тел: 8 (800) 600-35-38</p>
                   <p>Почта: helpdesk@mrnet.ru</p>
                   <p>График работы: 24/7</p>
                </div>

                {/* Копирайт (прижат к низу) */}
                <div className="mt-[60px] lg:mt-0 text-[12px]">
                   ©2025 mrnet.ru Все права защищены
                </div>
             </div>

             {/* Отступ 120px */}
             <div className="hidden lg:block w-[120px] shrink-0"></div>
             <div className="block lg:hidden h-8 w-full"></div>

             {/* 3-Я КОЛОНКА: Ссылки и документы (весь текст подчеркнут) */}
             <div className="flex flex-col gap-1 underline text-[12px]">
                 <a href="#" className="hover:text-cyan-400">Пользовательское соглашение</a>
                 <a href="#" className="hover:text-cyan-400">Политика в отношении обработки персональных данных</a>
                 <a href="#" className="hover:text-cyan-400">Соглашение об обработке данных</a>
                 <a href="#" className="hover:text-cyan-400">Соглашение о порядке оказания услуг</a>
                 <a href="#" className="hover:text-cyan-400">Соглашение о технической поддержке</a>
                 <a href="#" className="hover:text-cyan-400">Требования по эксплуатации оборудования mrnet</a>
                 <a href="#" className="hover:text-cyan-400">Требования к серверным ресурсам для установки ПО</a>

                 <div className="h-4"></div>

                 <a href="#" className="hover:text-cyan-400">Инструкция по работе с личным кабинетом</a>
                 <a href="#" className="hover:text-cyan-400">Инструкция по эксплуатации мультироутера 04</a>
                 <a href="#" className="hover:text-cyan-400">Инструкция по эксплуатации мультироутера 05</a>
                 <a href="#" className="hover:text-cyan-400">Инструкция по эксплуатации мультироутера 06</a>
                 <a href="#" className="hover:text-cyan-400">Инструкция по эксплуатации мультироутера 07</a>
             </div>

           </div>

        </div>
      </footer>

    </div>
  );
};

export default MrNetLanding;