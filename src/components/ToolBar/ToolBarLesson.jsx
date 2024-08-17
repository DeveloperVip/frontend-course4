// import React from 'react';

const Toolbar = () => {
  return (
    <div className="flex items-center w-full h-12 px-2 slide-editor-toolbar md:relative shrink-0 bg-purple-dark text-light-3">
      <div className="field relative question-types-dropdown w-55 ml-auto v-popper--has-tooltip" tabIndex="80">
        <div id="11" className="chromium-scroll-fix-sr-only label sr-only">
          Question types (with selected value) Multiple Choice
        </div>
        <div className="dropdown flex relative rounded">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-labelledby="11 12"
            aria-expanded="false"
            className="w-full flex rounded font-semibold items-center whitespace-nowrap py-2 pl-2 pr-1 text-xs h-8 cursor-pointer bg-dark-50% text-light-3 hover:bg-dark-60% active:bg-dark-50%"
          >
            <span className="question-type-icon relative flex items-center justify-center p-1 bg-brand-b text-light rounded-sm mr-2" width="4">
              <i className="flex items-center far fa-check-square" style={{ fontSize: '10px' }}></i>
            </span>
            <span className="">Multiple Choice</span>
            <div className="w-4 h-4 items-center justify-center flex relative ml-auto">
              <i className="flex items-center fas fa-caret-down" aria-hidden="true" style={{ fontSize: '11px' }}></i>
            </div>
          </button>
        </div>
      </div>
      <div className="placeholder mx-2 border-l border-light-10% h-8"></div>
      <button
        className="transition-colors duration-200 ease-in-out flex flex items-center justify-center w-8 h-8 opacity-25 bg-light-20% text-light-3 rounded transparent relative min-w-max flex-shrink-0 ml-2"
        aria-label="Scroll Left"
        type="button"
        translate="no"
        data-testid="scroll-left-button"
        name="Left Scroll"
        iconsize="16"
        disabled
      >
        <i className="flex items-center fas fa-caret-right fa-rotate-180" style={{ fontSize: '12px' }}></i>
      </button>
      <div className="relative flex-1 h-full">
        <div className="absolute top-0 left-0 w-full h-screen overflow-x-scroll pointer-events-none hover:pointer-events-auto">
          <div className="absolute top-0 left-0 flex items-center h-12 transition-all duration-200 ease-in-out pointer-events-auto">
            <div className="vertical-divider border border-light-10% mx-2"></div>
            <div className="flex items-center h-12">
              <div className="relative">
                <button
                  type="button"
                  className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% relative v-popper--has-tooltip"
                  data-testid="text-color-button"
                  aria-label="Text color"
                >
                  <div className="toolbar w-6 h-6 flex items-center justify-center" style={{ boxShadow: '0px -2px 0px inset' }}>
                    <i className="flex items-center fas fa-font" style={{ fontSize: '12px' }}></i>
                  </div>
                </button>
              </div>
              <div className="vertical-divider border border-light-10% rounded-2m ml-2"></div>
              <button
                type="button"
                className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                data-testid="text-bold-button"
                aria-label="Bold"
              >
                <div className="toolbar w-6 h-6 flex items-center justify-center">
                  <i className="flex items-center fas fa-bold" style={{ fontSize: '12px' }}></i>
                </div>
              </button>
              <button
                type="button"
                className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                data-testid="text-italic-button"
                aria-label="Italic"
              >
                <div className="toolbar w-6 h-6 flex items-center justify-center">
                  <i className="flex items-center fas fa-italic" style={{ fontSize: '12px' }}></i>
                </div>
              </button>
              <button
                type="button"
                className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                data-testid="text-underline-button"
                aria-label="Underline"
              >
                <div className="toolbar w-6 h-6 flex items-center justify-center">
                  <i className="flex items-center fas fa-underline" style={{ fontSize: '12px' }}></i>
                </div>
              </button>
              <button
                type="button"
                className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                data-testid="text-strikethrough-button"
                aria-label="Strikethrough"
              >
                <div className="toolbar w-6 h-6 flex items-center justify-center">
                  <i className="flex items-center fas fa-strikethrough" style={{ fontSize: '12px' }}></i>
                </div>
              </button>
              <button
                type="button"
                className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                data-testid="text-superscript-button"
                aria-label="Superscript"
              >
                <div className="toolbar w-6 h-6 flex items-center justify-center">
                  <i className="flex items-center fas fa-superscript" style={{ fontSize: '12px' }}></i>
                </div>
              </button>
              <button
                type="button"
                className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                data-testid="text-subscript-button"
              >
                <div className="toolbar w-6 h-6 flex items-center justify-center">
                  <i className="flex items-center fas fa-subscript" style={{ fontSize: '12px' }}></i>
                </div>
              </button>
              <div className="relative">
                <button
                  type="button"
                  className="toolbar-button w-8 h-8 rounded text-light-3 flex items-center justify-center focus:outline-none focus:ring-lilac focus:ring-2 hover:bg-light-5% ml-0.5 v-popper--has-tooltip"
                  data-testid="sigma-icon-button"
                  aria-label="Symbols"
                >
                  <div className="toolbar w-6 h-6 flex items-center justify-center">
                    <i className="flex items-center fas fa-sigma" style={{ fontSize: '12px' }}></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="field relative w-20 ml-2" style={{ display: 'none' }}>
              <div id="2" className="chromium-scroll-fix-sr-only label sr-only">
                Elements Order (no selected value)
              </div>
              <div className="dropdown flex relative rounded">
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-labelledby="2 3"
                  aria-expanded="false"
                  className="w-full flex rounded font-semibold items-center whitespace-nowrap py-2 pl-2 pr-1 text-xs h-8 cursor-pointer text-light-3 border border-light-10% hover:bg-light-5% v-popper--has-tooltip"
                >
                  <span className="">Order</span>
                  <div className="w-4 h-4 items-center justify-center flex relative ml-auto">
                    <i className="flex items-center fas fa-caret-down" aria-hidden="true" style={{ fontSize: '11px' }}></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="vertical-divider border border-light-10% ml-2"></div>
          </div>
        </div>
      </div>
      <button
        className="transition-colors duration-200 ease-in-out flex flex items-center justify-center w-8 h-8 opacity-25 bg-light-20% text-light-3 rounded transparent relative min-w-max flex-shrink-0 ml-2"
        aria-label="Scroll Right"
        type="button"
        translate="no"
        data-testid="scroll-right-button"
        name="Right Scroll"
        iconsize="16"
        disabled
      >
        <i className="flex items-center fas fa-caret-right" style={{ fontSize: '12px' }}></i>
      </button>
    </div>
  );
};

export default Toolbar;
