import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState("");

  return (
    <main>
      <h1>QR generator</h1>
      <QRCode
        size={256}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "400",
          margin: "15px 0",
        }}
        value={value}
        viewBox={`0 0 256 256`}
      />
      <input
        type="text"
        placeholder="Text or Url"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => window.print()}>Download</button>
    </main>
  );
}

export default App;
