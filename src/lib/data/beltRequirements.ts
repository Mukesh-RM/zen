import { BeltRequirement } from '../types';

export const beltRequirements: BeltRequirement[] = [
  {
    rank: 'White Belt (10th Kyu)',
    color: '#F5F0E8',
    minimumMonths: 3,
    kata: ['Taikyoku Shodan'],
    techniques: [
      'Basic stances: Zenkutsu-dachi, Kiba-dachi, Sanchin-dachi',
      'Basic blocks: Jodan-uke, Chudan-uke, Gedan-barai',
      'Basic punches: Seiken-zuki (straight punch)',
      'Basic kicks: Mae-geri (front kick)',
    ],
    selfDefense: [
      'Basic wrist grab escape',
      'Front choke defense',
    ],
    sparring: 'No sparring at white belt level',
  },
  {
    rank: 'Yellow Belt (9th Kyu)',
    color: '#EAB308',
    minimumMonths: 4,
    kata: ['Taikyoku Nidan'],
    techniques: [
      'Moving basics — forward and backward',
      'Combination techniques — block and counter',
      'Side kick — Yoko-geri',
      'Back fist strike — Uraken-uchi',
    ],
    selfDefense: [
      'Lapel grab defense',
      'Bear hug defense (front)',
    ],
    sparring: 'Introduction to yakusoku kumite (pre-arranged sparring)',
  },
  {
    rank: 'Orange Belt (8th Kyu)',
    color: '#F97316',
    minimumMonths: 4,
    kata: ['Taikyoku Sandan'],
    techniques: [
      'Roundhouse kick — Mawashi-geri',
      'Knife hand strike — Shuto-uchi',
      'Elbow strikes — Empi-uchi',
      'Combination kicking',
    ],
    selfDefense: [
      'Bear hug defense (rear)',
      'Hair grab defense',
    ],
    sparring: 'Yakusoku kumite set 1',
  },
  {
    rank: 'Green Belt (7th Kyu)',
    color: '#22C55E',
    minimumMonths: 5,
    kata: ['Seisan'],
    techniques: [
      'Back kick — Ushiro-geri',
      'Hook kick — Kake-geri',
      'Advanced combinations',
      'Movement and footwork drills',
    ],
    selfDefense: [
      'Full nelson escape',
      'Ground defense basics',
    ],
    sparring: 'Yakusoku kumite set 2',
  },
  {
    rank: 'Blue Belt (6th Kyu)',
    color: '#3B82F6',
    minimumMonths: 5,
    kata: ['Seiunchin'],
    techniques: [
      'Spinning techniques',
      'Jump kicks basics',
      'Multiple opponent awareness',
      'Counter-attack timing',
    ],
    selfDefense: [
      'Knife defense basics',
      'Club/stick defense basics',
    ],
    sparring: 'Introduction to jiyu kumite (free sparring)',
  },
  {
    rank: 'Purple Belt (5th Kyu)',
    color: '#A855F7',
    minimumMonths: 6,
    kata: ['Naihanchi Shodan'],
    techniques: [
      'Advanced footwork patterns',
      'Combination strikes with kicks',
      'Close-range fighting techniques',
      'Power generation principles',
    ],
    selfDefense: [
      'Advanced knife defense',
      'Multiple attacker scenarios',
    ],
    sparring: 'Jiyu kumite — light contact',
  },
  {
    rank: 'Brown Belt 3rd Kyu',
    color: '#78350F',
    minimumMonths: 6,
    kata: ['Naihanchi Nidan', 'Wansu'],
    techniques: [
      'Full Isshinryu technique syllabus',
      'Advanced combination sparring',
      'Breaking techniques (tameshiwari)',
      'Teaching assistant responsibilities',
    ],
    selfDefense: [
      'Complete self-defense curriculum',
      'Scenario-based training',
    ],
    sparring: 'Jiyu kumite — moderate contact',
  },
  {
    rank: 'Brown Belt 2nd Kyu',
    color: '#92400E',
    minimumMonths: 7,
    kata: ['Chinto', 'Kusanku'],
    techniques: [
      'All previous kata refinement',
      'Advanced kumite strategy',
      'Weapon basics: Bo (6-foot staff)',
      'Referee training basics',
    ],
    selfDefense: [
      'Weapon defense — Bo',
      'Random attack scenarios',
    ],
    sparring: 'Jiyu kumite — tournament rules preparation',
  },
  {
    rank: 'Brown Belt 1st Kyu',
    color: '#B45309',
    minimumMonths: 8,
    kata: ['Sunsu', 'Sanchin'],
    techniques: [
      'Complete Isshinryu empty-hand kata (8 kata)',
      'Advanced weapon kata',
      'Teaching classes under supervision',
      'Tournament judging qualification',
    ],
    selfDefense: [
      'Complete self-defense mastery',
      'Improvised weapon awareness',
    ],
    sparring: 'Full tournament preparation',
  },
  {
    rank: 'Black Belt 1st Dan (Shodan)',
    color: '#1A1A1A',
    minimumMonths: 12,
    kata: [
      'All 8 empty-hand kata',
      'Bo kata: Tokumine no Kun, Urashi no Kun',
      'Sai kata: Chatan Yara no Sai, Kusanku Sai',
    ],
    techniques: [
      'Complete Isshinryu system mastery',
      'Teaching certification',
      'First aid certification',
      'Dojo management training',
    ],
    selfDefense: [
      'Complete Isshinryu self-defense system',
      'Street application and adaptation',
    ],
    sparring: 'Full contact, tournament and street application',
  },
];
