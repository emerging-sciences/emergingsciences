// Mock test questions. Add a test here and list it in data.js -> mocks.
// Key = the mock's id (same id in data.js). Format of one test:
//   cfg: {exam:'jeemain', title:'...', minutes:180, secs:{KEY:'Section name', ...}}
//   q:   [{s:'KEY', t:'MCQ'|'NAT'|'MSQ', m:4, q:'question ($ for maths)', o:['A','B','C','D'], a:[correct option index, 0=A], e:'solution'}, ...]
//        NAT (numerical) has no 'o' and  a:[low, high]  (for an exact integer answer 20 write a:[20,20]).
//   The order of questions in q = the order students see; each distinct s becomes one section tab.
window.ES_MOCKS={
"jeemain-full-1":{
 "cfg": {
  "exam": "jeemain",
  "title": "JEE Main Full Mock 1 (Sample)",
  "minutes": 10,
  "secs": {
   "MA": "Mathematics — Section A (MCQ)",
   "MB": "Mathematics — Section B (Numerical)",
   "PA": "Physics — Section A (MCQ)",
   "PB": "Physics — Section B (Numerical)",
   "CA": "Chemistry — Section A (MCQ)",
   "CB": "Chemistry — Section B (Numerical)"
  }
 },
 "q": [
  {
   "s": "MA",
   "t": "MCQ",
   "m": 4,
   "q": "The value of $\\int_0^1 2x\\,dx$ is",
   "o": [
    "0",
    "1",
    "2",
    "$\\tfrac{1}{2}$"
   ],
   "a": [
    1
   ],
   "e": "$\\int_0^1 2x\\,dx = [x^2]_0^1 = 1 - 0 = 1$."
  },
  {
   "s": "MB",
   "t": "NAT",
   "m": 4,
   "q": "The sum of all the roots of the equation $x^2 - 7x + 12 = 0$ is ____.",
   "a": [
    7,
    7
   ],
   "e": "Sum of roots $= -\\dfrac{b}{a} = 7$ (the roots are 3 and 4)."
  },
  {
   "s": "PA",
   "t": "MCQ",
   "m": 4,
   "q": "A ball is thrown vertically upward with a speed of $20\\ \\text{m/s}$. Taking $g = 10\\ \\text{m/s}^2$, the maximum height reached by the ball is",
   "o": [
    "10 m",
    "15 m",
    "20 m",
    "40 m"
   ],
   "a": [
    2
   ],
   "e": "$H = \\dfrac{u^2}{2g} = \\dfrac{20^2}{2 \\times 10} = 20\\ \\text{m}$."
  },
  {
   "s": "PB",
   "t": "NAT",
   "m": 4,
   "q": "A constant force of $10\\ \\text{N}$ acts on a body of mass $2\\ \\text{kg}$ initially at rest. The speed of the body after $4\\ \\text{s}$ is ____ m/s.",
   "a": [
    20,
    20
   ],
   "e": "$a = F/m = 5\\ \\text{m/s}^2$, so $v = at = 5 \\times 4 = 20\\ \\text{m/s}$."
  },
  {
   "s": "CA",
   "t": "MCQ",
   "m": 4,
   "q": "The number of moles in $36\\ \\text{g}$ of water ($\\text{H}=1$, $\\text{O}=16$) is",
   "o": [
    "2",
    "1",
    "3",
    "4"
   ],
   "a": [
    0
   ],
   "e": "Molar mass of $\\text{H}_2\\text{O} = 18\\ \\text{g/mol}$, so moles $= 36/18 = 2$."
  },
  {
   "s": "CB",
   "t": "NAT",
   "m": 4,
   "q": "The number of sigma ($\\sigma$) bonds in one molecule of ethene ($\\text{C}_2\\text{H}_4$) is ____.",
   "a": [
    5,
    5
   ],
   "e": "Four C–H $\\sigma$ bonds + one C–C $\\sigma$ bond (the second C–C bond is a $\\pi$ bond) $= 5$."
  }
 ]
}
};
