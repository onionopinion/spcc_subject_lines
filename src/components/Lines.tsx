import { Table } from "semantic-ui-react";
import subjects from "../datasets/subjects";
import { Props } from "../types/interfaces";

function Lines({ subject_lines }: Props) {
  function getSubjectFromId(id: string) {
    const subjectId = parseInt(id.substring(2));
    return subjects[subjectId - 1];
  }

  const maxSubjects = Math.max(
    ...subject_lines.map((line) => line.subjects.length)
  );

  const headers = subject_lines.map((_, index) => (
    <Table.HeaderCell key={index}>{`Line ${index + 1}`}</Table.HeaderCell>
  ));

  const rows = Array.from({ length: maxSubjects }, (_, colIndex) => (
    <Table.Row key={colIndex}>
      {subject_lines.map((line, rowIndex) => (
        <Table.Cell key={rowIndex}>
          {getSubjectFromId(line.subjects[colIndex])}
        </Table.Cell>
      ))}
    </Table.Row>
  ));

  return (
    <div>
      <h2>Lines</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>{headers}</Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table>
    </div>
  );
}

export default Lines;
