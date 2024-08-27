import React, { useState } from "react";

const ReportSection = () => {
  // State to track which button is visible
  const [visibleButton, setVisibleButton] = useState(null);

  // Function to toggle button visibility
  const toggleButtonVisibility = (buttonId) => {
    setVisibleButton((prevState) => (prevState === buttonId ? null : buttonId));
  };

  return (
    <div className="reports-container rounded col-span-full">
      <div>
        <table className="table-fixed">
          <thead>
            <tr className="bg-light-2">
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-1/12">
                <div className="flex gap-2 items-center justify-start">
                  <div className="relative inline-flex checkbox md w-5 h-5">
                    <input
                      id="delete-all"
                      className="checkbox__input absolute mr-2 w-px h-px overflow-hidden cursor-pointer"
                      type="checkbox"
                    />
                    <label
                      className="relative flex items-center select-none checkbox__label lilac cursor-pointer"
                      htmlFor="delete-all"
                    >
                      <span />
                    </label>
                  </div>
                  <div>Loại</div>
                </div>
              </th>
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-4/12">
                Tên{" "}
              </th>
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-1/12">
                Người tham gia
              </th>
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-1/12">
                Chính xác{" "}
              </th>
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-2/12">
                Tổng câu đúng
              </th>
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-2/12">
                Tổng câu hỏi
              </th>
              <th className="partition-border font-bold text-xs text-dark-4 px-3 py-2 w-2/12">
                Thời gian làm bài{" "}
              </th>
            </tr>
          </thead>
          <tbody className="report-body bg-white">
            <tr className="partition-border cursor-pointer h-16 bg-white hover:bg-slate-200">
              <td>
                <div className="flex items-center gap-2 px-3">
                  <div className="relative inline-flex checkbox md w-5 h-5">
                    <input
                      id="66c4260fc6e0fb24b62b66f3"
                      className="checkbox__input absolute mr-2 w-px h-px overflow-hidden cursor-pointer"
                      type="checkbox"
                    />
                    <label
                      className="relative flex items-center select-none checkbox__label lilac cursor-pointer"
                      htmlFor="66c4260fc6e0fb24b62b66f3"
                    >
                      <span />
                    </label>
                  </div>
                  <div className="w-full">
                    <div
                      className="game-type-label flex items-center border-l-4 rounded max-h-min text-tn max-w-25 px-2 py-1 overflow-ellipsis whitespace-nowrap pres_tp"
                      title="Live"
                    >
                      <i
                        className="flex items-center fas fa-presentation mr-1"
                        style={{ fontSize: 12 }}
                      />{" "}
                      &nbsp;
                      <span>Live</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="w-4/12">
                <div className="flex flex-col ml-3 py-2">
                  <div className="flex flex-row">
                    <span className="text-xs text-dark-1 font-semibold text-ellipsis">
                      thành ngữ tục ngữ
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-xxs text-dark-3">Aug 20 - 21</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center text-xs text-dark-1 font-semibold px-3">
                  <span>1</span>
                </div>
              </td>
              <td>
                <div className="flex pl-5 pr-3">
                  <div className="ring-chart-container flex justify-center items-center rounded-full">
                    <figure className="ring-chart relative h-6 w-6 text-center">
                      {/* Inner Circle */}
                      <figcaption className="rounded-full w-4 h-4 border-3 border-gray-200 box-content"></figcaption>

                      {/* Percentage Label (Hidden by Default) */}
                      <div className="fig-label absolute inset-0 flex justify-center items-center hidden">
                        <div className="text-sm font-semibold">26%</div>
                      </div>

                      {/* Outer Ring (Progress Indicator) */}
                      <svg
                        className="progress-svg absolute inset-0"
                        width="24"
                        height="24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10.5"
                          fill="transparent"
                          stroke="#EC0B43"
                          strokeWidth="3"
                          strokeDasharray="65px"
                          strokeDashoffset={`${65 - (26 * 65) / 100}px`} // For 26% progress
                          transform="rotate(-90, 12, 12)"
                        />
                      </svg>
                    </figure>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-semibold">
                    26%{" "}
                  </span>
                </div>
              </td>
              <td />
              <td />
              <td>
                <div className="flex justify-end px-3">
                  {/* {visibleButton !== 'button1' && (
                    <button onClick={() => toggleButtonVisibility('button1')} className="btn-primary">
                      Show Button 1
                    </button>
                  )}
                  {visibleButton === 'button1' && (
                    <button onClick={() => toggleButtonVisibility(null)} className="btn-primary">
                      Button 1 Clicked
                    </button>
                  )}
                  {visibleButton !== 'button2' && (
                    <button onClick={() => toggleButtonVisibility('button2')} className="btn-secondary">
                      Show Button 2
                    </button>
                  )}
                  {visibleButton === 'button2' && (
                    <button onClick={() => toggleButtonVisibility(null)} className="btn-secondary">
                      Button 2 Clicked
                    </button>
                  )} */}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportSection;
