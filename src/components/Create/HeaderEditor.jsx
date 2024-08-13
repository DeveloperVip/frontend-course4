import {
    FaBold,
    FaFont,
  
    FaItalic,
    FaLightbulb,
  
    FaStrikethrough,
    FaSubscript,
    FaSuperscript,
    FaUnderline,
  } from "react-icons/fa6";
  import { LuSigma } from "react-icons/lu";
  import { AiOutlineFunction } from "react-icons/ai";
  import EquationEditor from "./EquationEditor.jsx";
import { useState } from "react";
const HeaderEditor = ({lesson}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    console.log(isOpen);
    
    setIsOpen(true); // Đóng modal
  };
  return (
    <>
    {isOpen?<EquationEditor closeEdit = {setIsOpen}/>:""}
    <header
            id="question-editor-main-header"
            className="flex items-center bg-light-2 col-span-full h-12"
            data-testid="editor-toolbar"
            style= {{display:`${ lesson ? "none": ""}`}}
          >
            <section
              className="flex items-center gap-x-2 relative pl-4"
              data-testid="font-toolbar"
            >
              {/* Font Color Button */}
              <div className="v-popper v-popper--theme-menu v-popper--theme-dropdown">
                <button
                  className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-purple-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                  aria-label="Font Color"
                  type="button"
                  data-testid="font-color-button"
                  style={{ borderBottom: "2px solid" }}
                >
                  <FaFont
                    className="flex items-center fas fa-font text-black-3"
                    style={{ fontSize: 12 }}
                  />
                  <span className="title" />
                </button>
              </div>
              {/* Bold Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Bold"
                type="button"
                data-testid="font-bold-button"
              >
                <FaBold
                  className="flex items-center fas fa-bold text-black-3"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Italic Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Italic"
                type="button"
                data-testid="font-italic-button"
              >
                <FaItalic
                  className="flex items-center fas fa-italic text-black-3"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Underline Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Underline"
                type="button"
                data-testid="font-underline-button"
              >
                <FaUnderline
                  className="flex items-center fas fa-underline text-black-3"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Strike-through Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Strikethrough"
                type="button"
                data-testid="font-strike-button"
              >
                <FaStrikethrough
                  className="flex items-center fas fa-strikethrough"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Superscript Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Superscript"
                type="button"
                data-testid="font-superscript-button"
              >
                <FaSuperscript
                  className="flex items-center fas fa-superscript text-black-3"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Subscript Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Subscript"
                type="button"
                data-testid="font-subscript-button"
              >
                <FaSubscript
                  className="flex items-center fas fa-subscript text-black-3"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Symbol Button */}
              <button
                className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max v-popper--has-tooltip"
                aria-label="Symbol"
                type="button"
                data-testid="font-symbol-button"
              >
                <LuSigma
                  className="flex items-center fas fa-sigma text-black-3"
                  style={{ fontSize: 12 }}
                />
                <span className="title" />
              </button>
              {/* Divider */}
              <div className="h-8 border rounded border-black-10%" />
            </section>
            {/* Insert Equation Button */}
            <button
              className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max mx-2"
              aria-label="Insert equation"
              type="button"
              data-testid="generic-button"
              onClick={handleOpen} 
            >
              <AiOutlineFunction
                className="flex items-center fas fa-function text-black-3 mr-2"
                style={{ fontSize: 12 }}
              />
              <span className="title text-black-3" title="Insert equation">
                Thêm phương trình
              </span>
            </button>
            {/* Add Answer Explanation Button */}
            <button
              className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max  mr-4"
              aria-label="Add answer explanation"
              type="button"
              data-testid="generic-button"
            >
              <FaLightbulb
                className="flex items-center far fa-lightbulb mr-2"
                style={{ fontSize: 12 }}
              />
              <span className="title" title="Add answer explanation">
                Thêm câu trả lời giải thích
              </span>
            </button>
          </header>
    </>
  )
}

export default HeaderEditor