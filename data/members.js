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
 *                If the file is missing, initials are shown.
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

const MEMBERS = [
  {
    name: 'Zheng Xu',
    role: 'Research Intern',
    group: 'team',
    interests: ['Large Language Models'],
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
];
