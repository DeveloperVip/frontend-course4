export const initialAnswers = [
  { id: 1, content: "", secure_url: null, isTrue: false, public_id: null },
  { id: 2, content: "", secure_url: null, isTrue: false, public_id: null },
  { id: 3, content: "", secure_url: null, isTrue: false, public_id: null },
  { id: 4, content: "", secure_url: null, isTrue: false, public_id: null },
];
export const initialFormQuestion = {
  question: "",
  pictureQuestion: {
    public_id: "",
    secure_url: "",
  },
  answers: [],
  answersCorrect: [],
  isMultiple: "",
  point: "",
  time: "",
};

export const dateOptions = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last week",
  "This month",
  "Last month",
  "This year",
  "All time",
];

export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const actions = ["Save", "Reset", "Cancel"];

const generateDays = (rows = 5, cols = 7) =>
  Array.from({ length: rows }, (_, rowIndex) =>
    Array.from(
      { length: cols },
      (_, colIndex) => rowIndex * cols + colIndex + 1
    )
  );

export const days = generateDays();

export const subjects = [
  {
    name: "Toán học",
    description: "Môn học về các khái niệm và phương pháp toán học",
  },
  { name: "Ngữ văn", description: "Môn học về ngôn ngữ và văn học" },
  { name: "Tiếng Anh", description: "Môn học về ngôn ngữ tiếng Anh" },
  { name: "Hóa học", description: "Môn học về các phản ứng và chất hóa học" },
  {
    name: "Lý học",
    description: "Môn học về các hiện tượng và định lý vật lý",
  },
  {
    name: "Sinh học",
    description: "Môn học về sinh vật và các quá trình sinh học",
  },
  {
    name: "Lịch sử",
    description: "Môn học về các sự kiện và nhân vật lịch sử",
  },
  {
    name: "Địa lý",
    description: "Môn học về các hiện tượng và đặc điểm địa lý",
  },
];

export const visibility = [
  {
    name: "Cộng đồng",
    description:
      "This activity will be publicly visible in the quizizz library",
    icon: true, // Ví dụ về tùy chọn có biểu tượng
    selected: true,
  },
  {
    name: "Hạn chế",
    description:
      "This activity will be visible only by you and the people you share this with",
    icon: true,
    selected: false,
  },
  {
    name: "Mọi người trong tổ chức",
    description:
      "This activity will be visible only by teachers in Sở Giáo Dục Hà Nội",
    icon: true,
    selected: false,
  },
];

export const grades = [
  { name: "Lớp 1", description: "Năm học đầu tiên của cấp tiểu học" },
  { name: "Lớp 2", description: "Năm học thứ hai của cấp tiểu học" },
  { name: "Lớp 3", description: "Năm học thứ ba của cấp tiểu học" },
  { name: "Lớp 4", description: "Năm học thứ tư của cấp tiểu học" },
  { name: "Lớp 5", description: "Năm học thứ năm của cấp tiểu học" },
  { name: "Lớp 6", description: "Năm học đầu tiên của cấp trung học cơ sở" },
  { name: "Lớp 7", description: "Năm học thứ hai của cấp trung học cơ sở" },
  { name: "Lớp 8", description: "Năm học thứ ba của cấp trung học cơ sở" },
  { name: "Lớp 9", description: "Năm học thứ tư của cấp trung học cơ sở" },
  {
    name: "Lớp 10",
    description: "Năm học đầu tiên của cấp trung học phổ thông",
  },
  {
    name: "Lớp 11",
    description: "Năm học thứ hai của cấp trung học phổ thông",
  },
  {
    name: "Lớp 12",
    description: "Năm học cuối cùng của cấp trung học phổ thông",
  },
  { name: "Đại học", description: "Bậc học đại học" },
  {
    name: "Sau đại học",
    description: "Chương trình học sau khi tốt nghiệp đại học",
  },
  {
    name: "Đào tạo nghề",
    description: "Chương trình học nghề và kỹ năng chuyên môn",
  },
];

