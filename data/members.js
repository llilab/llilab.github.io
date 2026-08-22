/**
 * ═══════════════════════════════════════════════════
 *  Members page data
 *  Edit this file to add / update / remove lab members.
 *
 *  Each member supports:
 *    name      : Display name
 *    role      : e.g. 'Ph.D. Student', 'M.S. Student',
 *                'Research Intern', 'Undergraduate Intern'
 *    interests : array of research-interest keywords (optional)
 *    photo     : path to photo in images/members/ (optional)
 *                Use 'images/members/placeholder.svg' when the
 *                member has no photo yet.
 *                If left empty or the file is missing, initials are shown.
 *    email     : email address (optional)
 *    github    : GitHub URL (optional)
 *    homepage  : personal homepage URL (optional)
 *    scholar   : Google Scholar URL (optional)
 *
 *  Members are grouped by the `group` field. Groups are
 *  rendered in the order listed in MEMBER_GROUPS below.
 * ═══════════════════════════════════════════════════
 */

// Order + labels of the member groups (sections)
const MEMBER_GROUPS = [
  { id: 'team',   label: 'Research Team' },   // M.S./Ph.D. students + interns
  // showWhenEmpty: render the section header even when there are no members yet
  { id: 'alumni', label: 'Alumni', showWhenEmpty: true, emptyText: '' },
];

// Korean labels for member roles (mapped from the English `role` string)
const ROLE_KO = {
  'Ph.D. Student': '박사과정',
  'M.S. Student': '석사과정',
  'M.S./Ph.D. Student': '석·박사통합과정',
  'Research Intern': '연구 인턴',
  'Undergraduate Intern': '학부 인턴',
};

const MEMBERS = [
  {
    name: 'Zheng Xu',
    role: 'Research Intern',
    group: 'team',
    interests: ['AI4Science'],
    photo: 'images/members/zheng_xu.jpg',
    email: 'zheng.xu9158@gmail.com',
    github: '',
    homepage: '',
  },
  {
    name: 'Chaeyoung Seo',
    role: 'Undergraduate Intern',
    group: 'team',
    interests: ['Efficiency'],
    photo: 'images/members/chaeyoung_seo.jpg',
    email: 'a9nes@hufs.ac.kr',
    github: '',
    homepage: '',
  },
  {
    name: 'Eunyeong Cho',
    role: 'Undergraduate Intern',
    group: 'team',
    interests: ['Efficiency'],
    photo: 'images/members/eunyeong_cho.jpg',
    email: 'jjeeyy77@naver.com',
    github: '',
    homepage: '',
  },
  {
    name: 'Jin Hui Kim',
    role: 'Undergraduate Intern',
    group: 'team',
    interests: ['Efficiency'],
    photo: 'images/members/jin_hui_kim.jpg',
    email: 'kkkjh46@hufs.ac.kr',
    github: '',
    homepage: '',
  },
  {
    name: 'Yeonjoo Yoo',
    role: 'Undergraduate Intern',
    group: 'team',
    interests: ['Efficiency'],
    photo: 'images/members/placeholder.svg',   // replace with images/members/yoo_yeonjoo.jpg when available
    email: 'yyj@hufs.ac.kr',
    github: '',
    homepage: '',
  },
];
