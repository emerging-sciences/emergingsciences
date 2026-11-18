// EDIT THIS FILE to add lectures / PDFs / exams. Pages build themselves from it. A missing comma "," or quote = blank page.
// FLOW: Category (cats) -> Exam (exams, cat:id) -> Subject (papers) -> Topic (subjects, p:paper id) -> lectures / material
// NEW LECTURE : in "lectures": {"id":"ph-elec-02","s":"ph-elec","n":"L-02","t":"Title","k":"T","yt":"YouTubeVideoId"}   (k: T theory, P practice; id must be unique)
// NEW PDF     : in "material": {"id":"m15","t":"Title","d":"short note","k":"Notes","s":"ph-elec","drive":"GoogleDriveFileId"}
// NEW TOPIC   : in "subjects": {"id":"ph-xyz","name":"Name","icon":"🔭","p":"ph","live":true}; then add "ph-xyz" to the "subjects" list of every exam that has it.
// NEW EXAM    : copy a block in "exams", give a new id, set "cat" to a category id, and list its "papers" and "subjects". Leave "date" empty until the official date is out (then YYYY-MM-DD).
// Same topic can sit in many exams: its lectures and PDFs are shared.
window.ES_DATA = {
 "goalMin": 30,
 "cats": [
  {
   "id": "ent",
   "name": "Science & Entrance Exams",
   "icon": "🎓",
   "desc": "IISER, NEST, JEE, NEET, CUET UG, BITSAT"
  },
  {
   "id": "def",
   "name": "Defence",
   "icon": "🛡️",
   "desc": "NDA, Air Force X & Y, Navy"
  },
  {
   "id": "ssc",
   "name": "SSC",
   "icon": "🏛️",
   "desc": "CGL, CHSL, MTS, GD, CPO"
  },
  {
   "id": "rly",
   "name": "Railway (RRB)",
   "icon": "🚆",
   "desc": "NTPC, Group D, ALP, JE"
  }
 ],
 "papers": [
  {
   "id": "ph",
   "name": "Physics",
   "icon": "⚛️"
  },
  {
   "id": "ch",
   "name": "Chemistry",
   "icon": "🧪"
  },
  {
   "id": "ma",
   "name": "Mathematics",
   "icon": "∑"
  },
  {
   "id": "bi",
   "name": "Biology",
   "icon": "🧬"
  }
 ],
 "subjects": [
  {
   "id": "ph-units",
   "name": "Units, Measurement & Dimensions",
   "icon": "📏",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-kin",
   "name": "Kinematics (1D & 2D Motion)",
   "icon": "🏃",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-lom",
   "name": "Laws of Motion & Friction",
   "icon": "F=ma",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-wep",
   "name": "Work, Energy & Power",
   "icon": "⚡",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-rot",
   "name": "Rotational Motion",
   "icon": "🔄",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-grav",
   "name": "Gravitation",
   "icon": "🌍",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-mat",
   "name": "Properties of Matter (Elasticity, Fluids, Surface Tension)",
   "icon": "💧",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-thermo",
   "name": "Thermal Physics & Thermodynamics",
   "icon": "🔥",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-ktg",
   "name": "Kinetic Theory of Gases",
   "icon": "🎈",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-osc",
   "name": "Oscillations & Waves",
   "icon": "〰️",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-elec",
   "name": "Electrostatics",
   "icon": "⚡",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-curr",
   "name": "Current Electricity",
   "icon": "🔌",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-mag",
   "name": "Magnetic Effects & Magnetism",
   "icon": "🧲",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-emi",
   "name": "EMI & Alternating Current",
   "icon": "🔁",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-em",
   "name": "Electromagnetic Waves",
   "icon": "📡",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-opt",
   "name": "Ray & Wave Optics",
   "icon": "🔍",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-mod",
   "name": "Dual Nature of Matter & Atoms",
   "icon": "⚛️",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-nuc",
   "name": "Nuclei",
   "icon": "☢️",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-sem",
   "name": "Semiconductors & Electronics",
   "icon": "💡",
   "p": "ph",
   "live": true
  },
  {
   "id": "ph-gs",
   "name": "General Physics (Class 9–10 level)",
   "icon": "📘",
   "p": "ph",
   "live": true
  },
  {
   "id": "ch-basic",
   "name": "Some Basic Concepts of Chemistry",
   "icon": "⚖️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-atom",
   "name": "Atomic Structure",
   "icon": "⚛️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-period",
   "name": "Periodic Table & Periodicity",
   "icon": "📊",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-bond",
   "name": "Chemical Bonding & Molecular Structure",
   "icon": "🔗",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-states",
   "name": "States of Matter",
   "icon": "💨",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-thermo",
   "name": "Chemical Thermodynamics",
   "icon": "🔥",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-eq",
   "name": "Equilibrium (Chemical & Ionic)",
   "icon": "⚖️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-redox",
   "name": "Redox Reactions",
   "icon": "🔋",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-sol",
   "name": "Solutions",
   "icon": "🧪",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-electro",
   "name": "Electrochemistry",
   "icon": "🔋",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-kin",
   "name": "Chemical Kinetics",
   "icon": "⏱️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-surf",
   "name": "Surface Chemistry",
   "icon": "💧",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-pblock",
   "name": "p-Block Elements",
   "icon": "🧫",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-dblock",
   "name": "d- & f-Block, Coordination Compounds",
   "icon": "🎨",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-metal",
   "name": "s-Block & Metallurgy",
   "icon": "⛏️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-goc",
   "name": "GOC & Isomerism",
   "icon": "🧬",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-hydro",
   "name": "Hydrocarbons",
   "icon": "🛢️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-halo",
   "name": "Haloalkanes & Haloarenes",
   "icon": "🧪",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-oxy",
   "name": "Alcohols, Phenols, Ethers, Aldehydes, Ketones & Acids",
   "icon": "⚗️",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-amine",
   "name": "Amines",
   "icon": "🧪",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-bio",
   "name": "Biomolecules & Polymers",
   "icon": "🧬",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-env",
   "name": "Environmental & Everyday Chemistry",
   "icon": "🌿",
   "p": "ch",
   "live": true
  },
  {
   "id": "ch-gs",
   "name": "General Chemistry (Class 9–10 level)",
   "icon": "📘",
   "p": "ch",
   "live": true
  },
  {
   "id": "ma-sets",
   "name": "Sets, Relations and Functions",
   "icon": "{ }",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-trig",
   "name": "Trigonometry",
   "icon": "sin θ",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-cx",
   "name": "Complex Numbers, Theory of Equations & Inequalities",
   "icon": "i²=−1",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-pmi",
   "name": "Principle of Mathematical Induction",
   "icon": "P(n)",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-pc",
   "name": "Permutations and Combinations",
   "icon": "nCr",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-bin",
   "name": "Binomial Theorem",
   "icon": "(a+b)ⁿ",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-seq",
   "name": "Sequence and Series",
   "icon": "Σ",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-coord",
   "name": "Straight Lines and Conic Sections",
   "icon": "📐",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-dc",
   "name": "Differential Calculus",
   "icon": "dy/dx",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-ic",
   "name": "Integral Calculus",
   "icon": "∫",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-de",
   "name": "Differential Equations",
   "icon": "y′",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-mat",
   "name": "Matrices and Determinants",
   "icon": "[A]",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-vec",
   "name": "Vectors",
   "icon": "→",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-3d",
   "name": "3D Geometry",
   "icon": "xyz",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-stat",
   "name": "Statistics",
   "icon": "σ",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-prob",
   "name": "Probability",
   "icon": "P(A)",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-arith",
   "name": "Arithmetic (Percentage, Ratio, Profit & Loss, Time & Work…)",
   "icon": "%",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-alg",
   "name": "Basic Algebra",
   "icon": "x+y",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-geo",
   "name": "Geometry & Mensuration",
   "icon": "△",
   "p": "ma",
   "live": true
  },
  {
   "id": "ma-di",
   "name": "Data Interpretation",
   "icon": "📊",
   "p": "ma",
   "live": true
  },
  {
   "id": "bi-living",
   "name": "Diversity of Living World",
   "icon": "🌱",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-struct",
   "name": "Structural Organisation in Plants & Animals",
   "icon": "🌿",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-cell",
   "name": "Cell: Structure & Division",
   "icon": "🔬",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-biomol",
   "name": "Biomolecules & Enzymes",
   "icon": "🧬",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-pphy",
   "name": "Plant Physiology",
   "icon": "🍃",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-hphy",
   "name": "Human Physiology",
   "icon": "🫀",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-repro",
   "name": "Reproduction",
   "icon": "🌸",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-gen",
   "name": "Genetics & Evolution",
   "icon": "🧬",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-molb",
   "name": "Molecular Basis of Inheritance",
   "icon": "🧬",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-biotech",
   "name": "Biotechnology",
   "icon": "🧫",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-eco",
   "name": "Ecology & Environment",
   "icon": "🌍",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-health",
   "name": "Human Health & Welfare",
   "icon": "🩺",
   "p": "bi",
   "live": true
  },
  {
   "id": "bi-gs",
   "name": "General Biology (Class 9–10 level)",
   "icon": "📘",
   "p": "bi",
   "live": true
  }
 ],
 "exams": [
  {
   "id": "iiser",
   "short": "IISER",
   "tag": "IISER",
   "cat": "ent",
   "color": "#34D399",
   "name": "IISER Aptitude Test (IAT)",
   "body": "IISER Joint Admission Committee",
   "date": "",
   "dateText": "Date awaited",
   "note": "IAT 2027 date not announced yet",
   "site": "https://www.iiseradmission.in/",
   "desc": "Computer-based aptitude test for BS-MS at IISERs and other participating institutes. Physics, Chemistry, Maths and Biology, based on the class 11–12 syllabus.",
   "papers": [
    "ph",
    "ch",
    "ma",
    "bi"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ch-env",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob",
    "bi-living",
    "bi-struct",
    "bi-cell",
    "bi-biomol",
    "bi-pphy",
    "bi-hphy",
    "bi-repro",
    "bi-gen",
    "bi-molb",
    "bi-biotech",
    "bi-eco",
    "bi-health"
   ],
   "end": "",
   "dsrc": "IISER admission site (iiseradmission.in)"
  },
  {
   "id": "nest",
   "short": "NEST",
   "tag": "NEST",
   "cat": "ent",
   "color": "#2DD4BF",
   "name": "NEST (National Entrance Screening Test)",
   "body": "NISER Bhubaneswar & UM-DAE CEBS",
   "date": "",
   "dateText": "Date awaited",
   "note": "NEST 2027 date not announced yet",
   "site": "https://www.nestexam.in/",
   "desc": "Entrance test for the 5-year integrated M.Sc. programmes at NISER and UM-DAE CEBS. Physics, Chemistry, Maths and Biology.",
   "papers": [
    "ph",
    "ch",
    "ma",
    "bi"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ch-env",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob",
    "bi-living",
    "bi-struct",
    "bi-cell",
    "bi-biomol",
    "bi-pphy",
    "bi-hphy",
    "bi-repro",
    "bi-gen",
    "bi-molb",
    "bi-biotech",
    "bi-eco",
    "bi-health"
   ],
   "end": "",
   "dsrc": "NEST site (nestexam.in)"
  },
  {
   "id": "jeemain",
   "short": "JEE Main",
   "tag": "JEE Main",
   "cat": "ent",
   "color": "#60A5FA",
   "name": "JEE Main",
   "body": "National Testing Agency (NTA)",
   "date": "2027-01-20",
   "dateText": "20–28 Jan 2027",
   "note": "Session 1 (20, 21, 22, 23, 24 & 28 Jan) · Session 2 tentatively 2–7 Apr 2027",
   "site": "https://jeemain.nta.nic.in/",
   "desc": "Entrance for NITs, IIITs and other centrally funded technical institutes; also the gateway to JEE Advanced. Physics, Chemistry, Maths.",
   "papers": [
    "ph",
    "ch",
    "ma"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob"
   ],
   "end": "2027-01-28",
   "dsrc": "NTA public notice dated 24 Oct 2026 (JEE Main 2027 Information Bulletin) and NTA exam calendar"
  },
  {
   "id": "jeeadv",
   "short": "JEE Advanced",
   "tag": "JEE Advanced",
   "cat": "ent",
   "color": "#818CF8",
   "name": "JEE Advanced",
   "body": "IITs (organising IIT changes yearly)",
   "date": "2027-05-23",
   "dateText": "23 May 2027",
   "note": "Sunday · organised by IIT Delhi",
   "site": "https://jeeadv.ac.in/",
   "desc": "Entrance for the IITs; open to top JEE Main performers. Physics, Chemistry, Maths.",
   "papers": [
    "ph",
    "ch",
    "ma"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob"
   ],
   "end": "",
   "dsrc": "IIT Delhi announcement on jeeadv.ac.in"
  },
  {
   "id": "neet",
   "short": "NEET UG",
   "tag": "NEET UG",
   "cat": "ent",
   "color": "#F472B6",
   "name": "NEET UG",
   "body": "National Testing Agency (NTA)",
   "date": "",
   "dateText": "Date awaited",
   "note": "NTA has not announced the NEET UG 2027 date yet",
   "site": "https://neet.nta.nic.in/",
   "desc": "National entrance for MBBS, BDS and other medical and allied courses. Physics, Chemistry and Biology.",
   "papers": [
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ch-env",
    "bi-living",
    "bi-struct",
    "bi-cell",
    "bi-biomol",
    "bi-pphy",
    "bi-hphy",
    "bi-repro",
    "bi-gen",
    "bi-molb",
    "bi-biotech",
    "bi-eco",
    "bi-health"
   ],
   "end": "",
   "dsrc": "NTA (neet.nta.nic.in / nta.ac.in)"
  },
  {
   "id": "cuetug",
   "short": "CUET UG",
   "tag": "CUET UG",
   "cat": "ent",
   "color": "#FBBF24",
   "name": "CUET UG",
   "body": "National Testing Agency (NTA)",
   "date": "",
   "dateText": "Date awaited",
   "note": "NTA has not announced the CUET UG 2027 date yet",
   "site": "https://cuet.nta.nic.in/",
   "desc": "Common entrance for undergraduate programmes at central and many other universities. Domain subjects here: Physics, Chemistry, Maths, Biology.",
   "papers": [
    "ph",
    "ch",
    "ma",
    "bi"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ch-env",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob",
    "bi-living",
    "bi-struct",
    "bi-cell",
    "bi-biomol",
    "bi-pphy",
    "bi-hphy",
    "bi-repro",
    "bi-gen",
    "bi-molb",
    "bi-biotech",
    "bi-eco",
    "bi-health"
   ],
   "end": "",
   "dsrc": "NTA (cuet.nta.nic.in / nta.ac.in)"
  },
  {
   "id": "bitsat",
   "short": "BITSAT",
   "tag": "BITSAT",
   "cat": "ent",
   "color": "#FB923C",
   "name": "BITSAT",
   "body": "BITS Pilani",
   "date": "",
   "dateText": "Date awaited",
   "note": "BITS Pilani has not announced the BITSAT 2027 dates yet",
   "site": "https://www.bitsadmission.com/",
   "desc": "Online test for B.E./B.Pharm/M.Sc. admissions at BITS Pilani, Goa and Hyderabad campuses. Physics, Chemistry, Maths.",
   "papers": [
    "ph",
    "ch",
    "ma"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "ch-states",
    "ch-thermo",
    "ch-eq",
    "ch-redox",
    "ch-sol",
    "ch-electro",
    "ch-kin",
    "ch-surf",
    "ch-pblock",
    "ch-dblock",
    "ch-metal",
    "ch-goc",
    "ch-hydro",
    "ch-halo",
    "ch-oxy",
    "ch-amine",
    "ch-bio",
    "ch-env",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob"
   ],
   "end": "",
   "dsrc": "BITS Pilani admissions site (bitsadmission.com)"
  },
  {
   "id": "nda",
   "short": "NDA",
   "tag": "NDA",
   "cat": "def",
   "color": "#38BDF8",
   "name": "NDA & NA Examination",
   "body": "UPSC",
   "date": "2027-04-11",
   "dateText": "11 Apr 2027",
   "note": "NDA & NA (I) 2027 · apply 2–22 Dec 2026 · NDA & NA (II) on 19 Sep 2027",
   "site": "https://upsc.gov.in/",
   "desc": "Entry to the National Defence Academy and Naval Academy. Mathematics paper plus General Ability Test (science portion covered here).",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob",
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-osc",
    "ph-opt",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ch-gs",
    "ch-basic",
    "ch-atom",
    "ch-period",
    "ch-bond",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "UPSC Examination Calendar 2027 (upsc.gov.in)"
  },
  {
   "id": "iafxy",
   "short": "IAF X & Y",
   "tag": "IAF X & Y",
   "cat": "def",
   "color": "#7DD3FC",
   "name": "Indian Air Force Airmen — Group X & Y",
   "body": "Indian Air Force",
   "date": "",
   "dateText": "Date awaited",
   "note": "Intake 02/2027 online test was held 22–23 Sep 2026 · next intake notification awaited",
   "site": "https://agnipathvayu.cdac.in/",
   "desc": "Airmen recruitment. Group X (technical trades) needs Physics, Maths and English; Group Y is mainly English and Reasoning & General Awareness, so science content here helps Group X.",
   "papers": [
    "ph",
    "ma"
   ],
   "subjects": [
    "ph-units",
    "ph-kin",
    "ph-lom",
    "ph-wep",
    "ph-rot",
    "ph-grav",
    "ph-mat",
    "ph-thermo",
    "ph-ktg",
    "ph-osc",
    "ph-elec",
    "ph-curr",
    "ph-mag",
    "ph-emi",
    "ph-em",
    "ph-opt",
    "ph-mod",
    "ph-nuc",
    "ph-sem",
    "ma-sets",
    "ma-trig",
    "ma-cx",
    "ma-pmi",
    "ma-pc",
    "ma-bin",
    "ma-seq",
    "ma-coord",
    "ma-dc",
    "ma-ic",
    "ma-de",
    "ma-mat",
    "ma-vec",
    "ma-3d",
    "ma-stat",
    "ma-prob"
   ],
   "end": "",
   "dsrc": "IAF Agniveervayu portal (agnipathvayu.cdac.in)"
  },
  {
   "id": "navy",
   "short": "Navy",
   "tag": "Navy",
   "cat": "def",
   "color": "#22D3EE",
   "name": "Indian Navy Agniveer (SSR & MR)",
   "body": "Indian Navy",
   "date": "",
   "dateText": "Date awaited",
   "note": "Batches 01/2027 & 02/2027 already notified (Mar 2026) · next SSR/MR notification awaited",
   "site": "https://www.joinindiannavy.gov.in/",
   "desc": "Sailor recruitment: SSR (12th with Maths/Physics) and MR (10th). Science and Maths at school level.",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "Indian Navy recruitment site (joinindiannavy.gov.in)"
  },
  {
   "id": "cgl",
   "short": "SSC CGL",
   "tag": "SSC CGL",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC CGL — Combined Graduate Level",
   "body": "Staff Selection Commission",
   "date": "",
   "dateText": "Date awaited",
   "note": "CGL 2026 Tier-I was held 30 Sep–30 Oct 2026 · next CGL date awaited",
   "site": "https://ssc.gov.in/",
   "desc": "Graduate-level posts in central ministries and departments. Quantitative Aptitude and General Awareness (including General Science).",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "SSC (ssc.gov.in)"
  },
  {
   "id": "chsl",
   "short": "SSC CHSL",
   "tag": "SSC CHSL",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC CHSL — Combined Higher Secondary Level",
   "body": "Staff Selection Commission",
   "date": "2026-11-30",
   "dateText": "30 Nov–31 Dec 2026",
   "note": "Tier-I · Computer Based Examination",
   "site": "https://ssc.gov.in/",
   "desc": "Posts for 12th-pass candidates (LDC, DEO and others). Maths and General Awareness (including General Science).",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "2026-12-31",
   "dsrc": "SSC notice dated 1 Oct 2026 (ssc.gov.in)"
  },
  {
   "id": "mts",
   "short": "SSC MTS",
   "tag": "SSC MTS",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC MTS — Multi-Tasking Staff",
   "body": "Staff Selection Commission",
   "date": "",
   "dateText": "Date awaited",
   "note": "2026 cycle exam date not announced yet",
   "site": "https://ssc.gov.in/",
   "desc": "Multi-Tasking Staff and Havaldar posts for 10th-pass candidates. Numerical Aptitude and General Awareness including science.",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "SSC (ssc.gov.in)"
  },
  {
   "id": "gd",
   "short": "SSC GD",
   "tag": "SSC GD",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC GD — General Duty Constable",
   "body": "Staff Selection Commission",
   "date": "",
   "dateText": "Date awaited",
   "note": "Exact date not notified yet (SSC calendar only says tentatively Jan–Mar 2027)",
   "site": "https://ssc.gov.in/",
   "desc": "Constable (GD) in CAPFs, NIA, SSF and Assam Rifles. Maths, Reasoning, GK (science included) and Hindi/English.",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "SSC calendar 2026-27 (ssc.gov.in)"
  },
  {
   "id": "cpo",
   "short": "SSC CPO",
   "tag": "SSC CPO",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC CPO — Sub-Inspector in Delhi Police & CAPFs",
   "body": "Staff Selection Commission",
   "date": "2026-11-20",
   "dateText": "20–28 Nov 2026",
   "note": "Paper-I · Sub-Inspector in Delhi Police & CAPFs",
   "site": "https://ssc.gov.in/",
   "desc": "Sub-Inspector posts in Delhi Police and CAPFs. Quantitative Aptitude and General Awareness (science included).",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "2026-11-28",
   "dsrc": "SSC notice dated 1 Oct 2026 (ssc.gov.in)"
  },
  {
   "id": "ntpc",
   "short": "RRB NTPC",
   "tag": "RRB NTPC",
   "cat": "rly",
   "color": "#F59E0B",
   "name": "RRB NTPC — Non-Technical Popular Categories",
   "body": "Railway Recruitment Boards (RRB)",
   "date": "",
   "dateText": "Date awaited",
   "note": "Graduate-level CBT-I tentatively from the 4th week of Dec 2026 · exact dates not announced",
   "site": "https://www.rrbcdg.gov.in/",
   "desc": "Graduate and undergraduate non-technical posts. Maths, General Intelligence & Reasoning and General Awareness (science included).",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "RRB notices"
  },
  {
   "id": "groupd",
   "short": "RRB Group D",
   "tag": "RRB Group D",
   "cat": "rly",
   "color": "#F59E0B",
   "name": "RRB Group D — Level 1 posts",
   "body": "Railway Recruitment Boards (RRB)",
   "date": "",
   "dateText": "Date awaited",
   "note": "CEN 09/2025 CBT was held 3–25 Aug 2026 · next cycle awaited",
   "site": "https://www.rrbcdg.gov.in/",
   "desc": "Level-1 posts for 10th-pass / ITI candidates. Maths, General Science, Reasoning and General Awareness.",
   "papers": [
    "ma",
    "ph",
    "ch",
    "bi"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs",
    "bi-gs"
   ],
   "end": "",
   "dsrc": "RRB notices"
  },
  {
   "id": "alp",
   "short": "RRB ALP",
   "tag": "RRB ALP",
   "cat": "rly",
   "color": "#F59E0B",
   "name": "RRB ALP — Assistant Loco Pilot & Technician",
   "body": "Railway Recruitment Boards (RRB)",
   "date": "",
   "dateText": "Date awaited",
   "note": "CEN 01/2026 CBT-I was held 3–5 Nov 2026 · next stage date awaited",
   "site": "https://www.rrbcdg.gov.in/",
   "desc": "CBT with Maths, Basic Science and Reasoning, followed by further stages.",
   "papers": [
    "ma",
    "ph",
    "ch"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs"
   ],
   "end": "",
   "dsrc": "RRB notices"
  },
  {
   "id": "rrbje",
   "short": "RRB JE",
   "tag": "RRB JE",
   "cat": "rly",
   "color": "#F59E0B",
   "name": "RRB JE — Junior Engineer",
   "body": "Railway Recruitment Boards (RRB)",
   "date": "",
   "dateText": "Date awaited",
   "note": "CEN 04/2026 CBT-I was held 27–28 Oct & 2 Nov 2026 · next stage date awaited",
   "site": "https://www.rrbcdg.gov.in/",
   "desc": "Junior Engineer / DMS / CMA posts. Maths, General Science, Reasoning and General Awareness in CBT-1.",
   "papers": [
    "ma",
    "ph",
    "ch"
   ],
   "subjects": [
    "ma-arith",
    "ma-alg",
    "ma-geo",
    "ma-trig",
    "ma-stat",
    "ma-di",
    "ph-gs",
    "ch-gs"
   ],
   "end": "",
   "dsrc": "RRB notices"
  }
 ],
 "lectures": [
  {
   "id": "ma-mat-01",
   "s": "ma-mat",
   "n": "L-01",
   "t": "MATRIX BASICS AND TYPES",
   "k": "T",
   "yt": "pIMLHl8tI7Y"
  },
  {
   "id": "ma-mat-02",
   "s": "ma-mat",
   "n": "L-02",
   "t": "Diagonal, Scalar, Identity & Triangular Matrix",
   "k": "T",
   "yt": "c09Z277qSwY"
  },
  {
   "id": "ma-mat-03",
   "s": "ma-mat",
   "n": "L-03",
   "t": "Addition, Subtraction & Scalar Multiplication with Properties",
   "k": "T",
   "yt": "9JuMcMt7Ko0"
  },
  {
   "id": "ma-mat-04",
   "s": "ma-mat",
   "n": "L-04",
   "t": "Matrix Multiplication, Properties & Transpose of a Matrix",
   "k": "T",
   "yt": "J19H2GME6qo"
  },
  {
   "id": "ma-mat-05",
   "s": "ma-mat",
   "n": "L-05",
   "t": "Symmetric and Skew-symmetric Matrices",
   "k": "T",
   "yt": "8WgUyUjaZoM"
  },
  {
   "id": "ma-mat-06",
   "s": "ma-mat",
   "n": "L-06",
   "t": "Determinants : Introduction",
   "k": "T",
   "yt": "7yeLPSIV30w"
  },
  {
   "id": "ph-elec-01",
   "s": "ph-elec",
   "n": "L-01",
   "t": "Electric charge",
   "k": "T",
   "yt": "Qy6eIBhSdZY"
  }
 ],
 "material": [
  {
   "id": "m01",
   "t": "Matrices and determinants theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-mat",
   "drive": "10BPhX3uoOP6eOTQ8mGA2AHihGMeUMDFA"
  },
  {
   "id": "m02",
   "t": "Sets, Relation and functions theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-sets",
   "drive": "1bUriJ0FrUV7KOIOOLJLUtja5DL956hl3"
  },
  {
   "id": "m03",
   "t": "Sequence and Series theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-seq",
   "drive": "1hmWm0tRjCC9dPwsUlUBuBd1EpDY0AUxc"
  },
  {
   "id": "m04",
   "t": "Rectangular Axis and straight lines theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-coord",
   "drive": "1-BNFd45vsZ4gBvo2HwUCI-BstxTwG4aP"
  },
  {
   "id": "m05",
   "t": "Conic Sections theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-coord",
   "drive": "1l-qfJQJQtCLOyrVqfLdN6L7mfvCBgs1r"
  },
  {
   "id": "m06",
   "t": "Trigonometry theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-trig",
   "drive": "1wqCv3D7DOtP71G-1jRab7MssQOYNZukU"
  },
  {
   "id": "m07",
   "t": "Inequalities theory",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-cx",
   "drive": "1wDnyQ5spWkWFJ1AWri_gqyQ5cG2PS6Om"
  },
  {
   "id": "m08",
   "t": "Differential Equations theory with examples",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-de",
   "drive": "1SHY3DgcKQiSieU2xN0YMzOwyU1LWP8J_"
  },
  {
   "id": "m09",
   "t": "Permutations and Combinations theory with examples",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-pc",
   "drive": "1aEXD-gJn9Gfqo1LYxSqiqHjJxP7c7rY9"
  },
  {
   "id": "m10",
   "t": "Principle of mathematical induction theory with examples",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-pmi",
   "drive": "1jDqzQhCeaQQMF8U6MzVEnBJ_-TVh5l80"
  },
  {
   "id": "m11",
   "t": "Theory of equations",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-cx",
   "drive": "1u7KYLauszzNlh_WlPg7o0DjqV8veCCIS"
  },
  {
   "id": "m12",
   "t": "Indefinite integration with examples",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-ic",
   "drive": "1AoEYOyIp03TTZ2_Z5Ph1Wl51eu0hnrDS"
  },
  {
   "id": "m13",
   "t": "Vectors with examples",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-vec",
   "drive": "1JJVeN34y-6nRroPTEgvrIbJLHKw_yyxO"
  },
  {
   "id": "m14",
   "t": "Binomial theorem",
   "d": "Theory notes",
   "k": "Notes",
   "s": "ma-bin",
   "drive": "1lbbw4SsGr1Qw-hGDbmgbTunKsVVTwEqu"
  }
 ],
 "mocks": [],
 "syllabus": [
  {
   "e": "iiser",
   "t": "IISER — official syllabus",
   "url": "https://www.iiseradmission.in/",
   "src": "IISER Joint Admission Committee",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "nest",
   "t": "NEST — official syllabus",
   "url": "https://www.nestexam.in/",
   "src": "NISER Bhubaneswar & UM-DAE CEBS",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "jeemain",
   "t": "JEE Main — official syllabus",
   "url": "https://jeemain.nta.nic.in/",
   "src": "National Testing Agency (NTA)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "jeeadv",
   "t": "JEE Advanced — official syllabus",
   "url": "https://jeeadv.ac.in/",
   "src": "IITs (organising IIT changes yearly)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "neet",
   "t": "NEET UG — official syllabus",
   "url": "https://neet.nta.nic.in/",
   "src": "National Testing Agency (NTA)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "cuetug",
   "t": "CUET UG — official syllabus",
   "url": "https://cuet.nta.nic.in/",
   "src": "National Testing Agency (NTA)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "bitsat",
   "t": "BITSAT — official syllabus",
   "url": "https://www.bitsadmission.com/",
   "src": "BITS Pilani",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "nda",
   "t": "NDA — official syllabus",
   "url": "https://upsc.gov.in/",
   "src": "UPSC",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "iafxy",
   "t": "IAF X & Y — official syllabus",
   "url": "https://agnipathvayu.cdac.in/",
   "src": "Indian Air Force",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "navy",
   "t": "Navy — official syllabus",
   "url": "https://www.joinindiannavy.gov.in/",
   "src": "Indian Navy",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "cgl",
   "t": "SSC CGL — official syllabus",
   "url": "https://ssc.gov.in/",
   "src": "Staff Selection Commission",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "chsl",
   "t": "SSC CHSL — official syllabus",
   "url": "https://ssc.gov.in/",
   "src": "Staff Selection Commission",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "mts",
   "t": "SSC MTS — official syllabus",
   "url": "https://ssc.gov.in/",
   "src": "Staff Selection Commission",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "gd",
   "t": "SSC GD — official syllabus",
   "url": "https://ssc.gov.in/",
   "src": "Staff Selection Commission",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "cpo",
   "t": "SSC CPO — official syllabus",
   "url": "https://ssc.gov.in/",
   "src": "Staff Selection Commission",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "ntpc",
   "t": "RRB NTPC — official syllabus",
   "url": "https://www.rrbcdg.gov.in/",
   "src": "Railway Recruitment Boards (RRB)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "groupd",
   "t": "RRB Group D — official syllabus",
   "url": "https://www.rrbcdg.gov.in/",
   "src": "Railway Recruitment Boards (RRB)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "alp",
   "t": "RRB ALP — official syllabus",
   "url": "https://www.rrbcdg.gov.in/",
   "src": "Railway Recruitment Boards (RRB)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  },
  {
   "e": "rrbje",
   "t": "RRB JE — official syllabus",
   "url": "https://www.rrbcdg.gov.in/",
   "src": "Railway Recruitment Boards (RRB)",
   "n": "Opens the official website: use its Syllabus / Information Bulletin / Notification link"
  }
 ],
 "pyqs": [],
 "pyqPortals": {
  "iiser": {
   "url": "https://www.iiseradmission.in/",
   "label": "Official website — IISER"
  },
  "nest": {
   "url": "https://www.nestexam.in/",
   "label": "Official website — NEST"
  },
  "jeemain": {
   "url": "https://jeemain.nta.nic.in/",
   "label": "Official website — JEE Main"
  },
  "jeeadv": {
   "url": "https://jeeadv.ac.in/",
   "label": "Official website — JEE Advanced"
  },
  "neet": {
   "url": "https://neet.nta.nic.in/",
   "label": "Official website — NEET UG"
  },
  "cuetug": {
   "url": "https://cuet.nta.nic.in/",
   "label": "Official website — CUET UG"
  },
  "bitsat": {
   "url": "https://www.bitsadmission.com/",
   "label": "Official website — BITSAT"
  },
  "nda": {
   "url": "https://upsc.gov.in/",
   "label": "Official website — NDA"
  },
  "iafxy": {
   "url": "https://agnipathvayu.cdac.in/",
   "label": "Official website — IAF X & Y"
  },
  "navy": {
   "url": "https://www.joinindiannavy.gov.in/",
   "label": "Official website — Navy"
  },
  "cgl": {
   "url": "https://ssc.gov.in/",
   "label": "Official website — SSC CGL"
  },
  "chsl": {
   "url": "https://ssc.gov.in/",
   "label": "Official website — SSC CHSL"
  },
  "mts": {
   "url": "https://ssc.gov.in/",
   "label": "Official website — SSC MTS"
  },
  "gd": {
   "url": "https://ssc.gov.in/",
   "label": "Official website — SSC GD"
  },
  "cpo": {
   "url": "https://ssc.gov.in/",
   "label": "Official website — SSC CPO"
  },
  "ntpc": {
   "url": "https://www.rrbcdg.gov.in/",
   "label": "Official website — RRB NTPC"
  },
  "groupd": {
   "url": "https://www.rrbcdg.gov.in/",
   "label": "Official website — RRB Group D"
  },
  "alp": {
   "url": "https://www.rrbcdg.gov.in/",
   "label": "Official website — RRB ALP"
  },
  "rrbje": {
   "url": "https://www.rrbcdg.gov.in/",
   "label": "Official website — RRB JE"
  }
 },
 "patterns": [
  {
   "e": "jeemain",
   "t": "JEE Main · Paper 1 (B.E. / B.Tech)",
   "ed": "Pattern of the latest NTA Information Bulletin (JEE Main 2027) · Session 1 and Session 2 follow the same pattern",
   "sm": "3 hours · 75 questions · 300 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Duration",
     "3 hours (180 minutes)"
    ],
    [
     "Questions / Marks",
     "75 questions · 300 marks"
    ],
    [
     "Subjects",
     "Physics, Chemistry, Mathematics (25 questions each)"
    ],
    [
     "Marking",
     "+4 correct · −1 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Subject",
    "Section A · MCQ",
    "Section B · Numerical",
    "Marks"
   ],
   "rows": [
    [
     "Physics",
     "20",
     "5",
     "100"
    ],
    [
     "Chemistry",
     "20",
     "5",
     "100"
    ],
    [
     "Mathematics",
     "20",
     "5",
     "100"
    ],
    [
     "Total",
     "60",
     "15",
     "300"
    ]
   ],
   "notes": [
    "Section A: four options, only one is correct.",
    "Section B: the answer is a numerical value (integer, rounded off if needed) typed with the on-screen keypad. All 5 questions are compulsory.",
    "Negative marking (−1) applies in both Section A and Section B.",
    "This is Paper 1 (B.E./B.Tech). Papers for B.Arch / B.Planning are in the NTA Information Bulletin."
   ],
   "src": [
    [
     "Official site",
     "https://jeemain.nta.nic.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics: 25 questions = 100 marks (20 MCQ + 5 numerical)."
    ],
    "ch": [
     "Chemistry: 25 questions = 100 marks (20 MCQ + 5 numerical)."
    ],
    "ma": [
     "Mathematics: 25 questions = 100 marks (20 MCQ + 5 numerical)."
    ]
   }
  },
  {
   "e": "jeeadv",
   "t": "JEE Advanced",
   "ed": "Organising institute for 2027: IIT Delhi · the 2027 brochure is awaited, so this is the structure followed every year",
   "sm": "2 papers · 3 hours each · Physics, Chemistry, Maths",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Papers",
     "Paper 1 and Paper 2 — both are compulsory"
    ],
    [
     "Duration",
     "3 hours for each paper"
    ],
    [
     "Subjects",
     "Physics, Chemistry, Mathematics in both papers"
    ],
    [
     "Marking",
     "Different for each question type; printed at the start of every section"
    ]
   ],
   "cols": [
    "Paper",
    "Duration",
    "Subjects"
   ],
   "rows": [
    [
     "Paper 1",
     "3 hours",
     "Physics · Chemistry · Mathematics"
    ],
    [
     "Paper 2",
     "3 hours",
     "Physics · Chemistry · Mathematics"
    ]
   ],
   "notes": [
    "JEE Advanced changes the question types and the marking scheme (negative / partial marking) from year to year — the marks of every section are written in the paper itself.",
    "Only the top 2,50,000 JEE Main candidates can appear.",
    "Read the official information brochure of the year before you attempt a mock."
   ],
   "src": [
    [
     "Official site",
     "https://jeeadv.ac.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics appears in both papers."
    ],
    "ch": [
     "Chemistry appears in both papers."
    ],
    "ma": [
     "Mathematics appears in both papers."
    ]
   }
  },
  {
   "e": "neet",
   "t": "NEET UG",
   "ed": "Pattern of NEET UG 2026 (latest published) · the 2027 bulletin is awaited",
   "sm": "3 hours · 180 questions · 720 marks",
   "facts": [
    [
     "Mode",
     "Pen and paper (OMR) in 2026 · mode for 2027 not announced yet"
    ],
    [
     "Duration",
     "3 hours (180 minutes)"
    ],
    [
     "Questions / Marks",
     "180 questions · 720 marks"
    ],
    [
     "Subjects",
     "Physics, Chemistry, Biology (Botany + Zoology)"
    ],
    [
     "Marking",
     "+4 correct · −1 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Subject",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "Physics",
     "45",
     "180"
    ],
    [
     "Chemistry",
     "45",
     "180"
    ],
    [
     "Biology (Botany 45 + Zoology 45)",
     "90",
     "360"
    ],
    [
     "Total",
     "180",
     "720"
    ]
   ],
   "notes": [
    "All 180 questions are compulsory (no choice section).",
    "Every question has four options, only one correct.",
    "Mock tests on this site use an on-screen test window for practice."
   ],
   "src": [
    [
     "Official site",
     "https://neet.nta.nic.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics: 45 questions = 180 marks."
    ],
    "ch": [
     "Chemistry: 45 questions = 180 marks."
    ],
    "bi": [
     "Biology: 90 questions = 360 marks (Botany 45 + Zoology 45)."
    ]
   }
  },
  {
   "e": "cuetug",
   "t": "CUET UG",
   "ed": "Pattern of the CUET (UG) 2026 Information Bulletin (latest published) · the 2027 bulletin is awaited",
   "sm": "Each subject: 50 MCQs · 60 minutes · 250 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Each test paper",
     "50 compulsory MCQs · 60 minutes · 250 marks"
    ],
    [
     "Subjects",
     "Maximum 5 papers (language, domain subjects, General Aptitude Test)"
    ],
    [
     "Marking",
     "+5 correct · −1 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Test",
    "Questions",
    "Duration",
    "Marks"
   ],
   "rows": [
    [
     "Language",
     "50",
     "60 min",
     "250"
    ],
    [
     "Domain subject (each)",
     "50",
     "60 min",
     "250"
    ],
    [
     "General Aptitude Test",
     "50",
     "60 min",
     "250"
    ]
   ],
   "notes": [
    "Physics, Chemistry, Mathematics and Biology are domain subjects; questions come from the NCERT Class 12 syllabus.",
    "Every subject is a separate test paper with its own timer."
   ],
   "src": [
    [
     "Official site",
     "https://cuet.nta.nic.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Domain paper: 50 questions · 60 minutes · 250 marks."
    ],
    "ch": [
     "Domain paper: 50 questions · 60 minutes · 250 marks."
    ],
    "ma": [
     "Domain paper: 50 questions · 60 minutes · 250 marks."
    ],
    "bi": [
     "Domain paper: 50 questions · 60 minutes · 250 marks."
    ]
   }
  },
  {
   "e": "bitsat",
   "t": "BITSAT",
   "ed": "Pattern of BITSAT 2026 (latest published) · the 2027 brochure is awaited",
   "sm": "3 hours · 130 questions · 390 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT) · two sessions, better score counts"
    ],
    [
     "Duration",
     "3 hours (180 minutes)"
    ],
    [
     "Questions / Marks",
     "130 questions · 390 marks"
    ],
    [
     "Marking",
     "+3 correct · −1 wrong · 0 unanswered"
    ],
    [
     "Bonus",
     "Up to 12 extra questions if all 130 are attempted in time (max 426 marks)"
    ]
   ],
   "cols": [
    "Part",
    "Subject",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "I",
     "Physics",
     "30",
     "90"
    ],
    [
     "II",
     "Chemistry",
     "30",
     "90"
    ],
    [
     "III",
     "English Proficiency",
     "10",
     "30"
    ],
    [
     "III",
     "Logical Reasoning",
     "20",
     "60"
    ],
    [
     "IV",
     "Mathematics (Biology for B.Pharm)",
     "40",
     "120"
    ],
    [
     "Total",
     "",
     "130",
     "390"
    ]
   ],
   "notes": [
    "Check the BITS Pilani brochure for the exact rules of the bonus questions."
   ],
   "src": [
    [
     "Official site",
     "https://www.bitsadmission.com/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics: 30 questions = 90 marks."
    ],
    "ch": [
     "Chemistry: 30 questions = 90 marks."
    ],
    "ma": [
     "Mathematics: 40 questions = 120 marks."
    ]
   }
  },
  {
   "e": "iiser",
   "t": "IISER Aptitude Test (IAT)",
   "ed": "Pattern of IAT 2026 (latest published) · the 2027 brochure is awaited",
   "sm": "3 hours · 60 MCQs · 240 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Duration",
     "3 hours (180 minutes)"
    ],
    [
     "Questions / Marks",
     "60 MCQs · 240 marks"
    ],
    [
     "Marking",
     "+4 correct · −1 wrong · 0 unanswered"
    ],
    [
     "Sections",
     "Biology, Chemistry, Mathematics, Physics — all compulsory"
    ]
   ],
   "cols": [
    "Subject",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "Biology",
     "15",
     "60"
    ],
    [
     "Chemistry",
     "15",
     "60"
    ],
    [
     "Mathematics",
     "15",
     "60"
    ],
    [
     "Physics",
     "15",
     "60"
    ],
    [
     "Total",
     "60",
     "240"
    ]
   ],
   "notes": [
    "Every question has four options, only one correct."
   ],
   "src": [
    [
     "Official site",
     "https://www.iiseradmission.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics: 15 questions = 60 marks."
    ],
    "ch": [
     "Chemistry: 15 questions = 60 marks."
    ],
    "ma": [
     "Mathematics: 15 questions = 60 marks."
    ],
    "bi": [
     "Biology: 15 questions = 60 marks."
    ]
   }
  },
  {
   "e": "nest",
   "t": "NEST",
   "ed": "Pattern of NEST 2026 (latest published) · the 2027 brochure is awaited",
   "sm": "3 hours · 4 sections · 240 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Duration",
     "3 hours (180 minutes)"
    ],
    [
     "Sections",
     "Biology, Chemistry, Mathematics, Physics · 60 marks each"
    ],
    [
     "Total",
     "240 marks"
    ],
    [
     "Marking",
     "Negative marking applies; some questions have more than one correct answer"
    ]
   ],
   "cols": [
    "Subject",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "Biology",
     "20",
     "60"
    ],
    [
     "Chemistry",
     "20",
     "60"
    ],
    [
     "Mathematics",
     "20",
     "60"
    ],
    [
     "Physics",
     "20",
     "60"
    ],
    [
     "Total",
     "80",
     "240"
    ]
   ],
   "notes": [
    "The number of questions, the marks per question type and the negative-marking rule can change every year — read the NEST brochure of the year before attempting a mock."
   ],
   "src": [
    [
     "Official site",
     "https://www.nestexam.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics: 60 marks."
    ],
    "ch": [
     "Chemistry: 60 marks."
    ],
    "ma": [
     "Mathematics: 60 marks."
    ],
    "bi": [
     "Biology: 60 marks."
    ]
   }
  },
  {
   "e": "nda",
   "t": "NDA & NA Written Examination (UPSC)",
   "ed": "Pattern as printed in the UPSC notification · the NDA & NA (I) 2027 notification is due on 2 Dec 2026",
   "sm": "2 papers · 2½ hours each · 900 marks",
   "facts": [
    [
     "Mode",
     "Pen and paper (OMR) · objective type"
    ],
    [
     "Paper I",
     "Mathematics · 120 questions · 300 marks · 2½ hours"
    ],
    [
     "Paper II",
     "General Ability Test · 150 questions · 600 marks · 2½ hours"
    ],
    [
     "Marking",
     "Wrong answer: 1/3 of the marks of that question is deducted"
    ],
    [
     "After the written exam",
     "SSB interview · 900 marks"
    ]
   ],
   "cols": [
    "Paper",
    "Subject",
    "Questions",
    "Marks",
    "Time"
   ],
   "rows": [
    [
     "I",
     "Mathematics",
     "120",
     "300",
     "2½ hours"
    ],
    [
     "II",
     "English",
     "50",
     "200",
     "2½ hours"
    ],
    [
     "II",
     "General Knowledge (Physics, Chemistry, General Science, History, Geography, Current Events)",
     "100",
     "400",
     ""
    ],
    [
     "Total",
     "",
     "270",
     "900",
     ""
    ]
   ],
   "notes": [
    "Mathematics: 2.5 marks per question, wrong answer −0.83.",
    "General Ability Test: 4 marks per question, wrong answer −1.33.",
    "More than one answer marked = treated as a wrong answer; a blank answer carries no penalty."
   ],
   "src": [
    [
     "Official site",
     "https://upsc.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Paper I: Mathematics — 120 questions, 300 marks."
    ],
    "ph": [
     "Physics comes in the General Knowledge part of Paper II."
    ],
    "ch": [
     "Chemistry comes in the General Knowledge part of Paper II."
    ],
    "bi": [
     "General Science (Biology) comes in the General Knowledge part of Paper II."
    ]
   }
  },
  {
   "e": "iafxy",
   "t": "Air Force Agniveervayu · Phase I online test",
   "ed": "Pattern of Intake 02/2027 (latest notified) · next intake notification awaited",
   "sm": "45–85 minutes depending on the group · +1 / −0.25",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Science group (X)",
     "English + Physics + Mathematics · 70 questions · 60 minutes"
    ],
    [
     "Other than Science (Y)",
     "English + Reasoning & General Awareness · 50 questions · 45 minutes"
    ],
    [
     "Both groups",
     "English + Physics + Mathematics + RAGA · 100 questions · 85 minutes"
    ],
    [
     "Marking",
     "+1 correct · −0.25 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Subject",
    "Science (X)",
    "Other than Science (Y)",
    "Both groups"
   ],
   "rows": [
    [
     "English",
     "20",
     "20",
     "20"
    ],
    [
     "Physics",
     "25",
     "—",
     "25"
    ],
    [
     "Mathematics",
     "25",
     "—",
     "25"
    ],
    [
     "Reasoning & General Awareness (RAGA)",
     "—",
     "30",
     "30"
    ],
    [
     "Total",
     "70",
     "50",
     "100"
    ]
   ],
   "notes": [
    "Questions are based on the 10+2 CBSE syllabus.",
    "Phase I is followed by the physical fitness test, adaptability tests and a medical examination."
   ],
   "src": [
    [
     "Official site",
     "https://agnipathvayu.cdac.in/"
    ]
   ],
   "pn": {
    "ph": [
     "Physics: 25 questions (Science group)."
    ],
    "ma": [
     "Mathematics: 25 questions (Science group)."
    ]
   }
  },
  {
   "e": "navy",
   "t": "Navy Agniveer SSR & MR · Stage I (INET)",
   "ed": "Structure of the 01/2027 & 02/2027 notification · next notification awaited",
   "sm": "Online INET · then PFT, written exam and medical",
   "facts": [
    [
     "Stage I",
     "Indian Navy Entrance Test (INET) — online objective test"
    ],
    [
     "Stage II",
     "Physical fitness test, written examination and recruitment medical for shortlisted candidates"
    ],
    [
     "Subjects",
     "English, Science, Mathematics and General Knowledge (see the notification for your post)"
    ],
    [
     "Standard",
     "10+2 (SSR) · 10th (MR)"
    ]
   ],
   "cols": [
    "Stage",
    "What happens"
   ],
   "rows": [
    [
     "Stage I",
     "INET (online) — qualify in every section and in total"
    ],
    [
     "Stage II",
     "PFT · written examination · recruitment medical"
    ]
   ],
   "notes": [
    "The number of questions, the duration and the negative-marking rule are printed in the official notification and sample paper on joinindiannavy.gov.in — confirm them there for the batch you apply for."
   ],
   "src": [
    [
     "Official site",
     "https://www.joinindiannavy.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Mathematics is one of the INET sections."
    ],
    "ph": [
     "Science (Physics) is one of the INET sections."
    ],
    "ch": [
     "Science (Chemistry) is one of the INET sections."
    ],
    "bi": [
     "General Science questions appear in the INET."
    ]
   }
  },
  {
   "e": "cgl",
   "t": "SSC CGL · Tier-I",
   "ed": "Tier-I pattern · Tier-II and later stages are in the SSC notification",
   "sm": "60 minutes · 100 questions · 200 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Examination (CBE)"
    ],
    [
     "Duration",
     "60 minutes"
    ],
    [
     "Questions / Marks",
     "100 questions · 200 marks"
    ],
    [
     "Marking",
     "+2 correct · −0.50 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Section",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "General Intelligence & Reasoning",
     "25",
     "50"
    ],
    [
     "General Awareness",
     "25",
     "50"
    ],
    [
     "Quantitative Aptitude",
     "25",
     "50"
    ],
    [
     "English Comprehension",
     "25",
     "50"
    ],
    [
     "Total",
     "100",
     "200"
    ]
   ],
   "notes": [
    "General Awareness includes General Science (Physics, Chemistry, Biology)."
   ],
   "src": [
    [
     "Official site",
     "https://ssc.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Quantitative Aptitude: 25 questions = 50 marks."
    ],
    "ph": [
     "Physics comes under General Awareness (General Science)."
    ],
    "ch": [
     "Chemistry comes under General Awareness (General Science)."
    ],
    "bi": [
     "Biology comes under General Awareness (General Science)."
    ]
   }
  },
  {
   "e": "chsl",
   "t": "SSC CHSL · Tier-I",
   "ed": "Tier-I pattern · Tier-II and the skill / typing test are in the SSC notification",
   "sm": "60 minutes · 100 questions · 200 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Examination (CBE)"
    ],
    [
     "Duration",
     "60 minutes"
    ],
    [
     "Questions / Marks",
     "100 questions · 200 marks"
    ],
    [
     "Marking",
     "+2 correct · −0.50 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Section",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "English Language",
     "25",
     "50"
    ],
    [
     "General Intelligence",
     "25",
     "50"
    ],
    [
     "Quantitative Aptitude",
     "25",
     "50"
    ],
    [
     "General Awareness",
     "25",
     "50"
    ],
    [
     "Total",
     "100",
     "200"
    ]
   ],
   "notes": [
    "General Awareness includes General Science."
   ],
   "src": [
    [
     "Official site",
     "https://ssc.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Quantitative Aptitude: 25 questions = 50 marks."
    ],
    "ph": [
     "Physics comes under General Awareness (General Science)."
    ],
    "ch": [
     "Chemistry comes under General Awareness (General Science)."
    ],
    "bi": [
     "Biology comes under General Awareness (General Science)."
    ]
   }
  },
  {
   "e": "mts",
   "t": "SSC MTS & Havaldar · Paper I",
   "ed": "Pattern as printed in the recent SSC MTS notices",
   "sm": "2 sessions · 90 questions · 270 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Examination (CBE) · both sessions are compulsory"
    ],
    [
     "Session I",
     "45 minutes · 40 questions · 120 marks · no negative marking"
    ],
    [
     "Session II",
     "45 minutes · 50 questions · 150 marks · −1 for each wrong answer"
    ],
    [
     "Marking",
     "+3 for every correct answer"
    ],
    [
     "Havaldar",
     "PET / PST after Paper I"
    ]
   ],
   "cols": [
    "Session",
    "Section",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "I",
     "Numerical & Mathematical Ability",
     "20",
     "60"
    ],
    [
     "I",
     "Reasoning Ability & Problem Solving",
     "20",
     "60"
    ],
    [
     "II",
     "General Awareness",
     "25",
     "75"
    ],
    [
     "II",
     "English Language & Comprehension",
     "25",
     "75"
    ],
    [
     "Total",
     "",
     "90",
     "270"
    ]
   ],
   "notes": [
    "Not attempting a session disqualifies the candidate."
   ],
   "src": [
    [
     "Official site",
     "https://ssc.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Numerical & Mathematical Ability: 20 questions = 60 marks (Session I, no negative marking)."
    ],
    "ph": [
     "General Science comes under General Awareness (Session II, −1 for a wrong answer)."
    ],
    "ch": [
     "General Science comes under General Awareness (Session II, −1 for a wrong answer)."
    ],
    "bi": [
     "General Science comes under General Awareness (Session II, −1 for a wrong answer)."
    ]
   }
  },
  {
   "e": "gd",
   "t": "SSC GD Constable · Computer Based Exam",
   "ed": "Pattern of the SSC GD notification",
   "sm": "60 minutes · 80 questions · 160 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Examination (CBE)"
    ],
    [
     "Duration",
     "60 minutes"
    ],
    [
     "Questions / Marks",
     "80 questions · 160 marks"
    ],
    [
     "Marking",
     "+2 correct · −0.50 wrong · 0 unanswered"
    ],
    [
     "Next stages",
     "PST / PET, medical"
    ]
   ],
   "cols": [
    "Section",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "General Intelligence & Reasoning",
     "20",
     "40"
    ],
    [
     "General Knowledge & General Awareness",
     "20",
     "40"
    ],
    [
     "Elementary Mathematics",
     "20",
     "40"
    ],
    [
     "English / Hindi",
     "20",
     "40"
    ],
    [
     "Total",
     "80",
     "160"
    ]
   ],
   "notes": [
    "General Knowledge & General Awareness includes General Science."
   ],
   "src": [
    [
     "Official site",
     "https://ssc.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Elementary Mathematics: 20 questions = 40 marks."
    ],
    "ph": [
     "Physics comes under General Knowledge & General Awareness."
    ],
    "ch": [
     "Chemistry comes under General Knowledge & General Awareness."
    ],
    "bi": [
     "Biology comes under General Knowledge & General Awareness."
    ]
   }
  },
  {
   "e": "cpo",
   "t": "SSC CPO (Delhi Police & CAPF SI) · Paper I",
   "ed": "Pattern of the SSC CPO notification",
   "sm": "2 hours · 200 questions · 200 marks",
   "facts": [
    [
     "Mode",
     "Computer Based Examination (CBE)"
    ],
    [
     "Duration",
     "2 hours"
    ],
    [
     "Questions / Marks",
     "200 questions · 200 marks"
    ],
    [
     "Marking",
     "+1 correct · −0.25 wrong · 0 unanswered"
    ],
    [
     "Next stages",
     "PET / PST, Paper II, medical"
    ]
   ],
   "cols": [
    "Section",
    "Questions",
    "Marks"
   ],
   "rows": [
    [
     "General Intelligence & Reasoning",
     "50",
     "50"
    ],
    [
     "General Knowledge & General Awareness",
     "50",
     "50"
    ],
    [
     "Quantitative Aptitude",
     "50",
     "50"
    ],
    [
     "English Comprehension",
     "50",
     "50"
    ],
    [
     "Total",
     "200",
     "200"
    ]
   ],
   "notes": [
    "General Knowledge & General Awareness includes General Science."
   ],
   "src": [
    [
     "Official site",
     "https://ssc.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Quantitative Aptitude: 50 questions = 50 marks."
    ],
    "ph": [
     "Physics comes under General Knowledge & General Awareness."
    ],
    "ch": [
     "Chemistry comes under General Knowledge & General Awareness."
    ],
    "bi": [
     "Biology comes under General Knowledge & General Awareness."
    ]
   }
  },
  {
   "e": "ntpc",
   "t": "RRB NTPC · CBT-1 and CBT-2",
   "ed": "Pattern of the RRB NTPC notification",
   "sm": "CBT-1: 90 minutes · 100 questions",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "CBT-1",
     "100 questions · 90 minutes"
    ],
    [
     "CBT-2 (graduate posts)",
     "120 questions · 90 minutes"
    ],
    [
     "Marking",
     "+1 correct · −1/3 wrong · 0 unanswered"
    ]
   ],
   "cols": [
    "Section",
    "CBT-1",
    "CBT-2"
   ],
   "rows": [
    [
     "Mathematics",
     "30",
     "35"
    ],
    [
     "General Intelligence & Reasoning",
     "30",
     "35"
    ],
    [
     "General Awareness",
     "40",
     "50"
    ],
    [
     "Total",
     "100",
     "120"
    ]
   ],
   "notes": [
    "General Awareness includes General Science and current affairs."
   ],
   "src": [
    [
     "Official site",
     "https://www.rrbcdg.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Mathematics: 30 questions in CBT-1, 35 in CBT-2."
    ],
    "ph": [
     "Physics comes under General Awareness (General Science)."
    ],
    "ch": [
     "Chemistry comes under General Awareness (General Science)."
    ],
    "bi": [
     "Biology comes under General Awareness (General Science)."
    ]
   }
  },
  {
   "e": "groupd",
   "t": "RRB Group D (Level 1) · CBT",
   "ed": "Pattern of the RRB Group D notification",
   "sm": "90 minutes · 100 questions",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Duration",
     "90 minutes"
    ],
    [
     "Questions",
     "100 questions"
    ],
    [
     "Marking",
     "+1 correct · −1/3 wrong · 0 unanswered"
    ],
    [
     "Next stages",
     "PET, document verification, medical"
    ]
   ],
   "cols": [
    "Section",
    "Questions"
   ],
   "rows": [
    [
     "Mathematics",
     "25"
    ],
    [
     "General Intelligence & Reasoning",
     "30"
    ],
    [
     "General Science",
     "25"
    ],
    [
     "General Awareness & Current Affairs",
     "20"
    ],
    [
     "Total",
     "100"
    ]
   ],
   "notes": [
    "General Science is based on the Class 10 level syllabus of Physics, Chemistry and Life Sciences."
   ],
   "src": [
    [
     "Official site",
     "https://www.rrbcdg.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Mathematics: 25 questions."
    ],
    "ph": [
     "General Science: 25 questions (Physics, Chemistry and Biology together)."
    ],
    "ch": [
     "General Science: 25 questions (Physics, Chemistry and Biology together)."
    ],
    "bi": [
     "General Science: 25 questions (Physics, Chemistry and Biology together)."
    ]
   }
  },
  {
   "e": "alp",
   "t": "RRB ALP · CBT-1",
   "ed": "Pattern of the RRB ALP notification",
   "sm": "60 minutes · 75 questions",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Duration",
     "60 minutes"
    ],
    [
     "Questions",
     "75 questions"
    ],
    [
     "Marking",
     "+1 correct · −1/3 wrong · 0 unanswered"
    ],
    [
     "Next stages",
     "CBT-2, CBAT, document verification, medical"
    ]
   ],
   "cols": [
    "Section",
    "Questions"
   ],
   "rows": [
    [
     "Mathematics",
     "20"
    ],
    [
     "Mental Ability (Reasoning)",
     "25"
    ],
    [
     "General Science",
     "20"
    ],
    [
     "General Awareness",
     "10"
    ],
    [
     "Total",
     "75"
    ]
   ],
   "notes": [
    "CBT-2 has Part A (Mathematics, reasoning, basic science & engineering) and Part B (trade subject) — see the notification."
   ],
   "src": [
    [
     "Official site",
     "https://www.rrbcdg.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Mathematics: 20 questions."
    ],
    "ph": [
     "General Science: 20 questions (Physics, Chemistry and Biology together)."
    ],
    "ch": [
     "General Science: 20 questions (Physics, Chemistry and Biology together)."
    ]
   }
  },
  {
   "e": "rrbje",
   "t": "RRB JE · CBT-1",
   "ed": "Pattern of the RRB JE / DMS / CMA notification",
   "sm": "90 minutes · 100 questions",
   "facts": [
    [
     "Mode",
     "Computer Based Test (CBT)"
    ],
    [
     "Duration",
     "90 minutes"
    ],
    [
     "Questions",
     "100 questions"
    ],
    [
     "Marking",
     "+1 correct · −1/3 wrong · 0 unanswered"
    ],
    [
     "Next stages",
     "CBT-2, document verification, medical"
    ]
   ],
   "cols": [
    "Section",
    "Questions"
   ],
   "rows": [
    [
     "Mathematics",
     "30"
    ],
    [
     "General Intelligence & Reasoning",
     "25"
    ],
    [
     "General Awareness",
     "15"
    ],
    [
     "General Science",
     "30"
    ],
    [
     "Total",
     "100"
    ]
   ],
   "notes": [
    "CBT-2 tests basic sciences and the engineering discipline of the post — see the notification."
   ],
   "src": [
    [
     "Official site",
     "https://www.rrbcdg.gov.in/"
    ]
   ],
   "pn": {
    "ma": [
     "Mathematics: 30 questions."
    ],
    "ph": [
     "General Science: 30 questions (Physics, Chemistry and Biology together)."
    ],
    "ch": [
     "General Science: 30 questions (Physics, Chemistry and Biology together)."
    ]
   }
  }
 ],
 "patternsChecked": "18 Nov 2026",
 "faq": [
  {
   "q": "Is everything really free?",
   "a": "Yes. Every lecture, note and PDF is free. No fees, no registration."
  },
  {
   "q": "Are the exam dates official?",
   "a": "Every date on the Home page is taken from the exam body's own announcement (NTA, UPSC, SSC, IIT, etc.). Where no date has been announced it says \"Date awaited\". Each card shows its source and the day it was last checked; always confirm on the Official site button."
  },
  {
   "q": "Which exams are covered?",
   "a": "IISER, NEST, JEE, NEET, CUET UG, BITSAT, NDA, Air Force X & Y, Navy, SSC and Railway exams in which Physics, Chemistry, Maths or Biology are asked."
  },
  {
   "q": "How do I find a lecture?",
   "a": "Open Lectures, choose the category, then the exam, the subject and the topic. Topics marked Coming soon will open when their lectures are ready."
  },
  {
   "q": "Where do I ask a doubt?",
   "a": "Use the Doubts page: Telegram for the fastest reply, a public thread, or a private form."
  }
 ],
 "doubtLinks": [],
 "updates": [
  {
   "date": "2026-11-18",
   "text": "Exam dates re-checked against official announcements. Exam Pattern, Syllabus and PYQ links now open at the top of every exam. Mock tests open with that exam's own instructions."
  },
  {
   "date": "2026-11-17",
   "text": "New look. Lectures and Study Material are now organised as Category → Exam → Subject → Topic."
  }
 ],
 "datesChecked": "18 Nov 2026"
};
