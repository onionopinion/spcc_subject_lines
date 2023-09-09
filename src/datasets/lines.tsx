//NOTE: This dataset is for pre-alpha testing only.

import { Dataset } from "../types/interfaces";

const lines: Dataset = {
  subject_lines: [
    { line: 1, subjects: ["sb1", "sb2"] },
    { line: 2, subjects: ["sb6", "sb13"] },
    { line: 3, subjects: ["sb14", "sb3"] },
    { line: 4, subjects: ["sb4", "sb15"] },
    { line: 5, subjects: ["sb7", "sb9"] },
    { line: 6, subjects: ["sb10", "sb12"] },
    { line: 7, subjects: ["sb5", "sb19"] },
    { line: 8, subjects: ["sb8", "sb11"] },
  ],
  clashes: [
    { student: "st1", clashes: { "line 4": ["sb14", "sb15", "sb13"] } },
    { student: "st3", clashes: { "line 3": ["sb4", "sb13", "sb17"] } },
    { student: "st4", clashes: { "line 5": ["sb7", "sb9"] } },
    { student: "st14", clashes: { "line 5": ["sb7", "sb9"] } },
    { student: "st15", clashes: { "line 4": ["sb14", "sb15", "sb13"] } },
    { student: "st17", clashes: { "line 4": ["sb14", "sb15", "sb13"] } },
    { student: "st18", clashes: { "line 5": ["sb7", "sb9"] } },
    { student: "st30", clashes: { "line 5": ["sb7", "sb9"] } },
    { student: "st31", clashes: { "line 4": ["sb14", "sb15", "sb13"] } },
    { student: "st32", clashes: { "line 4": ["sb14", "sb15", "sb17"] } },
    { student: "st33", clashes: { "line 5": ["sb7", "sb9"] } },
    { student: "st47", clashes: { "line 4": ["sb14", "sb15", "sb13"] } },
  ],
};

export default lines;
