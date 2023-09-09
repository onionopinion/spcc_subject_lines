import { Button, Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { useState } from "react";
import lines from "../datasets/lines";
import Lines from "./Lines.tsx";
import Clashes from "./Clashes.tsx";

function Prompter() {
  const [loading, setLoading] = useState(false);
  const [line, setLine] = useState(false);

  function generate() {
    setLine(false);
    setLoading(true);
    //Call API here
    setTimeout(() => {
      setLine(true);
      setLoading(false);
    }, Math.random() * 2000 + 500);
  }

  return (
    <div className="Prompter">
      <h1>
        Subject line Generator 0.0 {"(pre-alpha demo)                  "}
        <Button basic color="blue" onClick={generate}>
          Generate
        </Button>
      </h1>
      {loading && (
        <Segment>
          <h1></h1>
          <Dimmer active>
            <Loader size="large">Loading</Loader>
          </Dimmer>
          <Image src="/images/wireframe/short-paragraph.png" />
          <Image src="/images/wireframe/short-paragraph.png" />
          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      )}
      {line && (
        <>
          <Lines subject_lines={lines.subject_lines} />
          <Clashes clashes={lines.clashes}></Clashes>
        </>
      )}
      <h1></h1>
    </div>
  );
}

export default Prompter;
