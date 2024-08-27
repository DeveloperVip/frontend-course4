import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { FaBoltLightning, FaCheck, FaCoins, FaXmark } from 'react-icons/fa6';

// Reusable components for parts of the card
const Badge = ({ iconClass:Icon, text }) => (
  <div className="lozenge items-center inline-flex text-xs font-semibold py-0.5 rounded px-1.5 bg-dark-5% text-xs font-light text-dark-2 mr-2 px-3 h-6">
    <Icon className={`flex items-center mr-1 leading-none`} style={{ fontSize: '11px' }}></Icon>
    <span>{text}</span>
  </div>
);

const Stat = ({ label, value }) => (
  <>
  <span className="pl-4 pr-2 font-semibold text-sm">{value}</span>
  <span className='flex justify-center items-center text-xs text-dark-3 border-r border-dark-6 pl-1 pr-4 h-6'>{label}</span>
  </>
);

const Option = ({ option, text, isCorrect }) => (
  <div className="flex py-2">
    <div className="rounded-full bg-dark-5% text-dark-2 text-xs font-semibold border border-dark-6 h-6 w-6 flex justify-center mr-2 items-center flex-shrink-0">{option}</div>
    <div>
      <div className="font-semibold leading-6 text-sm">{text}</div>
      <div className="w-60 h-4 rounded-sm flex justify-between text-xs px-2 text-dark-3" 
        style={{ background: isCorrect ? 'linear-gradient(90deg, rgb(217, 247, 237) 0%, rgba(9, 9, 9, 0.05) 0%)' : 'linear-gradient(90deg, rgb(252, 219, 227) 0%, rgba(9, 9, 9, 0.05) 0%)' }}>
        <span>{
            isCorrect ? <FaCheck className={`flex items-center text-green-500`} style={{ fontSize: '11px' }}></FaCheck>:<FaXmark className={`flex items-center text-red-600`} style={{ fontSize: '11px' }}></FaXmark>
            }</span>
        <span>0 Đã trả lời</span>
      </div>
    </div>
  </div>
);

const CheckPointItem = () => {
  return (
    <div className="bg-light border border-dark-6 rounded-lg hover:shadow-md cursor-pointer px-6 py-4 m-6 mt-6">
      <div className="flex flex-wrap justify-between align-center border-b border-dark-6">
        <div className="flex items-center pb-2">
          <Badge iconClass={FaCheckSquare} text="Multiple Choice" />
          <Badge iconClass={FaCoins} text="1 point" />
        </div>

        <div className="flex items-center pb-2 justify-center">
          <div className="ring-chart-container flex justify-center items-center rounded-full">
            <figure className="ring-chart" style={{ height: '24px', width: '24px', position: 'relative', textAlign: 'center' }}>
              <figcaption className="rounded-full" style={{ width: '18px', height: '18px', border: '3px solid rgb(229, 229, 229)', boxSizing: 'content-box' }}></figcaption>
              <div className="fig-label absolute top-1/2 -translate-y-1/2 text-base w-full hidden">
                <div className="fig-label-strong text-sm">0%</div>
              </div>
              <svg className="progress-svg absolute top-0 left-0" width="24" height="24">
                <circle cx="12" cy="12" r="10.5" transform="rotate(-90, 12, 12)" fill="transparent" stroke="#EC0B43" strokeWidth="3" strokeDasharray="65px" strokeDashoffset="65px"></circle>
              </svg>
            </figure>
          </div>
          <Stat label="Chính xác" value="0%" />
          <Stat label="Tổng thời gian" value="0s" />
        </div>

        <div className="max-w-[272px] flex justify-end pb-4">
          <button className="transition-colors duration-200 ease-in-out flex items-center justify-center text-xs font-semibold h-8 bg-purple-100 text-purple rounded pl-1 pr-3 py-1 mr-2">
            Edit question
            <span className="inline-flex align-center justify-center rounded border border-solid border-super-light w-4 h-4 bg-yellow-100 text-yellow-500 ml-2 items-center">
              <FaBoltLightning className="fas fa-bolt-lightning" style={{ fontSize: '9px' }}></FaBoltLightning>
            </span>
          </button>
          <button className="transition-colors duration-200 ease-in-out flex items-center justify-center text-xs font-semibold h-8 bg-purple-100 text-purple rounded pl-1 pr-3 py-1">
            Evaluate
            <span className="inline-flex align-center justify-center rounded border border-solid border-super-light w-4 h-4 bg-yellow-100 text-yellow-500 ml-2 items-center">
              <FaBoltLightning className="fas fa-bolt-lightning" style={{ fontSize: '9px' }}></FaBoltLightning>
            </span>
          </button>
        </div>
      </div>

      <div>
        <div className="text-xs pt-4 pb-1 text-dark-4 font-semibold">Câu hỏi</div>
        <div className="question-content-card flex justify-start items-center">
          <p className="flex items-start text-dark-2 text-sm font-semibold">
            <span className="pr-1">2.</span> Thua keo này, bày keo ...
          </p>
        </div>

        <div className='flex justify-between'>
        <div className='w-full'><div className="text-xs pb-2 text-dark-4 font-semibold pt-6">Lựa chọn</div>
        <Option option="A" text="tùy" isCorrect={false} />
        <Option option="B" text="hồ" isCorrect={false} />
        <Option option="C" text="khác" isCorrect={true} />
        <Option option="D" text="khổ" isCorrect={false} />
        </div>

        <div className="border-l border-dark-6 pl-6 mt-6 ml-4">
          <div className="w-60">
            <div className="flex items-center text-xs text-dark-3 pb-1">
              <span>Đúng</span><span className="font-semibold ml-auto">0 Học sinh</span>
            </div>
            <div className="h-5 rounded-sm flex justify-evenly mb-4" style={{ background: 'rgba(9, 9, 9, 0.05)' }}>
              <span className="h-5 w-15 border-x border-dashed border-dark-10%"></span>
            </div>
          </div>

          <div className="w-60">
            <div className="flex items-center text-xs text-dark-3 pb-1">
              <span>Sai</span><span className="font-semibold ml-auto">0 Học sinh</span>
            </div>
            <div className="h-5 rounded-sm flex justify-evenly mb-0" style={{ background: 'rgba(9, 9, 9, 0.05)' }}>
              <span className="h-5 w-15 border-x border-dashed border-dark-10%"></span>
            </div>
          </div>
        </div></div>
      </div>
    </div>
  );
}

export default CheckPointItem;
