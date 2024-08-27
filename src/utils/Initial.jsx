export const initialAnswers = [
    { id: 1, content: "", secure_url: null, isTrue: false ,public_id:null},
    { id: 2, content: "", secure_url: null, isTrue: false ,public_id:null},
    { id: 3, content: "", secure_url: null, isTrue: false ,public_id:null},
    { id: 4, content: "", secure_url: null, isTrue: false ,public_id:null},
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
      Array.from({ length: cols }, (_, colIndex) => rowIndex * cols + colIndex + 1)
    );
  
 export const days = generateDays();

 export const subjects = [
  { label: 'Toán học', subtitle: 'Môn học về các khái niệm và phương pháp toán học' },
  { label: 'Ngữ văn', subtitle: 'Môn học về ngôn ngữ và văn học' },
  { label: 'Tiếng Anh', subtitle: 'Môn học về ngôn ngữ tiếng Anh' },
  { label: 'Hóa học', subtitle: 'Môn học về các phản ứng và chất hóa học' },
  { label: 'Lý học', subtitle: 'Môn học về các hiện tượng và định lý vật lý' },
  { label: 'Sinh học', subtitle: 'Môn học về sinh vật và các quá trình sinh học' },
  { label: 'Lịch sử', subtitle: 'Môn học về các sự kiện và nhân vật lịch sử' },
  { label: 'Địa lý', subtitle: 'Môn học về các hiện tượng và đặc điểm địa lý' },
];

export const visibility = [
  {
    label: 'Publicly visible',
    subtitle: 'This activity will be publicly visible in the quizizz library',
    icon: true, // Ví dụ về tùy chọn có biểu tượng
    selected: true,
  },
  {
    label: 'Restricted',
    subtitle: 'This activity will be visible only by you and the people you share this with',
    icon: true,
    selected: false,
  },
  {
    label: 'Everyone in my organization',
    subtitle: 'This activity will be visible only by teachers in Sở Giáo Dục Hà Nội',
    icon: true,
    selected: false,
  },
];

export const grades = [
  { label: 'Lớp 1', subtitle: 'Năm học đầu tiên của cấp tiểu học' },
  { label: 'Lớp 2', subtitle: 'Năm học thứ hai của cấp tiểu học' },
  { label: 'Lớp 3', subtitle: 'Năm học thứ ba của cấp tiểu học' },
  { label: 'Lớp 4', subtitle: 'Năm học thứ tư của cấp tiểu học' },
  { label: 'Lớp 5', subtitle: 'Năm học thứ năm của cấp tiểu học' },
  { label: 'Lớp 6', subtitle: 'Năm học đầu tiên của cấp trung học cơ sở' },
  { label: 'Lớp 7', subtitle: 'Năm học thứ hai của cấp trung học cơ sở' },
  { label: 'Lớp 8', subtitle: 'Năm học thứ ba của cấp trung học cơ sở' },
  { label: 'Lớp 9', subtitle: 'Năm học thứ tư của cấp trung học cơ sở' },
  { label: 'Lớp 10', subtitle: 'Năm học đầu tiên của cấp trung học phổ thông' },
  { label: 'Lớp 11', subtitle: 'Năm học thứ hai của cấp trung học phổ thông' },
  { label: 'Lớp 12', subtitle: 'Năm học cuối cùng của cấp trung học phổ thông' },
  { label: 'Đại học', subtitle: 'Bậc học đại học' },
  { label: 'Sau đại học', subtitle: 'Chương trình học sau khi tốt nghiệp đại học' },
  { label: 'Đào tạo nghề', subtitle: 'Chương trình học nghề và kỹ năng chuyên môn' },
];
