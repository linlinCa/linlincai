export type Lang = 'en' | 'zh';

export type Project = {
  slug: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  year: string;
  category: Record<Lang, string>;
  tags: Record<Lang, string[]>;
  cover: string;
  links?: { label: string; href: string }[];
  overview: Record<Lang, string>;
  role: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
};

export const projects: Project[] = [
  {
    slug: 'paintopia',
    title: {
      en: 'Paintopia',
      zh: '画趣星球'
    },
    subtitle: {
      en: 'AI-assisted drawing and storytelling for children',
      zh: '面向儿童的 AI 绘画陪伴与故事创作体验'
    },
    year: '2026',
    category: {
      en: 'Human-AI Interaction / Creative AI',
      zh: '人机交互 / 创意 AI'
    },
    tags: {
      en: ['Human-AI Interaction', 'Creative AI', 'Children', 'VLM', 'Product Design'],
      zh: ['人机交互', '创意 AI', '儿童', '视觉语言模型', '产品设计']
    },
    cover: '/images/projects/paintopia/cover.jpg',
    overview: {
      en: 'Paintopia is an AI-assisted drawing and storytelling experience designed for children. It observes children’s drawings, asks gentle questions, and helps them extend visual ideas into imaginative stories.',
      zh: 'Paintopia 是一个面向儿童的 AI 绘画陪伴与故事创作体验。它通过理解孩子的画面、提出问题，帮助孩子把视觉想象延展成故事。'
    },
    role: {
      en: 'Worked on product concept development, interaction flow design, prompt design, web prototype exploration and development, and VLM-based dialogue design.',
      zh: '负责产品概念、交互流程、Prompt 设计、Web 原型探索与开发，以及基于 VLM 的对话设计。'
    },
    highlights: {
      en: [
        'Designed a child-friendly interaction flow around drawing, conversation, and story generation.',
        'Explored how visual understanding can support children’s imagination without over-directing them.',
        'Built a lightweight context structure using storyboards, enabling more coherent multi-turn dialogue.'
      ],
      zh: [
        '设计了围绕绘画、对话和故事生成的儿童友好型交互流程。',
        '探索视觉理解如何支持儿童想象力，同时避免过度引导。',
        '通过 storyboard 搭建轻量化上下文结构，让多轮对话更连贯。'
      ]
    }
  },
  {
    slug: 'head-reconstruction',
    title: {
      en: 'Patient-Aware 3D Head Reconstruction for Orthognathic Patients',
      zh: '面向正颌患者的三维头部重建'
    },
    subtitle: {
      en: 'Recovering patient-specific 3D facial geometry from routine clinical photographs',
      zh: '从常规临床照片中恢复患者个体化三维面部结构'
    },
    year: '2026',
    category: {
      en: '3D reconstruction / Research',
      zh: '3D 重建 / 研究'
    },
    tags: {
      en: ['3D facial reconstruction', 'Computer Vision', 'Research'],
      zh: ['3D 面部重建', '计算机视觉', '研究']
    },
    cover: '/images/projects/head-reconstruction/cover.jpg',
    overview: {
      en: 'A research project on reconstructing patient-specific 3D facial geometry from routine clinical photographs for orthognathic treatment scenarios.',
      zh: '一个面向正颌诊疗场景的三维头部重建研究，探索如何从常规临床照片中恢复患者个体化的三维面部结构。'
    },
    role: {
      en: 'Research design, baseline analysis, patient-aware prior adaptation, profile-guided geometry refinement, and evaluation design.',
      zh: '负责研究设计、基线分析、患者感知先验适配、侧貌引导的几何细化，以及评估方案设计。'
    },
    highlights: {
      en: [
        'Built on a multi-view 3D face reconstruction framework using clinical facial photographs.',
        'Analyzed limitations of generic 3D morphable model priors for dentofacial deformity patients.',
        'Proposed patient-aware prior adaptation and local geometry refinement for lower-face morphology.'
      ],
      zh: [
        '基于多视角临床面部照片构建三维面部重建框架。',
        '分析通用 3DMM 先验在牙颌面畸形患者场景下的局限。',
        '提出患者感知的先验适配和局部几何细化方法。'
      ]
    }
  },
  {
    slug: 'neck-pain-device',
    title: {
      en: 'NS-care: A Wearable Management System for Chronic Neck and Shoulder Musculoskeletal Pain',
      zh: 'NS-care：肩颈慢性肌肉骨骼疼痛的可穿戴管理系统'
    },
    subtitle: {
      en: 'A daily health management companion for chronic neck and shoulder pain',
      zh: '下一代肩颈慢性疼痛的日常管家'
    },
    year: '2024',
    category: {
      en: 'Health Management / Hardware Product',
      zh: '健康管理 / 硬件产品'
    },
    tags: {
      en: ['Health Management', 'Wearable Device', 'User Research', 'Pain Reporting', 'Behavior Intervention'],
      zh: ['健康管理', '可穿戴设备', '用户研究', '疼痛报告', '行为干预']
    },
    cover: '/images/projects/neck-pain-device/cover.jpg',
    overview: {
      en: 'A wearable health management concept for people with chronic neck and shoulder musculoskeletal pain. The system combines active pain reporting with objective data monitoring to help users perceive, understand, and manage pain in daily life.',
      zh: '一个面向慢性肩颈肌肉骨骼疼痛人群的可穿戴健康管理系统概念，结合主动疼痛报告与客观数据监测，帮助用户在日常生活中感知、理解并管理疼痛问题。'
    },
    role: {
      en: 'Worked on product research, user scenario definition, wearable interaction design, hardware concept design, and product storytelling.',
      zh: '负责产品研究、用户场景定义、可穿戴交互设计、硬件概念设计和产品叙事。'
    },
    highlights: {
      en: [
        'Designed a wearable system prototype for daily management of chronic neck and shoulder pain.',
        'Explored a tangible input interface that enables users to report pain in a more natural and low-burden way.',
        'Proposed a management framework that combines subjective pain reporting, objective body-related data, and behavioral feedback for localized chronic pain.'
      ],
      zh: [
        '设计了面向肩颈慢性疼痛日常管理的可穿戴系统原型。',
        '探索用于肩颈疼痛报告的自然输入实体界面，降低用户记录疼痛的负担。',
        '提出针对特定部位慢性疼痛的管理框架，结合主观疼痛报告、客观身体数据与行为反馈。'
      ]
    }
  }
];