export const questions = [
  {
    _id: 1,
    question: "Cơ bản là gì?",
    pictureQuestion: {
      public_id: "picture1",
      secure_url: "https://example.com/picture1.jpg",
    },
    answers: [
      {
        _id: 3,
        content: "Đáp án 1",
        relatedPictures: {
          public_id: "answer1_pic",
          secure_url: "",
        },
        isTrue: false,
      },
      {
        _id: 4,
        content: "Đáp án 2",
        relatedPictures: {
          public_id: "answer2_pic",
          secure_url: "",
        },
        isTrue: true,
      },
      {
        _id: 5,
        content: "Đáp án 3",
        relatedPictures: {
          public_id: "answer3_pic",
          secure_url: "",
        },
        isTrue: false,
      },
      {
        _id: 6,
        content: "Đáp án 4",
        relatedPictures: {
          public_id: "answer4_pic",
          secure_url: "",
        },
        isTrue: true,
      },
    ],
    answersCorrect: [
      {
        _id: 7,
        content: "Đáp án 2",
        relatedPictures: {
          public_id: "answer2_pic",
          secure_url: "",
        },
        isTrue: true,
      },
      {
        _id: 8,
        content: "Đáp án 4",
        relatedPictures: {
          public_id: "answer4_pic",
          secure_url: "",
        },
        isTrue: true,
      },
    ],
    isMultiple: true,
    point: 2,
    time: 4000,
  },
  {
    _id: 2,
    question: "Câu hỏi số 2?",
    pictureQuestion: {
      public_id: "picture2",
      secure_url: "https://example.com/picture2.jpg",
    },
    answers: [
      {
        _id: 9,
        content: "",
        relatedPictures: {
          public_id: "answer1_pic2",
          secure_url: "https://example.com/answer1_pic2.jpg",
        },
        isTrue: true,
      },
      {
        _id: 10,
        content: "",
        relatedPictures: {
          public_id: "answer2_pic2",
          secure_url: "https://example.com/answer2_pic2.jpg",
        },
        isTrue: false,
      },
      {
        _id: 11,
        content: "",
        relatedPictures: {
          public_id: "answer3_pic2",
          secure_url: "https://example.com/answer3_pic2.jpg",
        },
        isTrue: false,
      },
      {
        _id: 12,
        content: "",
        relatedPictures: {
          public_id: "answer4_pic2",
          secure_url: "https://example.com/answer4_pic2.jpg",
        },
        isTrue: false,
      },
    ],
    answersCorrect: [
      {
        _id: 13,
        content: "",
        relatedPictures: {
          public_id: "answer1_pic2",
          secure_url: "https://example.com/answer1_pic2.jpg",
        },
        isTrue: true,
      },
    ],
    isMultiple: false,
    point: 3,
    time: 5000,
  },
  {
    _id: 31,
    question: "Cơ bản là gì?",
    pictureQuestion: {
      public_id: "picture1",
      secure_url: "https://example.com/picture1.jpg",
    },
    answers: [
      {
        _id: 20,
        content: "Đáp án 1",
        relatedPictures: {
          public_id: "answer1_pic",
          secure_url: "",
        },
        isTrue: false,
      },
      {
        _id: 21,
        content: "Đáp án 2",
        relatedPictures: {
          public_id: "answer2_pic",
          secure_url: "",
        },
        isTrue: true,
      },
      {
        _id: 25,
        content: "Đáp án 3",
        relatedPictures: {
          public_id: "answer3_pic",
          secure_url: "",
        },
        isTrue: false,
      },
      {
        _id: 26,
        content: "Đáp án 4",
        relatedPictures: {
          public_id: "answer4_pic",
          secure_url: "",
        },
        isTrue: true,
      },
    ],
    answersCorrect: [
      {
        _id: 21,
        content: "Đáp án 2",
        relatedPictures: {
          public_id: "answer2_pic",
          secure_url: "",
        },
        isTrue: true,
      },
      {
        _id: 26,
        content: "Đáp án 4",
        relatedPictures: {
          public_id: "answer4_pic",
          secure_url: "",
        },
        isTrue: true,
      },
    ],
    isMultiple: true,
    point: 2,
    time: 4000,
  },
];
