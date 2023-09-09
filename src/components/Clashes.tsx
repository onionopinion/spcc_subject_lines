import { Table } from "semantic-ui-react";
import subjects from "../datasets/subjects";

interface Clash {
  student: string;
  clashes: {
    [line: string]: string[];
  };
}

interface Props {
  clashes: Clash[];
}

function Clashes({ clashes }: Props) {
  const headers = Array.from({ length: 8 }).map((_, i) => (
    <Table.HeaderCell key={i} colSpan="1">
      Line {i + 1}
    </Table.HeaderCell>
  ));

  const body = clashes.map((clash, index) => (
    <Table.Row key={index}>
      <Table.Cell>{clash.student}</Table.Cell>
      {headers.map((_, columnIndex) => {
        const lineKey = `line ${columnIndex + 1}`;
        const clashData = clash.clashes[lineKey] || [];
        const convertedClashData = clashData.map((subjectId) => (
          <div>
            <p>{subjects[parseInt(subjectId.substring(2)) - 1]}</p>
          </div>
        ));

        return <Table.Cell key={columnIndex}>{convertedClashData}</Table.Cell>;
      })}
    </Table.Row>
  ));

  return (
    <div>
      <p></p>
      <p></p>
      <h2>Clashes</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="1">Student</Table.HeaderCell>
            {headers}
          </Table.Row>
        </Table.Header>
        <Table.Body>{body}</Table.Body>
      </Table>
    </div>
  );
}

export default Clashes;
