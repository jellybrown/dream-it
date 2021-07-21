export const menuData = [
  {
    id: "intro",
    title: "드림잇 소개",
    subMenu: [
      {
        id: "1",
        name: "운영진 소개",
        location: "/intro/staff",
      },
      {
        id: "2",
        name: "오시는 길",
        location: "/intro/map",
      },
    ],
  },
  {
    id: "business",
    title: "사업소개",
    subMenu: [
      {
        id: "3",
        name: "주요사업",
        location: "/business/list",
      },
    ],
  },
  {
    id: "opened",
    title: "열린공간",
    subMenu: [
      {
        id: "4",
        name: "공지사항",
        location: "/opened/notice",
      },
      {
        id: "5",
        name: "재정보고",
        location: "/opened/report",
      },
      {
        id: "6",
        name: "이번달 감사한 분",
        location: `/opened/thanksTo`,
      },
    ],
  },
  {
    id: "volunteer",
    title: "봉사참여",
    subMenu: [
      {
        id: "7",
        name: "봉사 소개",
        location: "/volunteer/introduce",
      },
      {
        id: "8",
        name: "후원 문의",
        location: "/volunteer/question",
      },
      {
        id: "9",
        name: "봉사 신청",
        location: "/volunteer/apply",
      },
    ],
  },
];
