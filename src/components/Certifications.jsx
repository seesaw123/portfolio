const groups = [
  {
    name: "Curriculum & assessment",
    credentials: [
      ["ICT assessment", "GCSE Computer Science: Onscreen Assessment Training (SAMs)", "Pearson School Qualifications"],
      ["Mathematics", "Cambridge IGCSE Math — Creating a Personalized Learning Journey", "Oxford University Press"],
    ],
  },
  {
    name: "Safeguarding & learner welfare",
    credentials: [
      ["Child protection", "Introduction to Child Protection", "UNICEF"],
      ["Child psychology", "Introduction to Child Psychology", "The Open University (OpenLearn)"],
    ],
  },
  {
    name: "Digital practice",
    credentials: [
      ["Digital citizenship", "Digital Citizenship and Safety", "Google for Education"],
      ["ICT for teachers", "ICT Essentials Course for Teachers", "UNESCO Open Learning"],
    ],
  },
  {
    name: "Blockchain",
    credentials: [
      ["On-chain analysis", "On-Chain Analysis for Beginners", "Binance"],
      ["Crypto risk", "Crypto Risk Management", "Binance"],
    ],
  },
];

export default function Certifications() {
  return (
    <section className="certifications-section container" id="certifications" aria-labelledby="certifications-title">
      <div className="certifications-card">
        <h2 id="certifications-title">Certifications</h2>
        <table className="certifications-table" aria-labelledby="certifications-title">
          <thead>
            <tr>
              <th scope="col">Focus</th>
              <th scope="col">Credential</th>
              <th scope="col">Issuer</th>
            </tr>
          </thead>
          {groups.map(({ name, credentials }) => (
            <tbody key={name}>
              <tr className="certifications-group">
                <th scope="rowgroup" colSpan={3}>{name}</th>
              </tr>
              {credentials.map(([focus, title, issuer]) => (
                <tr key={title}>
                  <td>{focus}</td>
                  <td className="credential-title">{title}</td>
                  <td>{issuer}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}
