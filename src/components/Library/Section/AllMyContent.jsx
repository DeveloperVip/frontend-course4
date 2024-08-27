import React from 'react';

const QuizCard = ({ id, title, imageUrl, label, items, category, status, author, timeAgo, isDraft }) => {
  return (
    <div className="flex items-center w-full relative">
      <a href={`/admin/${status === 'quiz' ? 'quiz' : 'presentation'}/${id}`} className="cursor-pointer flex-1">
        <button type="button" className="w-full">
          <div className="quiz-card cursor-pointer relative flex flex-col items-start min-w-82 md:h-auto md:min-w-initial bg-light-3 p-2 rounded hover:bg-light-2 md:border md:border-dark-10%">
            <div className="flex flex-row w-full">
              <div className="flex flex-col items-center">
                <div className="h-18 w-18 md:w-26 md:h-26 relative rounded-sm overflow-hidden bg-light">
                  <img src={imageUrl} className="lazy-img rounded-inherit object-contain w-full h-full" alt="Quiz image" loading="lazy" />
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex flex-col w-full ml-3 content-container relative md:gap-1.5">
                  <div className="flex items-center font-semibold text-dark-4 gap-2 text-xxs">
                    <div className="px-2 flex items-center uppercase rounded-full border border-solid border-ds-dark-500-20">
                      <div className="ml-1 text-xxs text-ds-dark-200 font-semibold">{label}</div>
                    </div>
                    <div className="flex h-4 gap-2">
                      {isDraft && (
                        <div className="lozenge items-center inline-flex text-tn font-semibold rounded-full px-1.5 uppercase bg-red-faded text-red">
                          Nháp
                        </div>
                      )}
                    </div>
                    <div className="absolute top-2 right-2">
                      <button type="button" aria-haspopup="listbox" aria-expanded="false" className="w-full flex rounded font-semibold items-center whitespace-nowrap text-sm 0 cursor-pointer w-6 h-6 justify-center hover:bg-dark-5%">
                        <i className="flex items-center fas fa-ellipsis-v" aria-hidden="true" style={{ fontSize: '12px' }}></i>
                      </button>
                    </div>
                  </div>
                  <div className="name font-bold flex flex-row justify-between text-base">
                    <div className="w-full">
                      <div className="w-full flex justify-between">
                        <div className="name overflow-hidden md:h-6 text-left">{title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-dark-3 flex flex-row justify-between items-center text-xs">
                    <div className="flex flex-row items-center">
                      <div className="mr-3.5">
                        <i className="flex items-center far fa-list mr-0.5" style={{ fontSize: '12px' }}></i> {items}
                      </div>
                      <div className="mr-3.5">
                        <i className="flex items-center far fa-graduation-cap mr-0.5" style={{ fontSize: '12px' }}></i> {category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center pr-2 text-tn">
                      <img src={author.imageUrl} className="w-6 h-6 mr-2 rounded-full" alt="User" />
                      <div className="flex items-center font-normal text-dark-4">
                        <a href={`/profile/${author.id}`} className="mr-2 hover:underline max-w-20 userName">{author.name}</a>
                        <div className="mr-2 h-0.5 w-0.5 flex justify-center items-center rounded-full bg-dark-4 max-w-20"></div>
                        <div className="time">{timeAgo} trước</div>
                      </div>
                    </div>
                    <div className="flex text-dark-2 gap-2">
                      <button className="transition-colors duration-200 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 bg-dark-5% active:bg-dark-10% text-dark-2 hover:text-dark-3 rounded other relative min-w-max" aria-label={isDraft ? 'Tiếp tục sửa' : 'Chia sẻ'}>
                        <span className="title" title={isDraft ? 'Continue editing' : 'Share'}>{isDraft ? 'Tiếp tục sửa' : 'Chia sẻ'}</span>
                        <i className="flex items-center far fa-share ml-2" style={{ fontSize: '11px' }}></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
};

const AllMyContent = () => {
  const quizData = [
    {
      id: '66c06e3b7db98c8cf29773a4',
      title: 'lesson 1',
      imageUrl: 'https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.webp?w=200&h=200',
      label: 'lesson',
      items: '1 Slide',
      category: 'Đại học',
      status: 'lesson',
      author: {
        id: '669faed55135824a6a3cab69',
        name: 'adasd wfwfa',
        imageUrl: 'https://cf.quizizz.com/avatars/images/eyes4-nose7-mouth6-9A4292.png?w=90&h=90'
      },
      timeAgo: '2 Tiếng',
      isDraft: false
    },
    // Add more quiz data as needed
  ];

  return (
    <div className="flex flex-col pb-12">
      {quizData.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </div>
  );
};

export default AllMyContent;
