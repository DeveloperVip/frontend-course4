import React, { useState, useEffect, useContext } from "react";
import { FaStream, FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import SlidePreview from "./SlidePreview.jsx";
import BottomToolbar from "./BottomToolbar.jsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { SelectedSlideContext } from "../../../contexts/lesson/selectedSlide.jsx";

const Sidebar = ({ slides, onDuplicate, onDelete, onMove, handleAddSlide }) => {
  const [slider, setSlider] = useState(slides);
  const { activateSelectedSlide } = useContext(SelectedSlideContext);
  // console.log("🚀 ~ selectedSlide:", selectedSlide)
  // Đồng bộ slider với slides khi slides thay đổi
  useEffect(() => {
    // console.log("vào đây");
    setSlider(slides);
  }, [slides]);

  const handleOnDragEnd = (param) => {
    const { source, destination } = param;
    // console.log(
    //   "🚀 ~ handleOnDragEnd ~ source, destination:",
    //   source,
    //   destination
    // );

    // Kiểm tra xem destination có tồn tại hay không
    if (!destination) return;

    const _arr = [...slider];
    const _item = _arr.splice(source.index, 1)[0];
    _arr.splice(destination.index, 0, _item);

    setSlider(_arr);
    onMove(_arr); // Gọi hàm onMove để cập nhật danh sách slide sau khi kéo thả
  };

  return (
    <div className="h-full">
      <aside className="slide-editor-sidebar h-full text-light-3 bg-dark-3 flex relative">
        <ul className="sidebar-menu-tabs bg-black text-light-50% pt-7">
          <li className="slide-sidebar-menu-tab flex justify-end items-center my-2 ml-2.5">
            <button
              className="flex flex-col items-center justify-center pr-2 text-xs rounded-l transition-colors w-15 h-12 bg-light-10% text-light-3"
              disabled
            >
              <FaStream className="text-lg" />
              <p>Slides</p>
            </button>
          </li>
          <li className="flex justify-center">
            <div className="h-px w-3/5 bg-light-33%" />
          </li>
        </ul>

        <div className="sidebar-content w-64 bg-dark-2 h-screen" tabIndex={0}>
          <div
            id="slideSidebarListContainer"
            className="overflow-x-auto slide-sidebar-content-list-container h-full max-h-full"
          >
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="slides" type="group">
                {(provided, snapshot) => {
                  // Log the droppable provided and snapshot
                  return (
                    <div
                      className="slide-sidebar-content-list"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {slider.map((slide, index) => {
                        // console.log("🚀 ~ {slider.map ~ slide:", slide);

                        return (
                          <Draggable
                            key={slide.id}
                            draggableId={slide.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="slide-preview flex pr-2 cursor-pointer mt-1"
                                ref={provided.innerRef}
                                onClick={() => {
                                  activateSelectedSlide(slide.id);
                                }}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="p-1 pl-1 rounded-r-lg flex bg-light-20% text-lilac-faded">
                                  <div className="flex flex-col justify-evenly items-center w-6">
                                    <div className="text-sm font-bold">
                                      {index + 1}
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => onDuplicate(slide.id)}
                                      data-testid={`duplicate-slide-${index}`}
                                      className="w-6 h-6 inline-flex justify-center items-center hover:bg-lilac-10% rounded-sm v-popper--has-tooltip p-0"
                                    >
                                      <FaRegCopy
                                        className="flex items-center far fa-copy"
                                        style={{ fontSize: 12 }}
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => onDelete(slide.id)}
                                      className="w-6 h-6 inline-flex justify-center items-center hover:bg-lilac-10% rounded-sm v-popper--has-tooltip p-0"
                                      data-testid={`delete-slide-${index}`}
                                    >
                                      <FaRegTrashAlt
                                        className="flex items-center far fa-trash-alt"
                                        style={{ fontSize: 12 }}
                                      />
                                    </button>
                                  </div>
                                  <div className="ml-1">
                                    <button
                                      type="button"
                                      className="focus:ring-2 ring-lilac-light relative transition-transform duration-500 rounded overflow-hidden border-2 p-0"
                                    >
                                      <SlidePreview slide={slide} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </DragDropContext>
          </div>
          <BottomToolbar onAddSlide={handleAddSlide} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
