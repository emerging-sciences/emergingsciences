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
   "dateText": "Tentative",
   "note": "Tentative · late May / June 2027",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
  },
  {
   "id": "jeemain",
   "short": "JEE Main",
   "tag": "JEE Main",
   "cat": "ent",
   "color": "#60A5FA",
   "name": "JEE Main",
   "body": "National Testing Agency (NTA)",
   "date": "",
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
  },
  {
   "id": "jeeadv",
   "short": "JEE Advanced",
   "tag": "JEE Advanced",
   "cat": "ent",
   "color": "#818CF8",
   "name": "JEE Advanced",
   "body": "IITs (organising IIT changes yearly)",
   "date": "",
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
  },
  {
   "id": "nda",
   "short": "NDA",
   "tag": "NDA",
   "cat": "def",
   "color": "#38BDF8",
   "name": "NDA & NA Examination",
   "body": "UPSC",
   "date": "",
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
  },
  {
   "id": "chsl",
   "short": "SSC CHSL",
   "tag": "SSC CHSL",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC CHSL — Combined Higher Secondary Level",
   "body": "Staff Selection Commission",
   "date": "",
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
  },
  {
   "id": "cpo",
   "short": "SSC CPO",
   "tag": "SSC CPO",
   "cat": "ssc",
   "color": "#A78BFA",
   "name": "SSC CPO — Sub-Inspector in Delhi Police & CAPFs",
   "body": "Staff Selection Commission",
   "date": "",
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
   "dateText": "See official site",
   "note": "Date awaited",
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
   ]
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
 "syllabus": [],
 "pyqs": [],
 "pyqPortals": {},
 "patterns": [],
 "patternsChecked": "",
 "faq": [
  {
   "q": "Is everything really free?",
   "a": "Yes. Every lecture, note and PDF is free. No fees, no registration."
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
   "date": "2026-11-17",
   "text": "New look. Lectures and Study Material are now organised as Category → Exam → Subject → Topic."
  }
 ]
};
