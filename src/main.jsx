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

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
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
  </>
);
