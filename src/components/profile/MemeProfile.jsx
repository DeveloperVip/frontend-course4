// import React from 'react'

const MemeProfile = () => {
  return (
    <div className="w-full h-full col-span-full">
            <div className="memesets-layout desktop memeset-display h-full col-span-full p-4 md:p-0">
              <div className="px-5 flex flex-col items-center w-full col-span-full">
                <div className="w-32 h-32 md:w-60 md:h-60 my-2 v-image">
                  <img
                    src="https://cf.quizizz.com/image/emptystate-meme.png"
                    alt="Image"
                    className="lazy-img rounded-inherit w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-sm md:text-md text-dark-2 font-semibold">
                Thêm một chút độc đáo
                
                </div>
                <div className="my-2 text-xs md:text-sm text-center px-4">
                Tạo một bộ meme tùy chỉnh cho lớp của bạn, họ sẽ thích nó!
                </div>
                <div className="flex my-4 md:my-6">
                  <button
                    className="transition-colors duration-200 ease-in-out flex items-center justify-center px-6 py-2 text-lg font-semibold h-9 bg-purple-400 text-light-3 hover:bg-purple-400-light active:bg-purple-400-dark rounded-lg min-w-max mx-2"
                    aria-label="Create memes"
                    type="button"
                  >
                    <span
                      className="title text-base font-normal"
                      title="Create memes"
                    >
                      Tạo memes
                    </span>
                  </button>
                </div>
                <div className="w-full flex justify-center" />
              </div>
            </div>
          </div>
  )
}

export default MemeProfile