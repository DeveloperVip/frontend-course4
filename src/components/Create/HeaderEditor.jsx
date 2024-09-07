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
import { CKEditor } from "ckeditor4-react"; // Ensure correct CKEditor version is used
import { toast } from "react-toastify";

const HeaderEditor = ({ lesson, setEquation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleEquationSubmit = (latex) => {
    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
    setEquation(latex); // Update the equation in the parent component
  };

  return (
    <>
      {isOpen ? (
        <EquationEditor
          closeEdit={setIsOpen}
          onSubmitEquation={handleEquationSubmit}
        />
      ) : (
        ""
      )}
      <header
        id="question-editor-main-header"
        className="flex items-center bg-light-2 col-span-full h-12"
        data-testid="editor-toolbar"
        style={{ display: `${lesson ? "none" : ""}` }}
      >
        {/* CKEditor Section */}
        <section className="flex items-center gap-x-2 relative pl-4 w-full">
          <div className="w-full">
            <CKEditor
              initData="<p>Nội dung của bạn tại đây...</p>" // Default content
              config={{
                toolbar: [
                  {
                    name: "basicstyles",
                    items: [
                      "Bold",
                      "Italic",
                      "Underline",
                      "Strike",
                      "Subscript",
                      "Superscript",
                    ],
                  },
                  {
                    name: "insert",
                    items: [
                      "Image",
                      "Table",
                      "HorizontalRule",
                      "SpecialChar",
                      "MathJax",
                    ],
                  },
                  { name: "styles", items: ["Format", "Font", "FontSize"] },
                  { name: "colors", items: ["TextColor", "BGColor"] },
                  { name: "tools", items: ["Maximize"] },
                ],
                extraPlugins: "mathjax",
                mathJaxLib:
                  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML",
              }}
              onChange={(event) => {
                const editorData = event.editor.getData();
                // console.log(editorData);
              }}
            />
          </div>
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
          className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 text-black-2 hover:bg-lilac-faded hover:text-lilac rounded relative min-w-max mr-4"
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
  );
};

export default HeaderEditor;
