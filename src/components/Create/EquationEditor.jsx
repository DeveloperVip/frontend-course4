import { useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { StaticMathField, EditableMathField, addStyles } from "react-mathquill";

addStyles(); // Add MathQuill styles

const symbols = [
  { label: "a^2", math: "a^2" },
  { label: "a^x", math: "a^x" },
  { label: "a_x", math: "a_x" },
  { label: "\\alpha", math: "\\alpha" },
  { label: "\\beta", math: "\\beta" },
  { label: "\\gamma", math: "\\gamma" },
  { label: "\\subset", math: "\\subset" },
  { label: "\\subseteq", math: "\\subseteq" },
  { label: "\\not\\subset", math: "\\not\\subset" },
];

const EquationEditor = ({ closeEdit, onSubmitEquation }) => {
  const [latex, setLatex] = useState("");
  const mathFieldRef = useRef(null);

  const handleSymbolClick = (symbolMath) => {
    setLatex(symbolMath);
    if (mathFieldRef.current) {
      mathFieldRef.current.write(symbolMath);
    }
  };

  const handleMathChange = (mathField) => {
    setLatex(mathField.latex());
  };

  const handleClose = () => {
    closeEdit(false);
  };

  const handleSubmit = () => {
    onSubmitEquation(latex);
    closeEdit(false);
  };

  return (
    <div id="modal-layer-2" className="z-50 absolute" style={{display: "block"}}>
      <div className="fixed top-0 z-50 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75" data-testid="math-editor-modal">
        <div className="flex bg-white flex-col gap-6 relative py-6 px-4 md:px-6 w-full md:w-1/2 rounded-lg">
          <div data-testid="modal-close-button" className="absolute top-0 right-0 m-2">
            <button
              className="transition-colors duration-200 ease-in-out flex flex items-center justify-center w-8 h-8 bg-transparent text-dark-4 hover:bg-dark-10% active:bg-dark-5% rounded transparent-floating-dark relative min-w-max font-normal font-normal"
              aria-label
              type="button"
              translate="no"
              data-testid="math-editor-modal-close-button"
              onClick={handleClose} 
            >
              <IoMdCloseCircle className="flex items-center fa fa-times" style={{ fontSize: "26px" }} />
              <span data-v-1c8df6a0 className="title" title />
            </button>
          </div>
          <div>
            <section className="flex flex-col justify-start mb-6">
              <h2 className="mb-1 text-xs text-gray-600"><span>Preview</span></h2>
              <div className="flex items-center w-full py-8 pl-3 pr-2 border border-solid rounded-md border-gray-400">
                <EditableMathField
                  ref={mathFieldRef}
                  latex={latex}
                  onChange={handleMathChange}
                  config={{
                    spaceBehavesLikeTab: true,
                    supSubsRequireOperand: true,
                  }}
                  style={{ border: "none", width: "100%" }}
                />
              </div>
            </section>
            <section className="flex flex-col">
              <section className="flex flex-row h-64 my-2 overflow-y-auto">
                <div className="flex flex-row w-full h-full p-3 overflow-auto bg-gray-100 rounded-2xl">
                  {symbols.map((symbol) => (
                    <button
                      key={symbol.math}
                      className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-gray-200 active:bg-gray-300 text-gray-700 hover:text-gray-800 rounded"
                      aria-label={symbol.label}
                      type="button"
                      onClick={() => handleSymbolClick(symbol.math)}
                    >
                      <StaticMathField>{symbol.math}</StaticMathField>
                    </button>
                  ))}
                </div>
              </section>
            </section>
            <section className="mt-4"></section>
          </div>
          <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquationEditor;
