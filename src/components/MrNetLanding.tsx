'use client';

import React, { useState } from 'react';

const MrNetLanding = () => {
  // Состояние для чекбокса формы
  const [isAgreed, setIsAgreed] = useState(false);

  // --- ЛОГИКА СЛАЙДЕРОВ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ---
  const [principleIndex, setPrincipleIndex] = useState(0);
  const [compositionIndex, setCompositionIndex] = useState(0);

  // Данные для секции "Принцип работы"
  const principles = [
    {
      img: "/images/card-1.jpg",
      text: "ПО «Бондинг» агрегирует несколько операторов связи в мультироутере",
      alt: "Бондинг"
    },
    {
      img: "/images/card-2.jpg",
      text: "ПО «Платформа управления сетевыми устройствами» в облаке обеспечивает мониторинг и управление",
      alt: "Платформа"
    },
    {
      img: "/images/card-3.jpg",
      text: "Агрегирование нескольких каналов и облачная платформа повышают отказоустойчивость интернета",
      alt: "Отказоустойчивость"
    }
  ];

  // Данные для секции "Состав решения"
  const compositions = [
    {
      img: "/images/structure-1.svg",
      desktopWidth: "lg:w-[333px]",
      alt: "Состав 1"
    },
    {
      img: "/images/structure-2.svg",
      desktopWidth: "lg:w-[448px]",
      alt: "Состав 2"
    },
    {
      img: "/images/structure-3.svg",
      desktopWidth: "lg:w-[563px]",
      alt: "Состав 3"
    }
  ];

  // Хендлеры для переключения
  const handlePrinciplePrev = () => {
    setPrincipleIndex((prev) => (prev > 0 ? prev - 1 : principles.length - 1));
  };
  const handlePrincipleNext = () => {
    setPrincipleIndex((prev) => (prev < principles.length - 1 ? prev + 1 : 0));
  };

  const handleCompositionPrev = () => {
    setCompositionIndex((prev) => (prev > 0 ? prev - 1 : compositions.length - 1));
  };
  const handleCompositionNext = () => {
    setCompositionIndex((prev) => (prev < compositions.length - 1 ? prev + 1 : 0));
  };

  // Компонент стрелки для перелистывания (SVG)
  const ArrowIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );

  return (
    <div className="w-full bg-black text-white font-['Grato_Grotesk'] overflow-x-hidden flex flex-col min-h-screen">

      {/* --- HEADER (Шапка) --- */}
      <header className="w-full border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 flex flex-col lg:flex-row items-center lg:items-end">
           {/* Логотип */}
           <img
             src="/images/logo.svg"
             alt="MrNet Logo"
             className="w-48 h-auto shrink-0 pb-4 lg:pb-1"
           />

           {/* Телефон */}
           <span className="block text-cyan-400 text-xs font-bold uppercase tracking-wide whitespace-nowrap mb-2 lg:mb-[5px] lg:ml-[60px]">
             + 7 (800) 600-35-38
           </span>

           {/* Меню и Кнопка (скрыты на мобильных) */}
           <nav className="hidden lg:flex flex-col lg:flex-row lg:items-end text-xs font-bold tracking-widest text-zinc-400 mb-[5px] lg:ml-auto">
             <div className="flex flex-col items-center">
                <img src="/images/point.svg" alt="" className="w-[6px] h-[6px] mb-[6px]" />
                <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Технология</a>
             </div>
             <a href="#" className="hover:text-white transition-colors whitespace-nowrap mt-2 lg:mt-0 lg:ml-[47px]">Платформа управления</a>
             <a href="#" className="hover:text-white transition-colors whitespace-nowrap mt-2 lg:mt-0 lg:ml-[50px]">Тест-драйв</a>
             <a href="#" className="hover:text-white transition-colors whitespace-nowrap mt-2 lg:mt-0 lg:ml-[45px]">Наша сеть</a>
           </nav>

           <button className="hidden lg:block text-[#00E4F0] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors whitespace-nowrap mb-[5px] mt-4 lg:mt-0 lg:ml-[45px]">
             Оставить заявку
           </button>
        </div>
      </header>

      {/* --- HERO СЕКЦИЯ --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-20 flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3">
        {/* Левая часть: Картинка */}
        <div className="w-full lg:w-1/3 relative min-h-[300px] lg:min-h-[400px]">
           <img
             src="/images/hero.jpg"
             alt="MrNet Technology"
             className="w-full h-full object-cover rounded-3xl border border-zinc-800 shadow-2xl"
           />
           <div className="absolute -inset-4 bg-orange-600/20 blur-3xl -z-10 rounded-full opacity-50"></div>
        </div>

        {/* Правая часть: Текст и Кнопка */}
        <div className="w-full lg:w-2/3 flex">
          <div className="w-full rounded-3xl p-6 lg:px-12 lg:pt-[20px] lg:pb-[20px] flex flex-col relative overflow-hidden
               border border-[#00E4F0]
               bg-gradient-to-tr from-black to-[#00E4F0]">

            <p className="text-xl lg:text-[26px] font-bold leading-tight text-white relative z-10 drop-shadow-md mb-8 lg:mb-0">
              Решение mrnet с технологией Bonding объединяет все доступные каналы связи в единый виртуальный канал, суммирует скорость передачи данных и повышает надежность соединения
            </p>

            <button className="w-full lg:w-[334px] h-[48px] lg:h-[36px] lg:my-auto bg-[#00E4F0] text-black text-[14px] font-bold uppercase rounded-full hover:bg-white transition-all shadow-lg relative z-10 flex items-center justify-center mb-8 lg:mb-0">
               ОСТАВИТЬ ЗАЯВКУ
            </button>

            <p className="text-base lg:text-[18px] text-white/90 leading-snug relative z-10 font-medium">
              Оставьте заявку и с вами свяжется менеджер и договорится о запуске пилота.<br className="hidden lg:block" />
              Без необходимости отключения от текущего провайдера и заключения договора. Все цены рассчитываются индивидуально под клиента
            </p>
          </div>
        </div>
      </section>

      {/* --- СЕКЦИЯ "ПРИНЦИП РАБОТЫ" --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-12 lg:pt-[95px] pb-0">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-[52px]">
          Принцип работы
        </h2>

        {/* --- DESKTOP VIEW (ВСЕ КАРТОЧКИ В РЯД) --- */}
        <div className="hidden lg:flex flex-nowrap justify-center gap-3">
          {principles.map((item, index) => (
            <div key={index} className="w-[448px] h-[387px] border border-[#FF4C00] bg-black flex flex-col items-start rounded-[8px]">
              <div className="w-[408px] h-[200px] mt-5 ml-5 overflow-hidden shrink-0 rounded-[8px]">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-[408px] ml-5 mt-6">
                  <p className="text-[24px] text-white leading-snug font-medium">
                    {item.text}
                  </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- MOBILE VIEW (СЛАЙДЕР С КНОПКАМИ) --- */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          {/* Активная карточка */}
          <div className="w-full h-auto border border-[#FF4C00] bg-black flex flex-col items-start rounded-[8px] pb-6">
            <div className="w-full px-5 mt-5">
               <div className="w-full aspect-video rounded-[8px] overflow-hidden">
                 <img
                   src={principles[principleIndex].img}
                   alt={principles[principleIndex].alt}
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>
            <div className="w-full px-5 mt-6">
               <p className="text-xl text-white leading-snug font-medium">
                 {principles[principleIndex].text}
               </p>
            </div>
          </div>

          {/* Кнопки управления (Ниже карточки) */}
          <div className="flex items-center gap-6">
             <button
               onClick={handlePrinciplePrev}
               className="w-12 h-12 rounded-full border border-[#00E4F0] text-[#00E4F0] flex items-center justify-center hover:bg-[#00E4F0] hover:text-black transition-all"
             >
               <ArrowIcon className="rotate-180" />
             </button>

             <span className="text-sm font-bold text-zinc-500 tracking-widest">
               {principleIndex + 1} / {principles.length}
             </span>

             <button
               onClick={handlePrincipleNext}
               className="w-12 h-12 rounded-full border border-[#00E4F0] text-[#00E4F0] flex items-center justify-center hover:bg-[#00E4F0] hover:text-black transition-all"
             >
               <ArrowIcon />
             </button>
          </div>
        </div>
      </section>

      {/* --- СХЕМА РАБОТЫ --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-12 lg:pt-[77px] pb-0">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-[52px]">
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
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-12 lg:pt-[82px] pb-0">
         <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-[52px]">
           Состав решения
         </h2>

         {/* --- DESKTOP VIEW --- */}
         <div className="hidden lg:flex flex-nowrap justify-center items-center gap-3">
            {compositions.map((item, index) => (
              <div key={index} className={`w-full ${item.desktopWidth} h-[492px] shrink-0`}>
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover border border-[#00E4F0] rounded-xl bg-zinc-900" />
              </div>
            ))}
         </div>

         {/* --- MOBILE VIEW (СЛАЙДЕР С КНОПКАМИ) --- */}
         <div className="lg:hidden flex flex-col items-center gap-4">
            {/* Активная картинка */}
            <div className="w-full aspect-[3/4] shrink-0">
               <img
                 src={compositions[compositionIndex].img}
                 alt={compositions[compositionIndex].alt}
                 className="w-full h-full object-cover border border-[#00E4F0] rounded-xl bg-zinc-900"
               />
            </div>

            {/* Кнопки управления (Ниже карточки) */}
            <div className="flex items-center gap-6">
               <button
                 onClick={handleCompositionPrev}
                 className="w-12 h-12 rounded-full border border-[#00E4F0] text-[#00E4F0] flex items-center justify-center hover:bg-[#00E4F0] hover:text-black transition-all"
               >
                 <ArrowIcon className="rotate-180" />
               </button>

               <span className="text-sm font-bold text-zinc-500 tracking-widest">
                 {compositionIndex + 1} / {compositions.length}
               </span>

               <button
                 onClick={handleCompositionNext}
                 className="w-12 h-12 rounded-full border border-[#00E4F0] text-[#00E4F0] flex items-center justify-center hover:bg-[#00E4F0] hover:text-black transition-all"
               >
                 <ArrowIcon />
               </button>
            </div>
         </div>
      </section>

      {/* --- ТЕХПОДДЕРЖКА --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-12 lg:pt-[77px] pb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-[52px]">
           Техподдержка 24/7
        </h2>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
           {/* Блок 1 */}
           <div className="w-full lg:w-[678px] h-auto lg:min-h-[146px] rounded-[8px] px-6 pt-[10px] pb-[18px] lg:px-8 flex flex-row justify-between items-start border border-[#FF4C00]/20
                           bg-[linear-gradient(45deg,_#FF4C00_0%,_transparent_60%)] relative">
              <div className="flex flex-col pr-10">
                 <h3 className="text-[22px] lg:text-[26px] font-bold text-white mb-4 lg:mb-[35px] leading-none mt-[4px]">Видим</h3>
                 <ul className="text-white text-base lg:text-[18px] font-medium leading-snug list-disc list-inside ml-2">
                    <li>Работоспособность устройств</li>
                    <li>Уровень сигнала на устройстве</li>
                    <li>Доступность канала передачи и узла связи</li>
                 </ul>
              </div>
              <img src="/images/router-mini.svg" alt="" className="w-[60px] lg:w-[81px] h-[40px] lg:h-[60px] object-contain absolute top-[19px] right-[21px]" />
           </div>

           {/* Блок 2 */}
           <div className="w-full lg:w-[678px] h-auto lg:min-h-[146px] rounded-[8px] px-6 pt-[10px] pb-[18px] lg:px-8 flex flex-row justify-between items-start border border-[#FF4C00]/20
                           bg-[linear-gradient(45deg,_#FF4C00_0%,_transparent_60%)] relative">
              <div className="flex flex-col pr-10">
                 <h3 className="text-[22px] lg:text-[26px] font-bold text-white mb-4 lg:mb-[35px] leading-none mt-[4px]">Делаем удаленно</h3>
                 <ul className="text-white text-base lg:text-[18px] font-medium leading-snug list-disc list-inside ml-2">
                    <li>Настройку устройств</li>
                    <li>Перезагрузку устройств</li>
                    <li>Обновление ПО</li>
                 </ul>
              </div>
              <img src="/images/rotate.svg" alt="" className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] object-contain absolute top-[19px] right-[21px]" />
           </div>
        </div>
      </section>

      {/* --- КОНТАКТЫ/ЗАЯВКА --- */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <h2 className="text-2xl lg:text-5xl font-bold text-white mb-8 lg:mb-[52px]">
           Наши специалисты на связи круглосуточно. Отвечают по телефону, в почте и Telegram
        </h2>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
           {/* Левый блок */}
           <div className="w-full lg:w-[448px] h-auto lg:h-[493px] rounded-[8px] p-6 lg:pt-[10px] lg:pl-[20px] lg:pr-8 lg:pb-8 flex flex-col justify-start items-start text-left shrink-0
                           bg-[linear-gradient(to_top_right,_#FF4C00,_#B38BCE,_#00E4F0)]">
              <p className="text-[24px] lg:text-[38px] font-bold leading-tight text-black">
                Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?
              </p>
           </div>

           {/* Правый блок */}
           <div className="w-full lg:w-[909px] h-auto lg:h-[493px] rounded-[8px] shrink-0 p-6 lg:p-8 flex flex-col
                           bg-gradient-to-tr from-transparent to-[#00E4F0] relative">
              <p className="text-[18px] lg:text-[20px] font-medium text-white mb-[20px] lg:mb-[30px]">
                Услуга доступна только для юридических лиц
              </p>
              <input type="text" placeholder="Ваше имя*" className="w-full bg-white/10 border border-[#00E4F0] rounded-[8px] px-4 py-3 text-white placeholder-white/70 focus:brightness-110 outline-none transition-colors" />
              <div className="h-[16px]"></div>
              <p className="text-white text-base">оставьте ваши контакты</p>
              <div className="h-[22px]"></div>
              <div className="flex flex-col gap-4 w-full">
                <input type="text" placeholder="Ваш телефон +7(___)___-__-__*" className="w-full bg-white/10 border border-[#00E4F0] rounded-[8px] px-4 py-3 text-white placeholder-white/70 focus:brightness-110 outline-none transition-colors" />
                <input type="text" placeholder="Ваш ник в tg" className="w-full bg-white/10 border border-[#00E4F0] rounded-[8px] px-4 py-3 text-white placeholder-white/70 focus:brightness-110 outline-none transition-colors" />
              </div>
              <div className="h-[17px]"></div>
              <div className="flex flex-row items-start gap-3">
                 <button className="shrink-0 mt-1 focus:outline-none" onClick={() => setIsAgreed(!isAgreed)}>
                    <img src={isAgreed ? "/images/button-2.svg" : "/images/button.svg"} alt="checkbox" className="w-[20px] h-[20px]" />
                 </button>
                 <p className="text-xs lg:text-sm text-white/80 leading-snug">
                    Я даю <span className="underline">согласие</span> на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями <span className="underline">Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</span>
                 </p>
              </div>
              <p className="text-[12px] text-white mt-[10px] ml-[32px]">
                * Поля, обязательные для заполнения
              </p>
              <div className="mt-[20px]">
                 <button className="bg-[linear-gradient(to_top_right,_#00E4F0,_#B38BCE,_#FF4C00)] text-black w-full lg:w-[335px] h-[52px] rounded-full font-bold uppercase hover:brightness-110 transition-all shadow-lg flex items-center justify-center">
                    Начать
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-zinc-900 bg-black pt-12 lg:pt-[105px] pb-12 lg:pb-20 mt-auto relative">
        <img src="/images/cube.svg" alt="" className="hidden lg:block absolute right-0 top-[195px] bottom-0 w-auto h-auto object-cover pointer-events-none z-0" />
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10">
           <div className="text-[20px] text-white mb-8 lg:mb-[60px]">
             дефолтный подвал
           </div>
           <div className="flex flex-col lg:flex-row items-start lg:items-stretch text-white gap-8 lg:gap-0">
             <div className="flex flex-col justify-between shrink-0 w-full lg:w-auto">
                 <div className="text-[12px] leading-relaxed">
                   <p>ООО «Ньюком Дистрибьюшн»,</p>
                   <p>ОГРН: 1207700420784,</p>
                   <p>Юридический адрес: 119017, Российская</p>
                   <p>Федерация, г. Москва,</p>
                   <p>ул. Большая Ордынка, д. 54 стр. 2</p>
                 </div>
                 <div className="mt-8 lg:mt-0">
                     <img src="/images/logo.svg" alt="MrNet Logo" className="w-32 lg:w-48 h-auto shrink-0" />
                     <div className="mt-[16px] text-[12px] font-bold uppercase tracking-wide leading-snug">
                       КАТЕГОРИЧЕСКИ НОВЫЙ<br />ИНТЕРНЕТ ДЛЯ БИЗНЕСА
                     </div>
                 </div>
             </div>
             <div className="hidden lg:block w-[95px] shrink-0"></div>
             <div className="flex flex-col justify-between shrink-0 w-full lg:w-auto">
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
                <div className="mt-8 lg:mt-0 text-[12px]">
                   ©2025 mrnet.ru Все права защищены
                </div>
             </div>
             <div className="hidden lg:block w-[120px] shrink-0"></div>
             <div className="flex flex-col gap-1 underline text-[12px] w-full lg:w-auto">
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