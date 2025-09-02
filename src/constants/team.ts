import { TeamMember } from '@/types';

export const TEAM_MEMBERS: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: "Kishor Bhandari",
    role: "Full Stack Engineer",
    team: "Team08",
    image: "/images/team/kishor-bhandari.svg",
    linkedin: "#",
    github: "#",
    skills: ["React", "Node.js", "TypeScript", "Next.js"],
    bio: "Experienced full-stack developer with expertise in modern web technologies."
  },
  {
    name: "Suman Dhakal",
    role: "AI/ML Engineer",
    team: "Team09",
    image: "/images/team/suman-dhakal.svg",
    linkedin: "#",
    github: "#",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
    bio: "AI/ML specialist focused on developing intelligent solutions."
  },
  {
    name: "Ashlesh Pandey",
    role: "Mobile App Developer",
    team: "Team07",
    image: "/images/team/ashlesh-pandey.svg",
    linkedin: "#",
    github: "#",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    bio: "Mobile development expert creating cross-platform applications."
  },
  {
    name: "Dipesh Thapa Magar",
    role: "UI/UX Designer / WordPress Developer",
    team: "Team01",
    image: "/images/team/dipesh-thapa-magar.svg",
    linkedin: "#",
    github: "#",
    skills: ["Figma", "Adobe XD", "WordPress", "UI/UX Design"],
    bio: "Creative designer and WordPress developer."
  },
  {
    name: "Arjun Karki",
    role: "Graphics Designer",
    team: "Team02",
    image: "/images/team/arjun-karki.svg",
    linkedin: "#",
    github: "#",
    skills: ["Photoshop", "Illustrator", "InDesign", "Branding"],
    bio: "Visual design expert specializing in branding and graphics."
  },
  {
    name: "Subba Saheb Chaudhary",
    role: "DevOps Engineer",
    team: "Team03",
    image: "/images/team/subba-saheb-chaudhary.svg",
    linkedin: "#",
    github: "#",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    bio: "DevOps specialist ensuring smooth deployment and operations."
  },
  {
    name: "Utsav Shrestha",
    role: "Mobile App Developer",
    team: "Team04",
    image: "/images/team/utsav-shrestha.svg",
    linkedin: "#",
    github: "#",
    skills: ["React Native", "iOS", "Android", "Mobile UI"],
    bio: "Mobile app developer focused on user experience."
  },
  {
    name: "Suraj Paudel",
    role: "Mobile App Developer",
    team: "Team05",
    image: "/images/team/suraj-paudel.svg",
    linkedin: "#",
    github: "#",
    skills: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    bio: "Flutter expert building beautiful mobile applications."
  },
  {
    name: "Aman Rajbanshi",
    role: "QA Engineer",
    team: "Team06",
    image: "/images/team/aman-rajbanshi.svg",
    linkedin: "#",
    github: "#",
    skills: ["Testing", "Automation", "Selenium", "Quality Assurance"],
    bio: "Quality assurance specialist ensuring product excellence."
  },
  {
    name: "Raman Karki",
    role: "Full Stack Engineer",
    team: "Team10",
    image: "/images/team/raman-karki.svg",
    linkedin: "#",
    github: "#",
    skills: ["Vue.js", "Laravel", "PHP", "Full Stack"],
    bio: "Full-stack developer with expertise in modern frameworks."
  },
  {
    name: "Atisha Thapa",
    role: "Frontend Developer",
    team: "Atisha",
    image: "/images/team/atisha-thapa.svg",
    linkedin: "#",
    github: "#",
    skills: ["React", "Vue.js", "CSS", "Frontend Development"],
    bio: "Frontend specialist creating engaging user interfaces."
  }
];
