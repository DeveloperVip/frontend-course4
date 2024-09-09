import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/auth/authContext.jsx";
import { VisibleSettingProvider } from "./contexts/visiableSettingContext.jsx";
import { SelectedSlideProvider } from "./contexts/lesson/selectedSlide.jsx";
import {
  LessonContext,
  LessonProvider,
} from "./contexts/lesson/lessonContext.jsx";
import { InnerClickProvider } from "./contexts/lesson/innerClick.jsx";
import { AccountNameProvider } from "./contexts/user/AccountName.jsx";
import { DisplayQuizProvider } from "./contexts/displayQuiz/displayQuizContext.jsx";
import { TimerQuizProvider } from "./contexts/displayQuiz/timerQuizContext.jsx";
import { CheckpointProvider } from "./contexts/displayQuiz/CheckpointQuizContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SlideVisibilityProvider } from "./contexts/hideSlideContext.jsx";
import { GetInforUserProvider } from "./contexts/user/GetInforUserContext.jsx";
import { QuizProvider } from "./contexts/quiz/quizContext.jsx";
import { PaginationProvider } from "./contexts/paginationContext.jsx";
import { ProfileProvider } from "./contexts/profile/profileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ProfileProvider>
      <PaginationProvider>
        <QuizProvider>
          <GetInforUserProvider>
            <SlideVisibilityProvider>
              <CheckpointProvider>
                <TimerQuizProvider>
                  <DisplayQuizProvider>
                    <AccountNameProvider>
                      <InnerClickProvider>
                        <LessonProvider>
                          <SelectedSlideProvider>
                            <AuthProvider>
                              <VisibleSettingProvider>
                                <App />
                              </VisibleSettingProvider>
                            </AuthProvider>
                          </SelectedSlideProvider>
                        </LessonProvider>
                      </InnerClickProvider>
                    </AccountNameProvider>
                  </DisplayQuizProvider>
                </TimerQuizProvider>
              </CheckpointProvider>
            </SlideVisibilityProvider>
          </GetInforUserProvider>
        </QuizProvider>
      </PaginationProvider>
    </ProfileProvider>
    <ToastContainer />
  </>
);
