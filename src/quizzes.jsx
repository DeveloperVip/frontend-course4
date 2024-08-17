const quizzes = [
  //1 vongquanhthegioi
  {
    title: "Vòng quanh thế giới",
    category: "Khởi động vui vẻ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/4bcf5a95-a02f-417d-9cff-49d2c4d10f25?w=400&h=400",
  },

  {
    title: "Đúng hay sai",
    category: "Khởi động vui vẻ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/fdf19b1b-7d86-485d-859d-a13390a9197f?w=400&h=400",
  },
  {
    title: "Làm quen với học sinh/sinh viên",
    category: "Khởi động vui vẻ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/13045fcf-cc50-45db-9eab-491e0b2d9790?w=400&h=400",
  },
  {
    title: "Câu đố trước khi lớp bắt đầu",
    category: "Khởi động vui vẻ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/14753bce-ba21-4b0e-8271-a84e797940bb?w=400&h=400",
  },
  {
    title: "Cái này hay cái kia",
    category: "Khởi động vui vẻ",
    Image:
      "https://th.bing.com/th/id/OIP.8ayigLK3s5EtHPmcU4QUKgAAAA?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  //1 toan
  {
    title: "Hình tam giác",
    category: "Toán",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/fb05126a-f901-4462-868f-f3451b582902?w=400&h=400",
  },
  {
    title: "Volume of Cones and Spheres",
    category: "Toán",
    Image:
      "https://th.bing.com/th/id/OIP.u2UJOA-vPa0C99rzdt5e5wAAAA?w=263&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Unit test 1",
    category: "Toán",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/fda4ee58-8e4d-4ecb-a7fe-0e2ac30a49d3?w=400&h=400",
  },

  {
    title: "Tứ giác - Hính thang cân",
    category: "Toán",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/513dfa2d-884c-4d3e-9458-d63979c7122a?w=400&h=400",
  },
  {
    title: "Equivalent Fractions",
    category: "Toán",
    Image:
      "https://th.bing.com/th/id/OIP.BdkFGv4J1yroA-OCowDD0gHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  //1 tienganhvangonngu
  {
    title: "Regular Past Tense Verbs",
    category: "Tiếng Anh và Ngôn ngữ",
    Image:
      "https://th.bing.com/th/id/OIP.jnEkKuC1bXnKJSBvCoxwlQHaEC?w=182&h=99&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Present simple",
    category: "Tiếng Anh và Ngôn ngữ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/4bec310a-4e33-412c-9279-559126f87136?w=400&h=400",
  },
  {
    title: "Infinitives",
    category: "Tiếng Anh và Ngôn ngữ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/7a3e981b-8d06-4110-b375-25d53690695d?w=400&h=400",
  },
  {
    title: "chữ A",
    category: "Tiếng Anh và Ngôn ngữ",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/526e6282-987d-40e2-960f-33c133f36040?w=400&h=400",
  },
  {
    title: "Adverb Clause of Concession",
    category: "Tiếng Anh và Ngôn ngữ",
    Image:
      "https://th.bing.com/th/id/OIP.MLRu_7Z_ImmcbQQOyvNhMgHaDc?w=305&h=162&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  //1 khoahoc
  {
    title: "States of Matter",
    category: "Khoa học",
    Image:
      "https://th.bing.com/th/id/OIP.l7G_V15Ful8YEc7AJPAMHAHaEK?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Fact-check",
    category: "Khoa học",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/cb16fec9-951f-47ef-8f7c-afce45d579c8?w=400&h=400",
  },
  {
    title: "Ecosystems",
    category: "Khoa học",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/1fdf6ab8-be21-4ad3-937e-c0ecdb9d2ea9?w=400&h=400",
  },
  {
    title: "BÀI TOÁN CÔNG TRÌNH CHUYỂN ĐỔI GIỮA n, m, V",
    category: "Khoa học",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/c0c4fe80-c418-48b4-8726-0d427956673b?w=400&h=400",
  },
  {
    title: "Science - The Brain ",
    category: "Khoa học",
    Image:
      "https://th.bing.com/th/id/OIP.cddZQpx9IrjilXfxDwWcfAAAAA?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  //1 khoahocmaytinh&kynang
  {
    title: "Animations",
    category: "Khoa học máy tính và kỹ năng",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/af4a6c8a-ae4a-4911-bf38-34365087b19f?w=400&h=400",
  },
  {
    title: "Basic Excel Vocabulary",
    category: "Khoa học máy tính và kỹ năng",
    Image:
      "https://th.bing.com/th/id/OIP.vOKzjS4QeSZAnv7utz0arwAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Mycomputer",
    category: "Khoa học máy tính và kỹ năng",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ee7ad793-4842-4315-b918-0081a977998a?w=400&h=400",
  },
  {
    title: "Tớ điều khiển các ứng dụng",
    category: "Khoa học máy tính và kỹ năng",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/3a6c36fc-f8d3-43ed-ab66-383eccdd03ed?w=400&h=400",
  },
  {
    title: "Excel",
    category: "Khoa học máy tính và kỹ năng",
    Image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/9b9123d7-7b2a-4bd2-b020-c2b4e748b480?w=400&h=400",
  },
];

export default quizzes;
