import students from "../datasets/students.tsx";
import subjects from "../datasets/subjects.tsx";
import { Table } from "semantic-ui-react";

function Students() {
  const electiveHeaders = Array.from({ length: 5 }).map((_, i) => (
    <Table.HeaderCell key={i} colSpan="1">
      Elective {i + 1}
    </Table.HeaderCell>
  ));

  return (
    <div>
      <h2>Students</h2>
      <Table celled striped style={{ fontSize: "0.5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="1">Student</Table.HeaderCell>
            <Table.HeaderCell colSpan="1">English</Table.HeaderCell>
            {electiveHeaders}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <Table.Row key={student.student}>
              <Table.Cell>{student.student}</Table.Cell>
              <Table.Cell>
                {subjects[parseInt(student.subjects[0].substring(2)) - 1]}
              </Table.Cell>
              {student.subjects.slice(1).map((subject) => (
                <Table.Cell key={subject}>
                  {subjects[parseInt(subject.substring(2)) - 1]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Students;
