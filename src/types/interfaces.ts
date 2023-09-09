export interface Line {
  line: number;
  subjects: string[];
}

export interface Props {
  subject_lines: Line[];
}

export interface Dataset {
  subject_lines: Line[];
  clashes: Clash[];
}

export interface Clash {
  student: string;
  clashes: {
    [line: string]: string[];
  };
}
